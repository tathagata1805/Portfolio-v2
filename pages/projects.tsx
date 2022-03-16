import React from 'react';
import Layout from '@/components/Layout';
import ProjectCards from '@/components/ProjectCards';
import Head from 'next/head';

export default function projects() {
  const projectData = {
    project1: {
      title: 'PocketBook',
      subTitle: 'PocketBook is a one-stop application which consists of a Note- making app, a Calendar, a Linktree as well as a ToDo list app.',
      desc:
        "Used React, CSS , JavaScript, Git, Redux.",
      link: 'https://github.com/tathagata1805/PocketBook',
      linkText: 'Github',
      stacks: [
        { title: 'React', color: 'text-red-200' },
        { title: 'Git', color: 'text-blue-200' },
        { title: 'CSS', color: 'text-gray-200' },
        { title: 'Redux', color: 'text-yellow-200' },
        { title: 'JavaScript', color: 'text-green-200' },
      ],
    },
    project2: {
      title: 'Bits 0f C0de',
      subTitle: 'I always wanted to write blogs and share my knowledge with the world, but in my own way. So I made this website where users can write their own blog in a easier way.',
      desc:
        "Used VSCode, Next JS, TailwindCSS , Git.",
      link: 'https://github.com/tathagata1805/Bits-0f-C0de',
      linkText: 'Github',
      stacks: [
        { title: 'React', color: 'text-red-200' },
        { title: 'Git', color: 'text-blue-200' },
        { title: 'CSS', color: 'text-gray-200' },
        { title: 'Redux', color: 'text-yellow-200' },
        { title: 'JavaScript', color: 'text-green-200' },
      ],
    },
      project3: {
        title: 'Sorting Visualizer',
        subTitle: 'A React JS website to visualize all the sorting algorithms.',
        desc:
          "Used VSCode, React JS, Styled Components , Zustand, Vite, React Material Git.",
        link: 'https://github.com/tathagata1805/Sorting-Visualizer',
        linkText: 'Github',
        stacks: [
          { title: 'React', color: 'text-red-200' },
          { title: 'Git', color: 'text-blue-200' },
          { title: 'Styled Components', color: 'text-gray-200' },
          { title: 'React Material', color: 'text-yellow-200' },
          { title: 'JavaScript', color: 'text-green-200' },
        ],
      },
      project4: {
        title: 'Food Delivery Website',
        subTitle: 'This is a full stack food delivery website with end-to-end features like User Authentication, Order placing and live order tracking, Admin control, Online payment gateway backed by a MongoDB database and server made on MVC Architecture .',
        desc:
          "Used VSCode, HTML, CSS , Laravel Mix, Node JS, MongoDB, WebRTC, Stripe API, Git.",
        link: 'https://github.com/tathagata1805/Food-Delivery-website',
        linkText: 'Github',
        stacks: [
          { title: 'HTML', color: 'text-red-200' },
          { title: 'Laravel', color: 'text-blue-200' },
          { title: 'CSS', color: 'text-gray-200' },
          { title: 'Node JS', color: 'text-yellow-200' },
          { title: 'MongoDB', color: 'text-green-200' },
        ],
      },
      project5: {
        title: 'OctoProfile',
        subTitle: 'A website made using Next.js to view GitHub details of any user across the world.',
        desc:
          "Used VSCode, Next JS, GitHub Polygot , Chart JS, Styled Components, React Flip Move , Git.",
        link: 'https://github.com/tathagata1805/OctoProfile',
        linkText: 'Github',
        stacks: [
          { title: 'Next JS', color: 'text-red-200' },
          { title: 'GitHub PolyGot', color: 'text-blue-200' },
          { title: 'Styled Components', color: 'text-gray-200' },
          { title: 'Chart JS', color: 'text-yellow-200' },
          { title: 'Git', color: 'text-green-200' },
        ],
      },
      project6: {
        title: 'Medical Forum',
        subTitle: 'This is a MERN stack forum created for medical purposes with features like user- authentication and real- time chatting.',
        desc:
          "Used VSCode, React JS, CSS , Node JS, MongoDB, Git.",
        link: 'https://github.com/tathagata1805/Medical-Forum',
        linkText: 'Github',
        stacks: [
          { title: 'React', color: 'text-red-200' },
          { title: 'Node JS', color: 'text-blue-200' },
          { title: 'CSS', color: 'text-gray-200' },
          { title: 'MongoDB', color: 'text-yellow-200' },
          { title: 'Git', color: 'text-green-200' },
        ],
      },
      project7: {
        title: 'Tesla App UI',
        subTitle: 'This is a UI clone of the Tesla App made using React Native and its features. Android studio has been used to create an Android Device Emulator for development purposes',
        desc:
          "Used VSCode, React Native, Styled Components , Expo CLI, Android Studio, Git.",
        link: 'https://github.com/tathagata1805/Tesla-App-React-Native',
        linkText: 'Github',
        stacks: [
          { title: 'React Native', color: 'text-red-200' },
          { title: 'Expo CLI', color: 'text-blue-200' },
          { title: 'Styled Components', color: 'text-gray-200' },
          { title: 'Android Studio', color: 'text-yellow-200' },
          { title: 'Git', color: 'text-green-200' },
        ],
      },
      project8: {
        title: 'T-Theme',
        subTitle: 'This is my custom made dark theme for VSCode. This is also published at the Visual Studio Code Marketplace',
        desc:
          "Used VSCode, JavaScript, Azure DevOps , GitHub.",
        link: 'https://github.com/tathagata1805/T-Theme',
        linkText: 'Github',
        stacks: [
          { title: 'JavaScript', color: 'text-red-200' },
          { title: 'VSCode', color: 'text-blue-200' },
          { title: 'Azure DevOps', color: 'text-gray-200' },
          { title: 'GitHub', color: 'text-green-200' },
        ],
      },
  };

  return (
    <>
      <Head>
        <title>Projects | GitHub</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold my-4">
          Take a look at my personal projects I have made based on my interests...
        </h3>
        <div className="grid gap-4 mb-3">
          <ProjectCards
            title={projectData.project1.title}
            subTitle={projectData.project1.subTitle}
            desc={projectData.project1.desc}
            link={projectData.project1.link}
            linkText={projectData.project1.linkText}
            stacks={projectData.project1.stacks}
          />
          <ProjectCards
            title={projectData.project2.title}
            subTitle={projectData.project2.subTitle}
            desc={projectData.project2.desc}
            link={projectData.project2.link}
            linkText={projectData.project2.linkText}
            stacks={projectData.project2.stacks}
          />
          <ProjectCards
            title={projectData.project3.title}
            subTitle={projectData.project3.subTitle}
            desc={projectData.project3.desc}
            link={projectData.project3.link}
            linkText={projectData.project3.linkText}
            stacks={projectData.project3.stacks}
          />
          <ProjectCards
            title={projectData.project4.title}
            subTitle={projectData.project4.subTitle}
            desc={projectData.project4.desc}
            link={projectData.project4.link}
            linkText={projectData.project4.linkText}
            stacks={projectData.project4.stacks}
          />
          <ProjectCards
            title={projectData.project5.title}
            subTitle={projectData.project5.subTitle}
            desc={projectData.project5.desc}
            link={projectData.project5.link}
            linkText={projectData.project5.linkText}
            stacks={projectData.project5.stacks}
          />
          <ProjectCards
            title={projectData.project6.title}
            subTitle={projectData.project6.subTitle}
            desc={projectData.project6.desc}
            link={projectData.project6.link}
            linkText={projectData.project6.linkText}
            stacks={projectData.project6.stacks}
          />
          <ProjectCards
            title={projectData.project7.title}
            subTitle={projectData.project7.subTitle}
            desc={projectData.project7.desc}
            link={projectData.project7.link}
            linkText={projectData.project7.linkText}
            stacks={projectData.project7.stacks}
          />
          <ProjectCards
            title={projectData.project8.title}
            subTitle={projectData.project8.subTitle}
            desc={projectData.project8.desc}
            link={projectData.project8.link}
            linkText={projectData.project8.linkText}
            stacks={projectData.project8.stacks}
          />
        </div>
      </Layout>
    </>
  );
}
