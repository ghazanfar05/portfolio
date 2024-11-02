'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { fadein } from '../variant';

// Custom stagger animation for text
const textAnimation = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.05, // Time delay between each word/letter
    },
  },
};

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Slider = () => {
  return (
    <div className="min-h-screen w-full bg-slate-950 px-5 py-24 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] flex items-center justify-center">
      <motion.div
        className="p-8 w-full"
        variants={fadein('up', 0.6)}
        initial="hidden"
        whileInView="show"
      >
        <div className="container mx-auto flex flex-col items-center mt-12 justify-center text-center space-y-8">
          {/* Centered Text Content */}
          <motion.div
            className="w-full max-w-2xl"
            variants={textAnimation}
            initial="hidden"
            whileInView="show"
          >
            <motion.p className="md:text-lg text-[-2px] mb-6 bg-gradient-to-r from-slate-100 via-slate-700 to-gray-300 bg-clip-text text-transparent max-w-md mx-auto" variants={letterAnimation}>
              WEB MAJIC WITH NEXT.JS
            </motion.p>
            <motion.h1
              className="text-3xl md:text-7xl font-extrabold mb-4 text-white leading-tight"
              variants={letterAnimation}
            >
              Best Vision Into Expensive Website{' '}
              <span className="bg-gradient-to-r from-purple-200 via-gray-100 to-purple-950 bg-clip-text text-transparent">
                With Modern Technologies
              </span>
            </motion.h1>
            <motion.p
              className="text-base md:text-lg mb-6 text-white max-w-lg mx-auto"
              variants={letterAnimation}
            >
              !Hello Everyone I’m "GhazanFarAli" A Full Stack Web Developer
            </motion.p>
            <motion.button
              variants={fadein('up', 0.6)}
              initial="hidden"
              whileInView="show"
            >
              <a href="project">
                <div className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-neutral-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
                    Show my work
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                    </svg>
                  </span>
                </div>
              </a>
            </motion.button>
          </motion.div>

          {/* Background Effect/Image Placeholder */}
          <motion.div
            className="w-full max-w-3xl relative overflow-hidden rounded-lg shadow-xl"
            variants={fadein('up', 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black opacity-60 rounded-lg"
              variants={fadein('up', 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Slider;
