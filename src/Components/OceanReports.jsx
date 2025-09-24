// src/components/OceanReports.jsx

import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const OceanReports = () => {
  return (
    <div className="explore-page-container relative min-h-screen font-display">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/vid1.mp4" type="video/mp4" />
      </video>
      {/* Added: Blue overlay with blur on the background video */}
      <div className="absolute inset-0 bg-blue-800/40 backdrop-blur-sm z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex-grow">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-12 drop-shadow-lg">
              Ocean Reports
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Arabian Sea Card */}
              <div className="group card-wrapper">
                <div className="relative border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all h-full flex flex-col backdrop-blur-lg bg-white/5 overflow-hidden">
                  <div className="card-video-wrapper">
                    <video
                      autoPlay
                      loop
                      muted
                      // Changed: Reverted to just opacity
                      className="aspect-square w-full object-cover opacity-70"
                    >
                      <source src="/Arabian.mp4" type="video/mp4" />
                    </video>
                    {/* Removed: The overlay div from here */}
                  </div>
                  <div className="p-5 flex-grow flex flex-col text-white">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold">Arabian Sea</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-300">
                        Available
                      </span>
                    </div>
                    <div className="mt-auto">
                      <Link
                        to="/report/arabian-sea"
                        className="w-full border-2 border-[#21a9ed] text-[#21a9ed] font-bold py-2 px-4 rounded-lg hover:scale-105 hover:bg-[#21a9ed] hover:text-white transition-all inline-block text-center"
                      >
                        Open Report
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bay of Bengal Card */}
              <div className="group card-wrapper">
                <div className="relative border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all h-full flex flex-col backdrop-blur-lg bg-white/5 overflow-hidden">
                  <div className="card-video-wrapper">
                    <video
                      autoPlay
                      loop
                      muted
                      // Changed: Reverted to just opacity
                      className="aspect-square w-full object-cover opacity-70"
                    >
                      <source src="/Bay.mp4" type="video/mp4" />
                    </video>
                    {/* Removed: The overlay div from here */}
                  </div>
                  <div className="p-5 flex-grow flex flex-col text-white">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold">Bay of Bengal</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-300">
                        Available
                      </span>
                    </div>
                    <div className="mt-auto">
                      <Link
                        to="/report/bay-of-bengal"
                        className="w-full border-2 border-[#21a9ed] text-[#21a9ed] font-bold py-2 px-4 rounded-lg hover:scale-105 hover:bg-[#21a9ed] hover:text-white transition-all inline-block text-center"
                      >
                        Open Report
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Indian Ocean Card */}
              <div className="group card-wrapper">
                <div className="relative border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all h-full flex flex-col backdrop-blur-lg bg-white/5 overflow-hidden">
                  <div className="card-video-wrapper">
                    <video
                      autoPlay
                      loop
                      muted
                      // Changed: Reverted to just opacity
                      className="aspect-square w-full object-cover opacity-70"
                    >
                      <source src="/Indian.mp4" type="video/mp4" />
                    </video>
                    {/* Removed: The overlay div from here */}
                  </div>
                  <div className="p-5 flex-grow flex flex-col text-white">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold">Indian Ocean</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-300">
                        Available
                      </span>
                    </div>
                    <div className="mt-auto">
                      <Link
                        to="/report/indian-ocean"
                        className="w-full border-2 border-[#21a9ed] text-[#21a9ed] font-bold py-2 px-4 rounded-lg hover:scale-105 hover:bg-[#21a9ed] hover:text-white transition-all inline-block text-center"
                      >
                        Open Report
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-gray-300 mt-10">
              Reports summarize distributions, correlations, and data quality.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OceanReports;