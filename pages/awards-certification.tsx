import React from 'react';
import Layout from '@/components/Layout';
import AwardCard from '@/components/AwardCard';
import CertificationCard from '@/components/CertificationCard';
import Head from 'next/head';

export default function awardsAndCertification() {
  const awardData = {
    ahack: {
      title: 'Vice Chancellor Award for Outstanding Contribution',
      date: '2021',
      place: 'Kolkata, India',
    },
  };
  const certData = {
    dcmp: {
      title: 'Azure Cloud with CICD Pipeline',
      platform: 'Udemy',
      date: '2023',
    },
    udemyJs: {
      title: 'JavaScript for Beginners',
      platform: 'Udemy',
      date: '2020',
      link: '',
      linkText: '',
    },
    udemyBoot: {
      title: 'Frontend Development Bootcamp',
      platform: 'Udemy',
      date: '2020',
      link: '',
      linkText: '',
    },
    udemyDsa: {
      title: 'Node JS Bootcamp',
      platform: 'Udemy',
      date: '2022',
      link: '',
      linkText: '',
    },
  };
  return (
    <>
      <Head>
        <title>Awards & Certification | GitHub</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold mt-3">Awards</h3>
        <div className="flex flex-col">
          <AwardCard
            title={awardData.ahack.title}
            date={awardData.ahack.date}
            place={awardData.ahack.place}
          />
        </div>
        <h3 className="text-lg font-semibold mt-3">Certification</h3>
        <div className="flex flex-col">
          <CertificationCard
            title={certData.dcmp.title}
            date={certData.dcmp.date}
            platform={certData.dcmp.platform}
          />
          <CertificationCard
            title={certData.udemyJs.title}
            date={certData.udemyJs.date}
            platform={certData.udemyJs.platform}
          />
          <CertificationCard
            title={certData.udemyBoot.title}
            date={certData.udemyBoot.date}
            platform={certData.udemyBoot.platform}
          />
          <CertificationCard
            title={certData.udemyDsa.title}
            date={certData.udemyDsa.date}
            platform={certData.udemyDsa.platform}
          />
        </div>
      </Layout>
    </>
  );
}
