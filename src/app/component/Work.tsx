import React from 'react';

const Work: React.FC = () => {
  return (
    <div id="Works" className="py-20 w-full bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
      <h1 className="heading text-center text-5xl md:text-5xl text-white">

        My<span className="text-purple-900"> work experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 px-4">
        {/* Experience 1 */}
        <button className="bg-transparent relative text-xl p-[1px] overflow-hidden col-span-1 lg:col-span-2">
          <div className="absolute inset-0 rounded-[1.75rem]">
            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="absolute h-full w-full" width="100%" height="100%">
              <rect fill="none" width="100%" height="100%" rx="30%" ry="30%" />
            </svg>
            <div className="absolute top-0 left-0 inline-block translate-x-[50%] translate-y-[-50%] animate-radial-glow">
              <div className="h-20 w-20 opacity-[0.8] bg-[radial-gradient(#CBACF9_40%,transparent_60%)]"></div>
            </div>
          </div>
          <div className="relative bg-slate-900/[0.] border backdrop-blur-xl flex items-center justify-center w-full h-full text-sm antialiased flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 rounded-[1.75rem]">
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img src="/exp1.svg" alt="Frontend Developer" className="lg:w-32 md:w-20 w-16" />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl text-white">Frontend Developer</h1>
                <p className="text-start text-white mt-3">
                  Developed the entire frontend of Hostelbird's website using modern tech. I completed the project well ahead of the agreed
                  deal time, demonstrating efficient and timely delivery.
                </p>
              </div>
            </div>
          </div>
        </button>

        {/* Experience 2 */}
        <button className="bg-transparent relative text-xl p-[1px] overflow-hidden col-span-1 lg:col-span-2">
          <div className="absolute inset-0 rounded-[1.75rem]">
            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="absolute h-full w-full" width="100%" height="100%">
              <rect fill="none" width="100%" height="100%" rx="30%" ry="30%" />
            </svg>
            <div className="absolute top-0 left-0 inline-block translate-x-[50%] translate-y-[-50%] animate-radial-glow">
              <div className="h-20 w-20 opacity-[0.8] bg-[radial-gradient(#CBACF9_40%,transparent_60%)]"></div>
            </div>
          </div>
          <div className="relative bg-slate-900/[0.] border backdrop-blur-xl flex items-center justify-center w-full h-full text-sm antialiased flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 rounded-[1.75rem]">
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img src="/exp4.svg" alt="Full Stack Web Developer" className="lg:w-32 md:w-20 w-16" />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl text-white">Full Stack Web Developer</h1>
                <p className="text-start mt-3 text-white">
                At XCommerce, I built reusable code components, ensuring efficient development and reducing project costs across multiple projects.

                   </p>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Work;

































































