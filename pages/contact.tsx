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
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h3 className="text-lg font-semibold mt-4">Contact Details</h3>
          <div className="mt-3">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg md:text-xl font-semibold">
                Let's talk about everything!
              </h2>
              <h3 className="text-sm md:text-base">
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
                <span className="text-sm md:text-md font-semibold">
                  Mobile:{' '}
                </span>
                (+91) 70030-28043
              </h4>

              <div className="mt-6 border border-gray-300 rounded-md p-6 shadow-sm w-full md:max-w-2xl">
                <h3 className="text-sm md:text-base font-medium text-gray-800 leading-snug md:leading-tight mb-6">
                  Open to collaborations, opportunities, or a friendly hello —
                  feel free to reach out!
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
                      label: 'Link',
                      type: 'url',
                      required: false,
                      placeholder: 'Link to your work',
                    },
                  ].map(({ name, label, type, required, placeholder }) => (
                    <div key={name} className="w-full">
                      <div className="flex flex-col md:flex-row md:items-start gap-y-2 md:gap-x-6 w-full">
                        <label
                          htmlFor={name}
                          className="md:w-40 text-sm font-medium text-gray-700 whitespace-nowrap"
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

                  <div className="flex flex-col md:flex-row gap-y-2 md:items-start w-full mt-4">
                    <label
                      htmlFor="message"
                      className="md:w-40 text-sm font-medium text-gray-700"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-col flex-grow">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Write your message here..."
                        className={`w-full p-2 border ${
                          formErrors.message
                            ? 'border-red-500'
                            : 'border-gray-300'
                        } rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-pink-500`}
                      />
                      {formErrors.message && (
                        <p className="text-sm text-red-600">
                          {formErrors.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="w-full py-2 rounded-md transition flex items-center justify-center gap-2
             bg-[rgba(37,99,235,0.9)] hover:bg-[rgba(37,99,235,1)]
             dark:bg-[rgba(147,197,253,0.9)] dark:hover:bg-[rgba(147,197,253,1)]
             text-white disabled:cursor-default disabled:opacity-50"
                      disabled={isLoading}
                    >
                      {isLoading && (
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                          ></path>
                        </svg>
                      )}
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
                <div className="text-black text-xl flex gap-5 flex-wrap">
                  <Link href="https://dev-tathagata.vercel.app" passHref>
                    <a target="_blank" rel="noopener noreferrer">
                      <IoGlobeSharp className="hover:text-pink-600" />
                    </a>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/tathagata-chakraborty-0bb5b71a3"
                    passHref
                  >
                    <a target="_blank" rel="noopener noreferrer">
                      <IoLogoLinkedin className="hover:text-pink-600" />
                    </a>
                  </Link>
                  <Link href="https://github.com/tathagata1805" passHref>
                    <a target="_blank" rel="noopener noreferrer">
                      <IoLogoGithub className="hover:text-pink-600" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
