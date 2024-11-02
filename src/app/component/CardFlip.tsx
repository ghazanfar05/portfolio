import React from 'react';

interface CardProps {
  title: string;
}

const CardFlip: React.FC<CardProps> = ({ title }) => {
  return (
    <section className="flex flex-col items-center py-12 bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">

      {/* Heading */}
      <h1 className="text-white text-5xl font-bold mb-12">
      My <span className="text-purple-400">approach</span>
      </h1>

      <div className="flex flex-wrap justify-center space-x-0 lg:space-x-8 gap-16">
        {/* Card 1 */}
        <div className="flip-card w-64 h-96 mb-8 lg:mb-0">
          <div className="flip-card-inner relative w-full h-full transform-style preserve-3d transition-transform duration-700 hover:rotate-y-180">
            {/* Front of the card */}
            <div className="flip-card-front bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center w-full h-full rounded-lg shadow-2xl backface-hidden">
              <button className="text-2xl py-2 px-4 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-500 shadow-lg transform hover:scale-105 active:scale-95">
                {title} Phase 1
              </button>
            </div>
            {/* Back of the card */}
            <div className="flip-card-back bg-gradient-to-r from-black to-gray-800 text-white flex flex-col items-center justify-center w-full h-full rounded-lg shadow-2xl absolute inset-0 transform rotate-y-180 backface-hidden px-4 space-y-4">
              <h2 className="text-2xl font-bold">{title} Planning & Strategy</h2>
              <p className="text-sm text-gray-300">
                We’ll start by collaborating to define your website’s goals, target audience, and key functionalities. We’ll discuss the site structure, navigation, and content needs to ensure we’re aligned and ready to bring your vision to life.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flip-card w-64 h-96 mb-8 lg:mb-0">
          <div className="flip-card-inner relative w-full h-full transform-style preserve-3d transition-transform duration-700 hover:rotate-y-180">
            {/* Front of the card */}
            <div className="flip-card-front  bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center w-full h-full rounded-lg shadow-2xl backface-hidden">
              <button className="text-2xl py-2 px-4 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-500 shadow-lg transform hover:scale-105 active:scale-95">
                {title} Phase 2
              </button>
            </div>
            {/* Back of the card */}
            <div className="flip-card-back bg-gradient-to-r from-black to-gray-800 text-white flex flex-col items-center justify-center w-full h-full rounded-lg shadow-2xl absolute inset-0 transform rotate-y-180 backface-hidden px-4 space-y-4">
              <h2 className="text-2xl font-bold">{title} Development & Progress Update</h2>
              <p className="text-sm text-gray-300">
                Once the plan is set, I'll cue my lofi playlist and dive into coding. You'll receive regular updates as I transform initial sketches into polished code. With constant communication and access to a staging environment, you'll see progress unfold and can provide feedback throughout.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flip-card w-64 h-96 mb-8 lg:mb-0">
          <div className="flip-card-inner relative w-full h-full transform-style preserve-3d transition-transform duration-700 hover:rotate-y-180">
            {/* Front of the card */}
            <div className="flip-card-front bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center w-full h-full rounded-lg shadow-2xl backface-hidden">
              <button className="text-2xl py-2 px-4 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-500 shadow-lg transform hover:scale-105 active:scale-95">
                {title} Phase 3
              </button>
            </div>
            {/* Back of the card */}
            <div className="flip-card-back bg-gradient-to-r from-black to-gray-800 text-white flex flex-col items-center justify-center w-full h-full rounded-lg shadow-2xl absolute inset-0 transform rotate-y-180 backface-hidden px-4 space-y-4">
              <h2 className="text-2xl font-bold">{title} Development & Launch</h2>
              <p className="text-sm text-gray-300">
                This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardFlip;
