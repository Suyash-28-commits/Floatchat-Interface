import React from "react";
import { Link } from "react-router-dom";

export default function ExploreOptions() {
  const CHATBOT_URL = "https://frolicking-cobbler-92c2c3.netlify.app/";
  const REPORTS_URL = "https://your-reports-deploy.netlify.app";

  return (
    <div className="explore-page-container relative min-h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0 filter backdrop-brightness-125 opacity-75"
      >
        <source src="/vid1.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-5xl sm:text-6xl font-bold text-white text-center mb-12 drop-shadow-lg">
          Choose an experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
          {/* Chatbot */}
          <div className="border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all p-8 text-center flex flex-col backdrop-blur-lg bg-white/5">
            <div className="flex-grow">
              <span className="material-symbols-outlined text-[#21a9ed] text-6xl mb-6">smart_toy</span>
              <h3 className="text-2xl font-bold mb-2 text-white">Chatbot</h3>
              <p className="text-gray-700 mb-8 font-bold">Answers made simple.</p>
            </div>
            <a href={CHATBOT_URL} target="_blank" rel="noopener noreferrer"
              className="w-full border-2 border-[#21a9ed] text-[#21a9ed] font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 hover:bg-[#21a9ed] hover:text-white">
              Open Chatbot
            </a>
          </div>

          {/* Reports */}
          <div className="border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all p-8 text-center flex flex-col backdrop-blur-lg bg-white/5">
            <div className="flex-grow">
              <span className="material-symbols-outlined text-[#21a9ed] text-6xl mb-6">monitoring</span>
              <h3 className="text-2xl font-bold mb-2 text-white">Reports</h3>
              <p className="text-gray-700 mb-8 font-bold">Explore profiling dashboards by region.</p>
            </div>
            <Link to="/oceanReports"
              className="w-full border-2 border-[#21a9ed] text-[#21a9ed] font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 hover:bg-[#21a9ed] hover:text-white">
              Open Reports
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}