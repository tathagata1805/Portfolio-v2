import React from 'react';
import Layout from '@/components/Layout';
import InternshipCard from '@/components/InternshipCard';
import VolunteerCard from '@/components/VolunteerCard';
import Head from 'next/head';

export default function SkillsAndExperience() {
  const internData = {
    codeclouds: {
      title: 'CodeClouds IT Solutions Pvt. Ltd., Software Engineer',
      date: 'August 2022 – Present',
      place: 'Kolkata, India',
      desc: (
        <>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Developed and implemented a software solution that automated manual tasks, reducing execution time from 2 hours to under 15 minutes, resulting in a 90% reduction in manual labor and driving 80% business growth by optimizing internal workflows.
            </li>
            <li>
              Contributed to the core product suite used by millions of users, improving user engagement and business impact through scalable, high-quality solutions.
            </li>
            <li>
              Led the development and maintenance of key frontend components using modern technologies (React, JavaScript), significantly enhancing the user experience.
            </li>
            <li>
              Wrote comprehensive end-to-end (E2E) test cases using Jest and React Testing Library to ensure robustness, maintainability, and seamless product delivery.
            </li>
            <li>
              Spearheaded the transition from legacy systems to modern architecture, integrating new frontend features and optimizing backend microservices, resulting in a 60% improvement in performance, enhanced scalability, and better system support.
            </li>
            <li>
              Collaborated cross-functionally with development, QA, and operations teams to resolve technical challenges, ensuring smooth deployment and enhanced system functionality.
            </li>
            <li>
              Implemented Docker-based containerization for development, staging, and production environments, ensuring consistent deployments and smooth operations through best practices in DevOps.
            </li>
            <li>
              Utilized Agile methodologies to manage sprints and deliverables efficiently, improving team productivity and meeting deadlines consistently.
            </li>
            <li>
              Optimized frontend and backend code to enhance scalability, reduce latency, and improve system performance, focusing on best practices for microservices architecture and API integrations.
            </li>
          </ul>
        </>
      ),
    },
    quordnet: {
      title: 'Quordnet Academy, Frontend Engineer (Intern)',
      date: 'January 2022 – July 2022',
      place: 'Kolkata, India',
      desc: (
        <>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Solely responsible for the development of product websites, adding new features using React JS and other frontend technologies, improving user engagement by over 70% and SEO friendliness by 50%.
            </li>
            <li>
              Implemented mobile responsiveness and dark mode, improving performance by more than 40%.
            </li>
            <li>
              Wrote clean, scalable, and production-ready code using modern architecture and technologies.
            </li>
            <li>
              Containerized the codebase and implemented cloud services in collaboration with Engineering leads to ensure smooth SDLC processes.
            </li>
          </ul>
        </>
      ),
    },
    webprism: {
      title: 'Web Prism IT Solutions PVT. Ltd, Frontend Engineer (Freelance)',
      date: 'June 2022 – August 2022',
      place: 'Kolkata, India',
      desc: (
        <>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Worked as a Freelancing Frontend Engineer, contributing individually to multiple client projects globally.
            </li>
            <li>
              Collaborated with senior developers to ensure a smooth development process.
            </li>
            <li>
              Led a team of 3 engineers to develop highly dynamic web applications.
            </li>
            <li>
              Actively participated in deployment, production solutions, containerization techniques, and client handling to streamline the process.
            </li>
          </ul>
        </>
      ),
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
        <title>Experience | GitHub</title>
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
