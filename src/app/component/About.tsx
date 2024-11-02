'use client';
import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

// Stagger Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Function to handle copying email to clipboard
const copyToClipboard = () => {
  const email = 'shawirali@gmail.com'; // Replace with your actual email
  navigator.clipboard.writeText(email)
};

function About() {
  return (
    <div
      id="About"
      className="min-h-screen w-full bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] px-4 sm:px-6 lg:px-8 py-8 md:py-16 flex flex-col items-center"
    >
      {/* Main content wrapper */}
      <div className="max-w-4xl w-full grid gap-8 md:gap-12">
        {/* Tech Stack Section */}
        <motion.div
          className="bg-fuchsia-400-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-opacity-10 bg-[size:20px_20px] rounded-2xl shadow-lg p-6 md:p-10 backdrop-blur-md"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h1
            className="text-3xl md:text-4xl  text-white mb-4 md:mb-6"
            variants={textVariants}
          >
            <Typewriter
              words={['   My Tech Stack']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-gray-400 mb-6 md:mb-8"
            variants={textVariants}
          >
            I constantly try to improve.
          </motion.p>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6" variants={containerVariants}>
            {/* Tech Cards */}
            {[
              { title: 'Tailwind.css', description: 'A powerful open-source Tailwind alternative.' },
              { title: 'Next.js', description: 'A React framework for building fast and scalable websites.' },
              { title: 'Node.js', description: 'Callbacks or promises are used to manage operations like reading making network requests.' },
              { title: 'TypeScript', description: 'A superset of JavaScript that adds static typing.' },
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-purple-900 to-gray-800 bg-opacity-80 rounded-lg p-4 md:p-6 transform hover:-translate-y-1 hover:shadow-md transition duration-300 backdrop-blur-sm"
                variants={textVariants}
              >
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{tech.title}</h2>
                <p className="text-gray-300 text-sm md:text-base">{tech.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Collaboration Section */}
        <motion.div
          className="bg-gradient-to-r from-purple-900 to-gray-800 bg-opacity-80 rounded-2xl shadow-lg p-6 md:p-10 backdrop-blur-md"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h1
            className="text-3xl md:text-4xl text-white bg-black bg-opacity-15 rounded-3xl px-4 md:px-6 py-2 md:py-4 mb-4 md:mb-6"
            variants={textVariants}
          >
            <Typewriter
              words={['Do you want to start a project together?']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.h1>

          {/* Center the button */}
          <motion.div className="flex justify-center" variants={textVariants}>
            <button
              onClick={copyToClipboard}
              className="inline-flex h-full w-full sm:w-auto cursor-pointer items-center justify-center rounded-lg px-7 py-3 text-sm font-medium text-white backdrop-blur-3xl gap-2 !bg-[#161A31]"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="336"
                  height="336"
                  x="128"
                  y="128"
                  fill="none"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  rx="57"
                  ry="57"
                />
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="m383.5 128 .5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24"
                />
              </svg>
              Copy my email address
            </button>
          </motion.div>
        </motion.div>

        {/* Time Zone Flexibility Section */}
        <motion.div className="relative" initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants}>
          <Spline scene="spline.code" />

          {/* Overlay text container */}
          <motion.div
            className="absolute top-0 right-0 w-full h-full flex flex-col justify-end items-end p-4 md:p-6"
            variants={textVariants}
          >
            <h1 className="text-xl md:text-3xl text-black bg-white bg-opacity-15 rounded-md px-2 md:px-4 py-1 md:py-2 md:mb-10 shadow-md">
              I prioritize client collaboration, fostering open communication
            </h1>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
