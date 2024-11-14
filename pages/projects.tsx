import React from 'react';
import Layout from '@/components/Layout';
import ProjectCards from '@/components/ProjectCards';
import Head from 'next/head';

export default function Projects() {
  const projectData = {
    project1: {
      title: 'Portfolio',
      subTitle: 'My personal portfolio, built with Next.js, React, and Tailwind CSS. Dockerized for seamless deployment, with a live version hosted on Vercel. Available on Docker Hub for the community to explore and learn.',
      desc:
        "A sleek and modern portfolio showcasing my projects and skills, utilizing React, Redux, and CSS for a smooth user experience.",
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
      subTitle: 'A full-stack Library Management System for real-time book purchasing. Includes user authentication, cart/wishlist management, and payment integration via Razorpay. Deployed on Netlify.',
      desc:
        "Built with React JS, Node.js, MongoDB, and Redux, Bookztron enables users to browse, purchase, and manage their book orders effortlessly.",
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
      subTitle: 'An interactive React app that visualizes various sorting algorithms in real-time. Perfect for learning and understanding algorithms in a dynamic and engaging way.',
      desc:
        "Utilized React JS, Styled Components, and Zustand for state management to build a smooth, user-friendly visualization tool for sorting algorithms.",
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
    project5: {
      title: 'OctoProfile',
      subTitle: 'A Next.js app to view GitHub user profiles. Fetches and displays detailed data using GitHub’s API and presents it in a clean, interactive interface.',
      desc:
        "Built using Next.js, GitHub PolyGot, and Chart.js, this app provides insights into GitHub stats, including contributions and repositories, with visually appealing charts.",
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
      title: 'Project Management Tool',
      subTitle: 'A Trello-inspired project management app to efficiently track tasks and projects, built with React, TypeScript, and Redux for state management.',
      desc:
        "Developed a fully functional project management tool for teams to collaborate and manage tasks, utilizing React JS, React Feather icons, and TypeScript for a seamless experience.",
      link: 'https://github.com/tathagata1805/Trello-Clone',
      linkText: 'Github',
      stacks: [
        { title: 'React', color: 'text-red-200' },
        { title: 'React Feather', color: 'text-blue-200' },
        { title: 'Redux', color: 'text-gray-200' },
        { title: 'Local Storage', color: 'text-yellow-200' },
        { title: 'TypeScript', color: 'text-green-200' },
      ],
    },
    project7: {
      title: 'Uber Eats Clone',
      subTitle: 'A clone of the Uber Eats app built with React Native, incorporating features such as Stripe Payment Gateway, Firebase Authentication, Google Maps, and Yelp API.',
      desc:
        "This mobile app allows users to browse restaurants, order food, and track deliveries with integrated maps and payment systems, built using React Native, Firebase, and Expo CLI.",
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
      title: 'T-Theme (VSCode Theme)',
      subTitle: 'A custom dark theme for Visual Studio Code inspired by multiple popular themes. Available on the VSCode Marketplace for developers.',
      desc:
        "Created a minimalistic, eye-friendly dark theme for VSCode using JSON, designed for developers who prefer a modern, dark workspace.",
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
