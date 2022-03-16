import React from 'react';
import Layout from '@/components/Layout';
import EducationCard from '@/components/EducationCard';
import Pills from '@/components/Pills';
import {
  IoDiceOutline,
  IoLayersOutline,
  IoPersonOutline,
  IoServerOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import Head from 'next/head';

export default function education() {
  const eduData = {
    graduation: {
      degree: 'Bachelor of Technology',
      major: 'Bachelor of Technology (B.Tech)',
      institute: 'University of Engineering and Management',
      year: '2019 – 2023',
      grade: '9.34 (till third year)',
    },
    school: {
      degree: 'Higher Secondary Education (10+2)',
      major: 'Science (PCMB)',
      institute: 'Aditya Academy Senior Secondary',
      year: '2017 – 2019',
      grade: '8.0',
    },
  };

  return (
    <>
      <Head>
        <title>Education & Skills | GitHub</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold mt-3">Educational Background</h3>
        <div className="flex flex-col gap-4">
          <EducationCard
            degree={eduData.graduation.degree}
            major={eduData.graduation.major}
            institute={eduData.graduation.institute}
            year={eduData.graduation.year}
            grade={eduData.graduation.grade}
          />
          <EducationCard
            degree={eduData.school.degree}
            major={eduData.school.major}
            institute={eduData.school.institute}
            year={eduData.school.year}
            grade={eduData.school.grade}
          />
        </div>

        <h3 className="text-lg font-semibold mt-6">Skills </h3>
        <div className="px-4">
          <div className="flex gap-2 items-center mt-6">
            <IoLayersOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Frontend </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="HTML" cname="bg-green-100 py-1 " />
            <Pills text="SCSS" cname="bg-blue-100 py-1" />
            <Pills text="JavaScript" cname="bg-purple-100 py-1" />
            <Pills text="React Native" cname="bg-red-100 py-1" />
            <Pills text="Next JS" cname="bg-pink-100 py-1" />
            <Pills text="React JS" cname="bg-yellow-100 py-1 " />
          </div>

          <div className="flex gap-2 items-center mt-6">
            <IoSettingsOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Tools & Frameworks </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="Material UI" cname="bg-red-100 py-1 " />
            <Pills text="TailwindCSS" cname="bg-purple-100 py-1 " />
            <Pills text="Bootstrap" cname="bg-gray-100 py-1 " />
            <Pills text="Git & GitHub" cname="bg-indigo-100 py-1 " />
            <Pills text="VSCode" cname="bg-gray-100 py-1 " />
          </div>

          <div className="flex gap-2 items-center mt-6">
            <IoDiceOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Programming & Others </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="Google Firebase" cname="bg-blue-100 py-1 " />
            <Pills text="MongoDB" cname="bg-pink-100 py-1 " />
            <Pills text="DSA" cname="bg-pink-100 py-1 " />
            <Pills text="Java" cname="bg-gray-100 py-1 " />
            <Pills text="Python" cname="bg-green-100 py-1 " />
            <Pills text=" Figma" cname="bg-red-100 py-1 " />
          </div>

          <div className="flex gap-2 items-center mt-6">
            <IoPersonOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Personal </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="Public Speaking" cname="bg-red-100 py-1 " />
            <Pills text="Project Management" cname="bg-blue-100 py-1 " />
            <Pills text="Leadership" cname="bg-yellow-100 py-1 " />
            <Pills text="Team Work" cname="bg-green-100 py-1 " />
            <Pills text="Football" cname="bg-gray-100 py-1 " />
          </div>
        </div>
      </Layout>
    </>
  );
}
