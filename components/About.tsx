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
          Tathagata Chakraborty is an aspiring Software Developer who loves to build well structured and dynamic products for a better User Experience. He is currently working as a Frontend Developer in CodeClouds IT Soolutions Pvt Ltd apart from pursuing his Bachelor degree in University of Engineering and Management, Kolkata with Electronics and Communication Engineering. 
        </p>
        <p>
          He started learning Web Development in his third year and got spellbound by the fact that a few lines of codes can solve our day to day problems. Then he found interest in Frontend Technologies like React JS and thus calls himself a self taught Frontend Developer. He has more than one year of IT experience and has worked in multiple domains, starting with his internship in a budding Ed-Tech startup to working as a freelncer for muliple clients.
        </p>
        <p>
          He knows how to work in JavaScript as well as TypeScript, mainly React JS along with knowledge and expertise in HTML, CSS, Bootstrap, MUI, Tailwind, Next JS as well knowledge of backend technologies such as Node JS, Express JS, Databases like SQL and NoSQL databases.
        </p>
        <p>
          Keeping everything aside, his best skills are that he can adapt to any situations and is a fast learner. Give him any tech- stack, he can learn it and work on it. He has also got Leadership and Team Management qualities and has proved to work in tight deadlines, unknown technologies and been successful to deliver solutions to his clients.
        </p>
      </div>
    </>
  );
}
