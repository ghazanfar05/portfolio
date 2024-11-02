'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { fadein } from '../variant';

const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            staggerChildren: 0.05,
        },
    },
};

const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Footer: React.FC = () => {
    return (
        <footer className="w-full pt-20 pb-10 bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" id="contact">
            <div className="w-full absolute left-0 -bottom-72 min-h-96"></div>
            <div className="flex flex-col items-center container mx-auto mt-12 justify-center text-center space-y-8 px-6 md:px-0">
                <motion.div
                    className="w-full max-w-2xl"
                    variants={textAnimation}
                    initial="hidden"
                    whileInView="show"
                >
                    <motion.p className="md:text-lg text-sm mb-6 bg-gradient-to-r from-slate-100 via-slate-700 to-gray-300 bg-clip-text text-transparent max-w-md mx-auto" variants={letterAnimation}>
                        WEB MAJIC WITH NEXT.JS
                    </motion.p>
                    <motion.h1
                        className="text-3xl md:text-7xl font-extrabold mb-4 text-white leading-tight"
                        variants={letterAnimation}
                    >
                        <span className="bg-gradient-to-r from-purple-200 via-gray-100 to-purple-950 bg-clip-text text-transparent">
                        your digital
                        </span>
                        Ready to transform 
                        presence and leave
                        {' '}
                        <span className="bg-gradient-to-r from-purple-200 via-gray-100 to-purple-950 bg-clip-text text-transparent">
                        a lasting impact online
                        </span>
                    </motion.h1>
                </motion.div>
              
                <p className="text-sm md:text-lg mb-6 text-gray-400 max-w-lg mx-auto text-center md:text-left">
                    Reach out to me today and <span className="text-yellow-500 ">let's discuss how I can help you</span> achieve your goals.
                </p>
                <a href="mailto:shawirali12345@gmail.com">
                    <button className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black px-7 text-sm text-white backdrop-blur-3xl gap-2">
                            Let's get in touch
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
                    </button>
                </a>
            </div>

            {/* Social Icons */}
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center px-6 md:px-0">
                <div className="flex md:pt-0 p-5 items-center md:gap-3 gap-6">
                    <a target="_blank" href="https://github.com/ghazanfar05" rel="noreferrer">
                        <div className="w-10 h-10 cursor-pointer flex justify-center bg-black items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                            <img src="/git.svg" alt="icons" width="20" height="20" />
                        </div>
                    </a>
                    <a target="_blank" href="http://www.linkedin.com/in/ghazanfar-ali-5221172a7/" rel="noreferrer">
                        <div className="w-10 h-10 cursor-pointer flex justify-center bg-black items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                            <img src="/link.svg" alt="icons" width="20" height="20" />
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
