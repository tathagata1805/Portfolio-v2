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
      grade: '8.55 (DGPA)',
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
            <h3 className="text-lg font-semibold ">Client Side technologies </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="HTML" cname="bg-green-100 py-1 " />
            <Pills text="SCSS" cname="bg-blue-100 py-1" />
            <Pills text="JavaScript" cname="bg-purple-100 py-1" />
            <Pills text="TypeScript" cname="bg-red-100 py-1" />
            <Pills text="React JS" cname="bg-pink-100 py-1" />
            <Pills text="Styled Components" cname="bg-yellow-100 py-1 " />
            <Pills text="Next JS" cname="bg-yellow-100 py-1 " />

          </div>

          <div className="flex gap-2 items-center mt-6">
            <IoSettingsOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Server Side Technologies </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="Node JS" cname="bg-red-100 py-1 " />
            <Pills text="Express" cname="bg-purple-100 py-1 " />
            <Pills text="Gateway & 3rd Party API Integration" cname="bg-gray-100 py-1 " />
            <Pills text="REST API Services" cname="bg-indigo-100 py-1 " />
            <Pills text="Asynchronous and Synchronous API Integration" cname="bg-gray-100 py-1 " />
            <Pills text="Web and API Security" cname="bg-gray-100 py-1 " />
          </div>

          <div className="flex gap-2 items-center mt-6">
            <IoDiceOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Databases and Tools </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="Google Firebase" cname="bg-blue-100 py-1 " />
            <Pills text="MongoDB" cname="bg-pink-100 py-1 " />
            <Pills text="MySQL" cname="bg-pink-100 py-1 " />
            <Pills text="Docker" cname="bg-gray-100 py-1 " />
            <Pills text="MS AZURE" cname="bg-green-100 py-1 " />
            <Pills text="GIT Version Control" cname="bg-red-100 py-1 " />
            <Pills text="Asana and Jira" cname="bg-red-100 py-1 " />
          </div>

          <div className="flex gap-2 items-center mt-6">
            <IoPersonOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Others </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="API Testing tools" cname="bg-red-100 py-1 " />
            <Pills text="DevOps CICD" cname="bg-blue-100 py-1 " />
            <Pills text="Linux Platform" cname="bg-yellow-100 py-1 " />
          </div>
        </div>
      </Layout>
    </>
  );
}
