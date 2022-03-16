import React from 'react';
import Layout from '@/components/Layout';
import InternshipCard from '@/components/InternshipCard';
import MentorshipCard from '@/components/MentorshipCard';
import VolunteerCard from '@/components/VolunteerCard';
import Head from 'next/head';

export default function skillsAndExperience() {
  const internData = {
    quordnet: {
      title: 'Quordnet Academy',
      date: 'January 2022 – Present',
      place: 'Kolkata, India',
      desc:
        'Quordnet Academy is an Ed-Tech based startup where I developed the Frontend of the main website of Quordnet Services using React JS, Redux and Material UI and deployed the website on the internet. I also helped in designing the UI using design tools. I have also worked on building the Quordnet Academy website which is a one- stop education solution using React JS and other frontend technologies. The website contains features like in- built IDE, Blog section as well as Online portal for conducting video lectures.  I have worked in a team with skilled developers and designers and met all the deadlines successfully.',
    },
  };

  const volData = {
    ureckon: {
      title: 'Ureckon, UEMK',
      desig: 'Organizing Committee Member',
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
        <h3 className="text-lg font-semibold mt-3">Internships</h3>
        <InternshipCard
          title={internData.quordnet.title}
          date={internData.quordnet.date}
          place={internData.quordnet.place}
          desc={internData.quordnet.desc}
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
