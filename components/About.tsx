import React from 'react';
import {
  IoBasketballOutline,
  IoCameraOutline,
  IoChatbubbleEllipsesOutline,
  IoMapOutline,
} from 'react-icons/io5';

export default function About() {
  return (
    <>
      <h1 className="text-lg font-semibold my-2">About Me</h1>
      <div className="flex flex-col mb-4 text-lg tracking-wide gap-y-4 px-4">
        <p>
          Tathagata Chakraborty is an aspiring Software Developer who loves to build well structured and dynamic products for a better User Experience. He is currently pursuing his Bachelor degree in University of Engineering and Management, Kolkata with Electronics and Communication Engineering. 
        </p>
        <p>
          He started learning Web Development in his third year and got spellbound by the fact that a few lines of codes can solve our day to day problems. Then he found interest in Frontend Technologies like React JS and thus calls himself a self taught Frontend Developer. He is also a 5* Coder in HackerRank.
        </p>
        <p>
          He also knows how to work using Version Control systems like Git and GitHub, has got fundamental ideas on Server and other Backend technologies. He has also worked with Databases like MongoDB and SQL.
        </p>
        <p>
          Keeping everything aside, his best skills are that he can adapt to any situations and is a fast learner. Give him any tech- stack, he can learn it and work on it. He has also got Leadership and Team Management qualities and has led teams in various organizational events in his University including many Technical and Diplomatic Fests.
        </p>
      </div>
    </>
  );
}
