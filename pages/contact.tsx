import React from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import {
  IoGlobeSharp,
  IoLogoGithub,
  IoLogoLinkedin,
} from 'react-icons/io5';

export default function Contact() {
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
                Email me at:{" "}
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
                Mobile:{" "}
              </span>
              (+91) 70030-28043
            </h4>
            <div className="mt-2">
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
