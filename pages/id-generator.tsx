import React, { useState, useRef, useEffect } from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';
import { QRCodeSVG } from 'qrcode.react';
import {
  IoAddCircleOutline,
  IoCloseCircleOutline,
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
  IoWaterOutline,
  IoGlobeOutline,
  IoDownloadOutline,
  IoImageOutline,
  IoClose,
} from 'react-icons/io5';

interface FormData {
  name: string;
  email: string;
  phone: string;
  emergencyContact: string;
  address: string;
  bloodGroup: string;
  websites: string[];
  qrLink: string;
}

interface ProgressStep {
  label: string;
  completed: boolean;
}

export default function IdGenerator() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    emergencyContact: '',
    address: '',
    bloodGroup: '',
    websites: [''],
    qrLink: '',
  });

  const [formErrors, setFormErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [showLoader, setShowLoader] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const progressSteps = [
    'Validating...',
    'Getting your card ready....',
    'Generating...',
  ];

  const STORAGE_KEY = 'id_card_photo';

  // Load image from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedImage = localStorage.getItem(STORAGE_KEY);
      if (storedImage) {
        try {
          // Decode from base64
          setUploadedImage(storedImage);
        } catch (error) {
          console.error('Error loading image from storage:', error);
          localStorage.removeItem(STORAGE_KEY);
        }
      }
    }
  }, []);

  // Clear localStorage on page unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem(STORAGE_KEY);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Compress and resize image
  const compressImage = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          
          // Set maximum dimensions (200x200 for ID card)
          const maxWidth = 200;
          const maxHeight = 200;
          let width = img.width;
          let height = img.height;

          // Calculate new dimensions
          if (width > height) {
            if (width > maxWidth) {
              height = (height * maxWidth) / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width = (width * maxHeight) / height;
              height = maxHeight;
            }
          }

          canvas.width = width;
          canvas.height = height;

          // Draw and compress
          ctx?.drawImage(img, 0, 0, width, height);
          
          // Convert to base64 with compression (0.7 quality for JPEG)
          const compressed = canvas.toDataURL('image/jpeg', 0.7);
          resolve(compressed);
        };
        img.onerror = reject;
      };
      reader.onerror = reject;
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Image size should be less than 5MB');
      return;
    }

    try {
      const compressedImage = await compressImage(file);
      setUploadedImage(compressedImage);
      
      // Store in localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, compressedImage);
      }
    } catch (error) {
      console.error('Error processing image:', error);
      alert('Failed to process image. Please try again.');
    }

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeImage = () => {
    setUploadedImage(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: '' }));
    
    // Auto-update QR link if email is provided and QR link is empty or is mailto
    if (name === 'email' && value.trim() && (!formData.qrLink || formData.qrLink.startsWith('mailto:'))) {
      setFormData((prev) => ({ ...prev, qrLink: `mailto:${value.trim()}` }));
    }
  };

  const handleWebsiteChange = (index: number, value: string) => {
    const newWebsites = [...formData.websites];
    newWebsites[index] = value;
    setFormData((prev) => ({ ...prev, websites: newWebsites }));
  };

  const addWebsite = () => {
    if (formData.websites.length < 3) {
      setFormData((prev) => ({
        ...prev,
        websites: [...prev.websites, ''],
      }));
    }
  };

  const removeWebsite = (index: number) => {
    if (formData.websites.length > 1) {
      const newWebsites = formData.websites.filter((_, i) => i !== index);
      setFormData((prev) => ({ ...prev, websites: newWebsites }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.emergencyContact.trim()) {
      newErrors.emergencyContact = 'Emergency contact is required';
    } else if (formData.emergencyContact.trim() === formData.phone.trim()) {
      newErrors.emergencyContact = 'Emergency contact should be different from your contact number';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!formData.bloodGroup.trim()) {
      newErrors.bloodGroup = 'Blood group is required';
    }

    if (!formData.qrLink.trim()) {
      newErrors.qrLink = 'QR link is required';
    } else if (!/^(https?:\/\/|mailto:).+/.test(formData.qrLink)) {
      newErrors.qrLink = 'Please enter a valid URL (starting with http://, https://, or mailto:)';
    }

    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateCard = async () => {
    if (!validateForm()) {
      return;
    }

    setShowLoader(true);
    setProgress(0);

    // Step 1: Validating (0-33%)
    for (let i = 0; i <= 33; i += 3) {
      await new Promise((resolve) => setTimeout(resolve, 30));
      setProgress(i);
    }

    // Step 2: Getting your card ready (33-66%)
    for (let i = 33; i <= 66; i += 3) {
      await new Promise((resolve) => setTimeout(resolve, 30));
      setProgress(i);
    }

    // Step 3: Generating (66-100%)
    for (let i = 66; i <= 100; i += 3) {
      await new Promise((resolve) => setTimeout(resolve, 30));
      setProgress(i);
    }

    setShowLoader(false);
    setShowCard(true);
  };

  const getInitials = (name: string): string => {
    const words = name.trim().split(' ');
    if (words.length >= 2) {
      return (words[0][0] + words[words.length - 1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  const downloadCard = () => {
    if (!cardRef.current) return;

    // Create a canvas to render the card
    import('html2canvas').then((html2canvas) => {
      html2canvas.default(cardRef.current!, {
        backgroundColor: '#ffffff',
        scale: 2,
        logging: false,
      }).then((canvas) => {
        const link = document.createElement('a');
        link.download = `${formData.name.replace(/\s+/g, '_')}_ID_Card.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      }).catch((error) => {
        console.error('Error generating card image:', error);
        alert('Failed to download card. Please try again.');
      });
    });
  };

  const getQRLink = (): string => {
    if (formData.qrLink.startsWith('mailto:')) {
      return formData.qrLink;
    }
    if (formData.qrLink.startsWith('http://') || formData.qrLink.startsWith('https://')) {
      return formData.qrLink;
    }
    // If it's just an email without mailto:, add it
    if (formData.qrLink.includes('@')) {
      return `mailto:${formData.qrLink}`;
    }
    return formData.qrLink;
  };

  return (
    <>
      <Head>
        <title>ID Generator | GitHub</title>
      </Head>
      <Layout border="border-2">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h3 className="text-lg font-semibold mt-4">ID Card Generator</h3>
          <div className="mt-3">
            <h2 className="text-lg md:text-xl font-semibold mb-4">
              {showCard
                ? 'Your Professional ID Card is here!'
                : 'Generate your Professional ID Card by filling out the form'}
            </h2>

            {!showCard ? (
              <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6 shadow-sm w-full md:max-w-2xl bg-white dark:bg-gray-800">
                <form className="flex flex-col gap-6 w-full">
                  {/* Top Section: Name/Email on Left, Photo Upload on Right */}
                  <div className="flex flex-col md:flex-row gap-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                    {/* Left Side: Name and Email */}
                    <div className="flex-1 flex flex-col gap-4">
                      {/* Name Field */}
                      <div className="w-full">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Name
                          <span className="text-red-500 ml-0.5">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Full Name"
                          className={`w-full p-3 border ${
                            formErrors.name
                              ? 'border-red-500'
                              : 'border-gray-300 dark:border-gray-600'
                          } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
                        />
                        {formErrors.name && (
                          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                            {formErrors.name}
                          </p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div className="w-full">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Email
                          <span className="text-red-500 ml-0.5">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className={`w-full p-3 border ${
                            formErrors.email
                              ? 'border-red-500'
                              : 'border-gray-300 dark:border-gray-600'
                          } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
                        />
                        {formErrors.email && (
                          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                            {formErrors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Right Side: Photo Upload */}
                    <div className="flex flex-col items-center md:items-end gap-3">
                      <div className="flex flex-col items-center gap-2">
                        {uploadedImage ? (
                          <div className="relative">
                            <img
                              src={uploadedImage}
                              alt="Uploaded"
                              className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600 shadow-md"
                            />
                            <button
                              type="button"
                              onClick={removeImage}
                              className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600 transition shadow-lg"
                              title="Remove photo"
                            >
                              <IoClose className="text-sm" />
                            </button>
                          </div>
                        ) : (
                          <label className="cursor-pointer">
                            <div className="w-24 h-24 rounded-full border-2 border-dashed border-gray-400 dark:border-gray-500 flex items-center justify-center bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition">
                              <IoImageOutline className="text-3xl text-gray-500 dark:text-gray-400" />
                            </div>
                            <input
                              ref={fileInputRef}
                              type="file"
                              accept="image/*"
                              onChange={handleImageUpload}
                              className="hidden"
                            />
                          </label>
                        )}
                        <span className="text-xs text-gray-500 dark:text-gray-400 text-center">
                          {uploadedImage ? 'Photo added' : 'Add photo (optional)'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section: All Other Fields */}
                  <div className="flex flex-col gap-5">
                    {/* Phone Number */}
                    <div className="w-full">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Phone Number
                        <span className="text-red-500 ml-0.5">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 1234567890"
                        className={`w-full p-3 border ${
                          formErrors.phone
                            ? 'border-red-500'
                            : 'border-gray-300 dark:border-gray-600'
                        } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {formErrors.phone}
                        </p>
                      )}
                    </div>

                    {/* Address */}
                    <div className="w-full">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Address
                        <span className="text-red-500 ml-0.5">*</span>
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Your Address"
                        className={`w-full p-3 border ${
                          formErrors.address
                            ? 'border-red-500'
                            : 'border-gray-300 dark:border-gray-600'
                        } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
                      />
                      {formErrors.address && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {formErrors.address}
                        </p>
                      )}
                    </div>

                    {/* Emergency Contact */}
                    <div className="w-full">
                      <label
                        htmlFor="emergencyContact"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Emergency Contact
                        <span className="text-red-500 ml-0.5">*</span>
                      </label>
                      <input
                        type="tel"
                        id="emergencyContact"
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleChange}
                        placeholder="+91 1234567890"
                        className={`w-full p-3 border ${
                          formErrors.emergencyContact
                            ? 'border-red-500'
                            : 'border-gray-300 dark:border-gray-600'
                        } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
                      />
                      {formErrors.emergencyContact && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {formErrors.emergencyContact}
                        </p>
                      )}
                    </div>

                    {/* Blood Group */}
                    <div className="w-full">
                      <label
                        htmlFor="bloodGroup"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Blood Group
                        <span className="text-red-500 ml-0.5">*</span>
                      </label>
                      <input
                        type="text"
                        id="bloodGroup"
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                        placeholder="e.g., A+, B-, O+, etc."
                        className={`w-full p-3 border ${
                          formErrors.bloodGroup
                            ? 'border-red-500'
                            : 'border-gray-300 dark:border-gray-600'
                        } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
                      />
                      {formErrors.bloodGroup && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {formErrors.bloodGroup}
                        </p>
                      )}
                    </div>

                    {/* Website Links */}
                    <div className="w-full">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Website Links (optional)
                      </label>
                      <div className="flex flex-col gap-2">
                        {formData.websites.map((website, index) => (
                          <div key={index} className="flex gap-2 items-center">
                            <input
                              type="url"
                              value={website}
                              onChange={(e) =>
                                handleWebsiteChange(index, e.target.value)
                              }
                              placeholder={`Website ${index + 1} (optional)`}
                              className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                            />
                            {formData.websites.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeWebsite(index)}
                                className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition"
                                title="Remove website"
                              >
                                <IoCloseCircleOutline className="text-2xl" />
                              </button>
                            )}
                          </div>
                        ))}
                        {formData.websites.length < 3 && (
                          <button
                            type="button"
                            onClick={addWebsite}
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm w-fit"
                          >
                            <IoAddCircleOutline />
                            Add Website
                          </button>
                        )}
                      </div>
                    </div>

                    {/* QR Link */}
                    <div className="w-full">
                      <label
                        htmlFor="qrLink"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        QR Link To
                        <span className="text-red-500 ml-0.5">*</span>
                      </label>
                      <input
                        type="text"
                        id="qrLink"
                        name="qrLink"
                        value={formData.qrLink}
                        onChange={handleChange}
                        placeholder="your website or contact link"
                        className={`w-full p-3 border ${
                          formErrors.qrLink
                            ? 'border-red-500'
                            : 'border-gray-300 dark:border-gray-600'
                        } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
                      />
                      {formErrors.qrLink && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {formErrors.qrLink}
                        </p>
                      )}
                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        The QR code will link to this URL or email
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={generateCard}
                      className="w-full py-2 rounded-md transition flex items-center justify-center gap-2 bg-[rgba(37,99,235,0.9)] hover:bg-[rgba(37,99,235,1)] dark:bg-[rgba(147,197,253,0.9)] dark:hover:bg-[rgba(147,197,253,1)] text-white disabled:cursor-default disabled:opacity-50"
                    >
                      Generate
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-6">
                <div
                  ref={cardRef}
                  id="id-card"
                  className="w-full max-w-md bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-2xl p-6 relative overflow-hidden"
                >
                  {/* Decorative background elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500 opacity-10 rounded-full -ml-12 -mb-12"></div>

                  <div className="relative z-10">
                    {/* Header with Avatar and Name */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg overflow-hidden">
                        {uploadedImage ? (
                          <img
                            src={uploadedImage}
                            alt={formData.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          getInitials(formData.name)
                        )}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {formData.name}
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Your ID
                        </p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <IoMailOutline className="text-gray-600 dark:text-gray-400 flex-shrink-0" />
                        <a
                          href={`mailto:${formData.email}`}
                          className="text-sm text-gray-700 dark:text-gray-300 break-all hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          {formData.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <IoCallOutline className="text-gray-600 dark:text-gray-400 flex-shrink-0" />
                        <a
                          href={`tel:${formData.phone.replace(/\s+/g, '')}`}
                          className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          {formData.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <IoCallOutline className="text-gray-600 dark:text-gray-400 flex-shrink-0" />
                        <span className="text-xs text-gray-500 dark:text-gray-400">Emergency:</span>
                        <a
                          href={`tel:${formData.emergencyContact.replace(/\s+/g, '')}`}
                          className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          {formData.emergencyContact}
                        </a>
                      </div>
                      <div className="flex items-start gap-3">
                        <IoLocationOutline className="text-gray-600 dark:text-gray-400 flex-shrink-0 mt-1" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {formData.address}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <IoWaterOutline className="text-gray-600 dark:text-gray-400 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          Blood Group: {formData.bloodGroup}
                        </span>
                      </div>
                      {formData.websites.filter((w) => w.trim()).length > 0 && (
                        <div className="flex items-start gap-3">
                          <IoGlobeOutline className="text-gray-600 dark:text-gray-400 flex-shrink-0 mt-1" />
                          <div className="flex flex-col gap-1">
                            {formData.websites
                              .filter((w) => w.trim())
                              .map((website, index) => (
                                <a
                                  key={index}
                                  href={website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline break-all"
                                >
                                  {website}
                                </a>
                              ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* QR Code */}
                    <div className="flex justify-end">
                      <div className="bg-white dark:bg-gray-700 p-2 rounded-lg shadow-md">
                        <QRCodeSVG
                          value={getQRLink()}
                          size={100}
                          level="H"
                          includeMargin={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={downloadCard}
                    className="px-6 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 transition"
                  >
                    <IoDownloadOutline />
                    Download Card
                  </button>
                  <button
                    onClick={() => {
                      setShowCard(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        emergencyContact: '',
                        address: '',
                        bloodGroup: '',
                        websites: [''],
                        qrLink: '',
                      });
                      setFormErrors({});
                      // Clear uploaded image
                      setUploadedImage(null);
                      if (typeof window !== 'undefined') {
                        localStorage.removeItem(STORAGE_KEY);
                      }
                    }}
                    className="px-6 py-2 rounded-md bg-gray-600 hover:bg-gray-700 text-white transition"
                  >
                    Generate New Card
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Progress Loader Overlay */}
        {showLoader && (
          <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 z-50 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-8 max-w-md w-full mx-4">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-4">
                  {progress < 33
                    ? progressSteps[0]
                    : progress < 66
                    ? progressSteps[1]
                    : progressSteps[2]}
                </h3>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                  {Math.round(progress)}%
                </p>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
}

