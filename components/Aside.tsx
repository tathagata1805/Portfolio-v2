import React from 'react';
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoPaperPlane,
  IoMailOutline,
  IoLocationOutline,
  IoStorefrontOutline,
  IoPhonePortraitOutline,
  IoArrowDown,
} from 'react-icons/io5';
import Pills from '@/components/Pills';
import Link from 'next/link';

export default function Aside() {
  return (
    <>
      <aside className="bg-gray-50 lg:bg-white pb-4 lg:pb-0 top-0 w-full px-8 sm:px-12 md:px-16 lg:px-0 lg:w-3/12 h-full dark:bg-gray-800 dark:lg:bg-gray-900">
        <img
          src="/assets/img/mypic.jfif"
          alt=""
          className="h-48 md:h-56 lg:h-60 my-4 rounded-full"
        />
        <h1 className="text-2xl font-bold">Tathagata Chakraborty</h1>
        <h3 className="text-lg">tathagata1805</h3>
        <p className="py-2"> If you have more number of haters, then you're surely improving.</p>

        <div className="my-2">
          <a
            href="assets/resume/My Resume.pdf"
            download
            className="flex gap-1 items-center w-max border-none rounded px-3 py-1 bg-green-700 text-white hover:bg-green-600"
          >
            <IoArrowDown />
            Download Resume
          </a>
        </div>

        <div className="my-2">
          <h3 className="text-lg font-semibold pt-1">Basic Info</h3>
          <div className="mt-2 mb-4 text-lg flex flex-col gap-2">
            <div className="flex gap-x-2 items-center">
              <IoLocationOutline className="flex-none text-gray-500" />{' '}
              India
            </div>
            <Link href="mailto:user@domain.com">
              <div className="flex gap-x-2 items-center">
                <IoMailOutline className="flex-none text-gray-500" />{' '}
                tathagata1805@gmail.com
              </div>
            </Link>
            <div className="flex gap-x-2 items-center">
              <IoStorefrontOutline className="flex-none text-gray-500" /> Frontend Developer @CodeClouds,
              B.Tech ECE @UEMK
            </div>
            <Link href="tel:+919912341234">
              <div className="flex gap-x-2 items-center">
                <IoPhonePortraitOutline className="flex-none text-gray-500" />{' '}
                +917003028043
              </div>
            </Link>
          </div>
        </div>
        <div className="lg:hidden my-2">
          <h3 className="text-lg font-semibold pt-1">Social</h3>
          <div className="mt-2 mb-4 text-xl flex gap-2">
            <Link href="https://twitter.com/tathagata1805">
              <IoLogoTwitter />
            </Link>
            <Link href="https://www.linkedin.com/in/tathagata-chakraborty-0bb5b71a3">
              <IoLogoLinkedin />
            </Link>
            <Link href="https://github.com/tathagata1805">
              <IoLogoGithub />
            </Link>
            <Link href="https://facebook.com/">
              <IoLogoFacebook />
            </Link>
            <Link href="https://instagram.com/">
              <IoLogoInstagram />
            </Link>
            <Link href="https://telegram.me/">
              <IoPaperPlane />
            </Link>
          </div>
        </div>

        <div className="my-2 mb-8">
          <h3 className="text-lg font-semibold pt-1">Skills</h3>
          <div className="mt-2 flex flex-wrap gap-3">
            <Pills text="Team Player" cname="bg-red-100 py-1" />
            <Pills text="Fast Learner" cname="bg-blue-100 py-1" />
            <Pills text="Organized" cname="bg-purple-100 py-1" />
            <Pills text="Hard Working" cname="bg-green-100 py-1" />
            <Pills text="Leadership" cname="bg-yellow-100 py-1" />
          </div>
        </div>
      </aside>
    </>
  );
}
