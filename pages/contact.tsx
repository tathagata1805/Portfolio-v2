import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { IoGlobeSharp, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import emailjs from '@emailjs/browser';

const TEMPLATE_KEY = 'template_43fepc4';
const PUBLIC_API_KEY = 'W7kEaN1qX_s920pB5';
const SERVICE_KEY = 'service_m9cl7ra';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof typeof formData, string>>
  >({});

  const [formStatus, setFormStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const requiredFields: (keyof typeof formData)[] = [
      'name',
      'email',
      'message',
    ];
    const newErrors: Partial<Record<keyof typeof formData, string>> = {};

    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = `Please enter your ${field}.`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setFormErrors(newErrors);
      setFormStatus('');
      return;
    }
    setIsLoading(true);

    try {
      await emailjs.send(
        SERVICE_KEY,
        TEMPLATE_KEY,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          website: formData.website,
          message: formData.message,
        },
        PUBLIC_API_KEY
      );

      setFormStatus(
        `Thank you for reaching out to me ${formData.name}! I will get back to you soon.`
      );
      setFormErrors({});
      setFormData({
        name: '',
        email: '',
        phone: '',
        website: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact | GitHub</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold mt-4">Contact Details</h3>
        <div className="mt-3">
          <div className="flex flex-col gap-2 px-4">
            <h2 className="text-lg font-semibold">
              Let's talk about everything!
            </h2>
            <h3 className="text-sm md:text-md">
              Don't like forms? Connect with me over{' '}
              <a
                href="https://www.linkedin.com/in/tathagata-chakraborty-0bb5b71a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
              . 👋
            </h3>
            <h4>
              <span className="text-sm md:text-md font-semibold">
                Email me at:{' '}
              </span>
              <a
                href="mailto:tathagata1805@gmail.com"
                className="text-blue-600 hover:underline"
              >
                tathagata1805@gmail.com
              </a>
            </h4>
            <h4>
              <span className="text-sm md:text-md font-semibold">Mobile: </span>
              (+91) 70030-28043
            </h4>

            <div className="mt-6 border border-gray-300 rounded-md p-6 shadow-sm w-full">
              <h3 className="text-xl font-semibold mb-6">
                Do you have any opportunities for me? Or simply wanna say Hi?
              </h3>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 w-full"
              >
                {[
                  {
                    name: 'name',
                    label: 'Name',
                    type: 'text',
                    required: true,
                    placeholder: 'Your Name',
                  },
                  {
                    name: 'email',
                    label: 'Email',
                    type: 'email',
                    required: true,
                    placeholder: 'Your Email Address',
                  },
                  {
                    name: 'phone',
                    label: 'Phone Number',
                    type: 'tel',
                    required: false,
                    placeholder: 'Your Contact Number',
                  },
                  {
                    name: 'website',
                    label: 'Website',
                    type: 'url',
                    required: false,
                    placeholder: 'Your LinkedIn, GitHub, or Portfolio',
                  },
                ].map(({ name, label, type, required, placeholder }) => (
                  <div key={name} className="w-full">
                    <div className="flex flex-row items-start gap-x-6 w-full">
                      <label
                        htmlFor={name}
                        className="w-40 pt-2 text-sm font-medium text-gray-700 whitespace-nowrap"
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
                          value={formData[name]}
                          onChange={handleChange}
                          placeholder={placeholder}
                          className={`p-2 border ${
                            formErrors[name]
                              ? 'border-red-500'
                              : 'border-gray-300'
                          } rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500`}
                        />
                        {formErrors[name] && (
                          <p className="mt-1 text-sm text-red-600">
                            {formErrors[name]}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="flex flex-col gap-2 w-full mt-4">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Write your message here..."
                    className={`w-full p-2 border ${
                      formErrors.message ? 'border-red-500' : 'border-gray-300'
                    } rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-pink-500`}
                  />
                  {formErrors.message && (
                    <p className="text-sm text-red-600">{formErrors.message}</p>
                  )}
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>

                {formStatus && (
                  <p
                    className={`mt-3 text-sm text-center ${
                      formStatus.includes('Thank')
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    {formStatus}
                  </p>
                )}
              </form>
            </div>

            <div className="mt-4">
              <div className="text-black text-xl flex gap-5">
                <Link href="https://dev-tathagata.vercel.app">
                  <a target="_blank" rel="noopener noreferrer">
                    <IoGlobeSharp className="hover:text-pink-600" />
                  </a>
                </Link>
                <Link href="https://www.linkedin.com/in/tathagata-chakraborty-0bb5b71a3">
                  <a target="_blank" rel="noopener noreferrer">
                    <IoLogoLinkedin className="hover:text-pink-600" />
                  </a>
                </Link>
                <Link href="https://github.com/tathagata1805">
                  <a target="_blank" rel="noopener noreferrer">
                    <IoLogoGithub className="hover:text-pink-600" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
