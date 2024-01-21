import React from 'react';
import Layout from '@/components/Layout';
import InternshipCard from '@/components/InternshipCard';
import VolunteerCard from '@/components/VolunteerCard';
import Head from 'next/head';

export default function skillsAndExperience() {
  const internData = {
    codeclouds: {
      title: 'CodeClouds IT Solutions Pvt. Ltd., Software Engineer - Frontend',
      date: 'August 2022 – Present',
      place: 'Kolkata, India',
      desc: 'Developed and maintained dynamic web applications and platforms with 6 other team members. Increased website performance by around a significant margin of 60 %. Collaborated with backend developers, design team and QA members, led troubleshooting and updated sites and ensured smooth functionality of web applications throughout entire SDLC. Implemented cloud and containerization solutions with senior developers to ensure smooth development process across teams. Worked with internal product teams to develop cross functional websites and internal products of the organization along with the official website. Optimized the code for faster loading, improved performance by more than 50% and SEO friendliness. Mentored new joiners and trainees in Software Engineering domains and developed workflow for them',
    },
    quordnet: {
      title: 'Quordnet Academy, Frontend Engineer (Intern)',
      date: 'January 2022 – July 2022',
      place: 'Kolkata, India',
      desc: '•	Solely responsible for the development of our product websites, adding new and advanced features to the websites using React JS and other frontend technologies, thus improving user engagement by over 70% and SEO friendliness by over 50%. Adding mobile responsiveness and dark mode to the website, improving the performance by more than 40%. Writing clean, scalable and production ready code using modern architecture and technologies. Containerized the codebase, along with implemented cloud services along with the Engineering leads to ensure smooth process throughout the SDLC.',
    },
    webprism: {
      title: 'Web Prism IT Solutions PVT. Ltd, Frontend Engineer (Freelance)',
      date: 'June 2022 – August 2022',
      place: 'Kolkata, India',
      desc: 'Worked as a Freelancing Frontend Engineer and was a individual contributor to multiple client projects across the world. Collaborated with senior developers to ensure smooth process of development. Built teams and led a team of 3 engineers to develop highly dynamic web applications. Actively participated in deployment and production solutions, containerizations techniques and client handling thus streamlining the process.',
    },
  };

  const volData = {
    ureckon: {
      title: 'Ureckon, UEMK',
      desig: 'Organising Member',
      year: '2019 - 2022',
      place: 'Kolkata, India',
    },
    uemmun: {
      title: 'UEM Model United Nations',
      desig: 'Logistics Head',
      year: '2019 - 2022',
      place: 'Kolkata, India',
    },
    dev: {
      title: 'Google Developers Club, UEMK',
      desig: 'Community Member',
      year: '2019 - Present',
      place: 'Kolkata, India',
    },
    cr: {
      title: 'Gymkhana, UEMK',
      desig: 'Class Representative',
      year: '2019 - 2023',
      place: 'Kolkata, India',
    },
  };

  return (
    <>
      <Head>
        <title>Expereience | GitHub</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold mt-3">Work Experiences</h3>
        <InternshipCard
          title={internData.codeclouds.title}
          date={internData.codeclouds.date}
          place={internData.codeclouds.place}
          desc={internData.codeclouds.desc}
        />

        <InternshipCard
          title={internData.quordnet.title}
          date={internData.quordnet.date}
          place={internData.quordnet.place}
          desc={internData.quordnet.desc}
        />

        <h3 className="text-lg font-semibold mt-3">Freelancing Works</h3>
        <InternshipCard
          title={internData.webprism.title}
          date={internData.webprism.date}
          place={internData.webprism.place}
          desc={internData.webprism.desc}
        />

        <h3 className="text-lg font-semibold mt-3">Volunteer Experience</h3>
        <VolunteerCard
          title={volData.ureckon.title}
          desig={volData.ureckon.desig}
          year={volData.ureckon.year}
          place={volData.ureckon.place}
        />
        <VolunteerCard
          title={volData.uemmun.title}
          desig={volData.uemmun.desig}
          year={volData.uemmun.year}
          place={volData.uemmun.place}
        />
        <VolunteerCard
          title={volData.dev.title}
          desig={volData.dev.desig}
          year={volData.dev.year}
          place={volData.dev.place}
        />
        <VolunteerCard
          title={volData.cr.title}
          desig={volData.cr.desig}
          year={volData.cr.year}
          place={volData.cr.place}
        />
      </Layout>
    </>
  );
}
