import React from "react";

const Project: React.FC = () => {
  return (
    <div id='Project' className="flex justify-center items-center min-h-screen bg-slate-950 p-6 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Project Card Component */}
        {[
          {
            imgSrc: "car.png",
            title: "Project 1",
            description: "Explore the wonderful websites.",
            liveLink: "http://car-website-pearl.vercel.app/",
          },
          {
            imgSrc: "dev0.png",
            title: "Project 2",
            description: "Explore the wonderful websites.",
            liveLink: "https://business-two-rosy.vercel.app/",
          },
          {
            imgSrc: "dev.png",
            title: "Project 3",
            description: "Explore the wonderful websites.",
            liveLink: "https://furniture-six-omega.vercel.app/",
          },
          {
            imgSrc: "dev5.png",
            title: "Project 4",
            description: "Discover another creative project.",
            liveLink: "https://female-cloths-website.vercel.app/",
          },
        ].map((project, index) => (
          <div key={index} className="relative p-6 justify-center rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.3] group transition duration-700 overflow-hidden">
            <div className="group relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-48 object-cover object-center transition-transform duration-300 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-center transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0 transition-all duration-300">
                <h2 className="text-lg font-bold">{project.title}</h2>
                <p className="mt-1 text-xs">{project.description}</p>
                <div className="flex justify-center items-center mt-2">
                  {['node.png', 'css.png', 'nextjs1.png', 'tailwindcss.png', 'typescript.png'].map((icon: string, index: number) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center mx-1"
                    >
                      <img src={`/${icon}`} alt={`icon${index}`} className="p-2 rounded-full" />
                    </div>
                  ))}
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.liveLink}
                  className="absolute bottom-2 right-2 flex items-center space-x-2 text-purple-300 hover:text-purple-400 transition-colors duration-300"
                >
                  <p className="text-xs md:text-sm lg:text-base  font-semibold">Check Live Site</p>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
