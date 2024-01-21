import Head from 'next/head';
import {
  IoBasketballOutline,
  IoChatbubbleEllipsesOutline,
  IoMapOutline,
  IoFastFoodOutline,
  IoGridOutline,
  IoCodeSlash,
} from 'react-icons/io5';
import React from 'react';
import Layout from '@/components/Layout';
import About from '@/components/About';
import Hobbies from '@/components/Hobbies';
import WhatDoing from '@/components/WhatDoing';

export default function Index() {
  const hobbyData = {
    bb: {
      title: 'Football',
      desc:
        'I have a weird passion towards football, I call it weird because I never wanted to pursue it but I used to always get a football under my feet and used to knock it to make myself feel better',
    },
    pbs: {
      title: 'Public Speaking',
      desc:
        'By virtue of being a Class Representative throughout my Engineering tenure, I have got a lot of opportunities to Speak at a public platform and help my peers at every need.',
    },
    tvl: {
      title: 'Travelling',
      desc:
        'Travelling has always been in my blood since childhood. I have explored the City of Joy since my school days and have tasted every inch of its culture. If you are new here, I can be your best guide.',
    },
    pgpy: {
      title: 'Foodie',
      desc:
        'I am a street food lover, and if you are in Kolkata, you will be in love of the street foods in this city',
    },
  };
  const WDData = {
    wd: {
      title: 'Web Development',
      desc:
        'I have been a self taught developer who has learnt by doing. I have made multiple projects throughout my journey, which are present in GitHub and have been brushing up my skills throughout.',
    },
    flc: {
      title: 'Software Engineering',
      desc:
        'Working as a Software Developer since around 2, I intend to work in challenging roles and keep brushing up my skills to improve myself and my work',
    },
  };
  return (
    <>
      <Head>
        <title>Home | GitHub</title>
      </Head>
      <Layout border="border-2">
        <About />

        <h1 className="text-lg font-semibold my-4">What I'm Doing</h1>
        <div className="grid md:grid-cols-2 gap-y-4 gap-x-2 px-4">
          <WhatDoing title={WDData.flc.title} desc={WDData.flc.desc}>
            <IoGridOutline className="text-blue-500 text-6xl" />
          </WhatDoing>
          <WhatDoing title={WDData.wd.title} desc={WDData.wd.desc}>
            <IoCodeSlash className="text-green-500 text-6xl" />
          </WhatDoing>
        </div>
        <h1 className="text-lg font-semibold my-4">Hobbies</h1>
        <div className="grid md:grid-cols-2 gap-y-4 gap-x-2 px-4">
          <Hobbies title={hobbyData.bb.title} desc={hobbyData.bb.desc}>
            <IoBasketballOutline className="text-red-500 text-6xl" />
          </Hobbies>
          <Hobbies title={hobbyData.pbs.title} desc={hobbyData.pbs.desc}>
            <IoChatbubbleEllipsesOutline className="text-yellow-500 text-6xl" />
          </Hobbies>
          <Hobbies title={hobbyData.tvl.title} desc={hobbyData.tvl.desc}>
            <IoMapOutline className="text-purple-500 text-6xl" />
          </Hobbies>
          <Hobbies title={hobbyData.pgpy.title} desc={hobbyData.pgpy.desc}>
            <IoFastFoodOutline className="text-pink-500 text-6xl" />
          </Hobbies>
        </div>
      </Layout>
    </>
  );
}
{
  /* <style>
ion-icon {
  --ionicon-stroke-width: 16px;
}
</style> */
}
