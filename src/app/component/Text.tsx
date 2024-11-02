'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { fadein } from '../variant';

const Text: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16  bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
      <motion.div
        variants={fadein('up', 0.1)}
        initial="hidden"
        whileInView="show"
      >
        <div className="flex items-center md:max-w-96 max-w-32 gap-2">
          <img src="/nextjs1.png" alt="NextJs 14" className="md:w-14 w-5" />
          <p className="md:w-24 w-20 h-full text-[16px] md:text-[20px] text-white">NextJs 14</p>
        </div>
      </motion.div>
      <motion.div
        variants={fadein('down', 0.1)}
        initial="hidden"
        whileInView="show"
      >
        <div className="flex items-center md:max-w-60 max-w-32 gap-2">
        <img src="/tailwindcss.png" alt="Tailwind CSS" className="md:w-14 w-5" />
        <p className="md:w-24 w-20 h-full text-[16px] md:text-[20px] text-white">Tailwind CSS</p>
      </div>
      </motion.div>
      <motion.div
        variants={fadein('up', 0.1)}
        initial="hidden"
        whileInView="show"
      >
        <div className="flex items-center md:max-w-60 max-w-32 gap-2">
        <img src="/node.png" alt="Tailwind CSS" className="md:w-14 w-5" />
        <p className="md:w-24 w-20 h-full text-[16px] md:text-[20px] text-white">node jS</p>
      </div>
      </motion.div>
      <motion.div
        variants={fadein('down', 0.1)}
        initial="hidden"
        whileInView="show"
      >
        <div className="flex items-center md:max-w-60 max-w-32 gap-2">
        <img src="/react.png" alt="React.js" className="md:w-14 w-6" />
        <p className="md:w-24 w-20 h-full text-[16px] md:text-[20px] text-white">React.js</p>
      </div>
      </motion.div>
      <motion.div
        variants={fadein('up', 0.1)}
        initial="hidden"
        whileInView="show"
      >
       <div className="flex items-center md:max-w-60 max-w-32 gap-2">
        <img src="/python.png" alt="Python" className="md:w-14 w-5" />
        <p className="md:w-24 w-20 h-full text-[16px] md:text-[20px] text-white">Python</p>
      </div>
      </motion.div>
      <motion.div
        variants={fadein('right', 0.1)}
        initial="hidden"
        whileInView="show"
      >
         <div className="flex items-center md:max-w-60 max-w-32 gap-2">
        <img src="/typescript.png" alt="Typescript" className="md:w-14 w-5" />
        <p className="md:w-24 w-20 h-full text-[16px] md:text-[20px] text-white">Typescript</p>
      </div>
      </motion.div>
      <motion.div
        variants={fadein('right', 0.1)}
        initial="hidden"
        whileInView="show"
      >
         <div className="flex items-center md:max-w-60 max-w-32 gap-2">
        <img src="/html.png" alt="Typescript" className="md:w-14 w-5" />
        <p className="md:w-24 w-20 h-full text-[16px] md:text-[20px] text-white">HTML</p>
      </div>
      </motion.div>
      <motion.div
        variants={fadein('right', 0.1)}
        initial="hidden"
        whileInView="show"
      >
         <div className="flex items-center md:max-w-60 max-w-32 gap-2">
        <img src="/css.png" alt="Typescript" className="md:w-14 w-5" />
        <p className="md:w-24 w-20 h-full text-[16px] md:text-[20px] text-white">Css</p>
      </div>
      </motion.div>
      <motion.div
        variants={fadein('right', 0.1)}
        initial="hidden"
        whileInView="show"
      >
         <div className="flex items-center md:max-w-60 max-w-32 gap-2">
        <img src="/js.png" alt="Typescript" className="md:w-14 w-5 rounded-lg" />
        <p className="md:w-24 w-20 h-full text-[16px] md:text-[20px] text-white">Javascript</p>
      </div>
      </motion.div>
    </div>
  );
};

export default Text;
