import React from 'react';
import Layout from '@/components/Layout';
import ProjectCards from '@/components/ProjectCards';
import Head from 'next/head';

export default function projects() {
  const projectData = {
    project1: {
      title: 'Portfolio',
      subTitle: 'Built this Portfolio, which is consider as my best project till date. Used Next JS, React JS and Tailwind for development and Docker to containerize the project and Vercel as the deployment platform. This project is also available in Docker Hub registry for the community to use the project to learn.',
      desc:
        "Used React, CSS , JavaScript, Git, Redux.",
      link: 'https://hub.docker.com/r/tathagata1805/github-themed-portfolio',
      linkText: 'Docker Hub',
      stacks: [
        { title: 'Next JS', color: 'text-red-200' },
        { title: 'Docker', color: 'text-blue-200' },
        { title: 'Vercel', color: 'text-gray-200' },
        { title: 'React JS', color: 'text-yellow-200' },
        { title: 'Tailwind', color: 'text-green-200' },
      ],
    },
    project2: {
      title: 'Bookztron',
      subTitle: 'A full stack Library Management System for users to order and buy their favorite books in real time. Features include end to end user authentication, cart and wishlist management, sorting and filtering features and Raxorpay Payment Gateway Integration and Netlify as Deployment platform',
      desc:
        "Used React JS, Node JS, MongoDB , Netlify.",
      link: 'https://bookztron-client.netlify.app/',
      linkText: 'Live',
      stacks: [
        { title: 'React JS', color: 'text-red-200' },
        { title: 'Node JS', color: 'text-blue-200' },
        { title: 'MongoDB', color: 'text-gray-200' },
        { title: 'Redux', color: 'text-yellow-200' },
        { title: 'Netlify', color: 'text-green-200' },
      ],
    },
      project3: {
        title: 'Sorting Visualizer',
        subTitle: 'A React JS website to visualize all the sorting algorithms in an interactive way.',
        desc:
          "Used React JS, Styled Components , Zustand, Vite, Sorting algorithms.",
        link: 'https://github.com/tathagata1805/Sorting-Visualizer',
        linkText: 'Github',
        stacks: [
          { title: 'React', color: 'text-red-200' },
          { title: 'Vite', color: 'text-blue-200' },
          { title: 'Styled Components', color: 'text-gray-200' },
          { title: 'React Material', color: 'text-yellow-200' },
          { title: 'Zustand', color: 'text-green-200' },
        ],
      },
      // project4: {
      //   title: 'Food Delivery Website',
      //   subTitle: 'This is a full stack food delivery website with end-to-end features like User Authentication, Order placing and live order tracking, Admin control, Online payment gateway backed by a MongoDB database and server made on MVC Architecture .',
      //   desc:
      //     "Used VSCode, HTML, CSS , Laravel Mix, Node JS, MongoDB, WebRTC, Stripe API, Git.",
      //   link: 'https://github.com/tathagata1805/Food-Delivery-website',
      //   linkText: 'Github',
      //   stacks: [
      //     { title: 'HTML', color: 'text-red-200' },
      //     { title: 'Laravel', color: 'text-blue-200' },
      //     { title: 'CSS', color: 'text-gray-200' },
      //     { title: 'Node JS', color: 'text-yellow-200' },
      //     { title: 'MongoDB', color: 'text-green-200' },
      //   ],
      // },
      project5: {
        title: 'OctoProfile',
        subTitle: 'A website made using Next.js to view GitHub details of any user across the world.',
        desc:
          "Used Next JS, GitHub Polygot , Chart JS, Styled Components, React Flip Move.",
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
        title: 'Project Management tool',
        subTitle: 'A fully functional Project Management tool inspired from Trello for users to efficiently manage their projects across their teams',
        desc:
          "Used React JS, React Feather, TypeScript.",
        link: 'https://github.com/tathagata1805/Trello-Clone',
        linkText: 'Github',
        stacks: [
          { title: 'React', color: 'text-red-200' },
          { title: 'React Feater', color: 'text-blue-200' },
          { title: 'Redux', color: 'text-gray-200' },
          { title: 'Local Storage', color: 'text-yellow-200' },
          { title: 'TypeScript', color: 'text-green-200' },
        ],
      },
      project7: {
        title: 'Uber Eats',
        subTitle: 'A fully functional clone of Uber Eats, developed React Native consists of features like Stripe Payment Gateway, Firebase Authentication, Google Maps and Places API, and Yelp API',
        desc:
          "Used React Native, Google Maps and Places API , Expo CLI, Android Studio, Firebase, Stripe, Yelp API.",
        link: 'https://github.com/tathagata1805/Uber-Eats-Clone',
        linkText: 'Github',
        stacks: [
          { title: 'React Native', color: 'text-red-200' },
          { title: 'Expo CLI', color: 'text-blue-200' },
          { title: 'Google APIs', color: 'text-gray-200' },
          { title: 'Android Studio', color: 'text-yellow-200' },
          { title: 'Firebase and Stripe', color: 'text-green-200' },
        ],
      },
      project8: {
        title: 'T-Theme',
        subTitle: 'This is my custom made dark theme for VSCode, which was developed by taking inspiration from multiple themes available in VSCode. This is also published at the Visual Studio Code Marketplace',
        desc:
          "Used VSCode, JSON, GitHub.",
        link: 'https://marketplace.visualstudio.com/items?itemName=tathagata1805.t-theme',
        linkText: 'VSCode Marketplace',
        stacks: [
          { title: 'JSON', color: 'text-red-200' },
          { title: 'VSCode', color: 'text-blue-200' },
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
          {/* <ProjectCards
            title={projectData.project4.title}
            subTitle={projectData.project4.subTitle}
            desc={projectData.project4.desc}
            link={projectData.project4.link}
            linkText={projectData.project4.linkText}
            stacks={projectData.project4.stacks}
          /> */}
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
