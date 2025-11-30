import React, { useState, useRef } from 'react';
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
  const cardRef = useRef<HTMLDivElement>(null);

  const progressSteps = [
    'Validating...',
    'Getting your card ready....',
    'Generating...',
  ];

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
              <div className="border border-gray-300 rounded-md p-6 shadow-sm w-full md:max-w-2xl">
                <form className="flex flex-col gap-5 w-full">
                  {[
                    {
                      name: 'name',
                      label: 'Name',
                      type: 'text',
                      required: true,
                      placeholder: 'Your Full Name',
                    },
                    {
                      name: 'email',
                      label: 'Email',
                      type: 'email',
                      required: true,
                      placeholder: 'your.email@example.com',
                    },
                    {
                      name: 'phone',
                      label: 'Phone Number',
                      type: 'tel',
                      required: true,
                      placeholder: '+91 1234567890',
                    },
                    {
                      name: 'address',
                      label: 'Address',
                      type: 'text',
                      required: true,
                      placeholder: 'Your Address',
                    },
                  ].map(({ name, label, type, required, placeholder }) => (
                    <div key={name} className="w-full">
                      <div className="flex flex-col md:flex-row md:items-start gap-y-2 md:gap-x-6 w-full">
                        <label
                          htmlFor={name}
                          className="md:w-40 text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap"
                        >
                          {label}
                          {required && (
                            <span className="text-red-500 ml-0.5">*</span>
                          )}
                        </label>
                        <div className="flex flex-col flex-grow">
                          <input
                            type={type}
                            id={name}
                            name={name}
                            value={formData[name as keyof FormData] as string}
                            onChange={handleChange}
                            placeholder={placeholder}
                            className={`p-2 border ${
                              formErrors[name as keyof FormData]
                                ? 'border-red-500'
                                : 'border-gray-300 dark:border-gray-600'
                            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
                          />
                          {formErrors[name as keyof FormData] && (
                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                              {formErrors[name as keyof FormData]}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Emergency Contact */}
                  <div className="w-full">
                    <div className="flex flex-col md:flex-row md:items-start gap-y-2 md:gap-x-6 w-full">
                      <label
                        htmlFor="emergencyContact"
                        className="md:w-40 text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap"
                      >
                        Emergency Contact
                        <span className="text-red-500 ml-0.5">*</span>
                      </label>
                      <div className="flex flex-col flex-grow">
                        <input
                          type="tel"
                          id="emergencyContact"
                          name="emergencyContact"
                          value={formData.emergencyContact}
                          onChange={handleChange}
                          placeholder="+91 1234567890"
                          className={`p-2 border ${
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
                    </div>
                  </div>

                  {/* Blood Group */}
                  <div className="w-full">
                    <div className="flex flex-col md:flex-row md:items-start gap-y-2 md:gap-x-6 w-full">
                      <label
                        htmlFor="bloodGroup"
                        className="md:w-40 text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap"
                      >
                        Blood Group
                        <span className="text-red-500 ml-0.5">*</span>
                      </label>
                      <div className="flex flex-col flex-grow">
                        <input
                          type="text"
                          id="bloodGroup"
                          name="bloodGroup"
                          value={formData.bloodGroup}
                          onChange={handleChange}
                          placeholder="e.g., A+, B-, O+, etc."
                          className={`p-2 border ${
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
                    </div>
                  </div>

                  {/* Website Links */}
                  <div className="w-full">
                    <div className="flex flex-col md:flex-row md:items-start gap-y-2 md:gap-x-6 w-full">
                      <label className="md:w-40 text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                        Website Links
                      </label>
                      <div className="flex flex-col flex-grow gap-2">
                        {formData.websites.map((website, index) => (
                          <div key={index} className="flex gap-2 items-center">
                            <input
                              type="url"
                              value={website}
                              onChange={(e) =>
                                handleWebsiteChange(index, e.target.value)
                              }
                              placeholder={`Website ${index + 1} (optional)`}
                              className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                            />
                            {formData.websites.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeWebsite(index)}
                                className="text-red-500 hover:text-red-700"
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
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm"
                          >
                            <IoAddCircleOutline />
                            Add Website
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* QR Link */}
                  <div className="w-full">
                    <div className="flex flex-col md:flex-row md:items-start gap-y-2 md:gap-x-6 w-full">
                      <label
                        htmlFor="qrLink"
                        className="md:w-40 text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap"
                      >
                        QR Link To
                        <span className="text-red-500 ml-0.5">*</span>
                      </label>
                      <div className="flex flex-col flex-grow">
                        <input
                          type="text"
                          id="qrLink"
                          name="qrLink"
                          value={formData.qrLink}
                          onChange={handleChange}
                          placeholder="your website or contact link"
                          className={`p-2 border ${
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
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        {getInitials(formData.name)}
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

