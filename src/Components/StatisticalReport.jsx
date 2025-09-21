// src/components/StatisticalReport.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaDownload, FaShareAlt, FaExpand } from 'react-icons/fa';
import GeographicalReport from './GeographicalReport';

const StatisticalReport = () => {
  const [activeTab, setActiveTab] = useState('statistical');
  const region = 'Arabian Sea'; 

  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 lg:p-8 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/50 text-primary px-3 py-1 rounded-full text-sm">
            <span className="material-symbols-outlined text-base">waves</span>
            {region}
          </div>
          <h1 className="text-3xl font-bold mt-2">{region} Profiling Report</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-gray-300 dark:border-gray-600 rounded hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors">
            <FaExpand />
            Open full screen
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-gray-300 dark:border-gray-600 rounded hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors">
            <FaDownload />
            Download
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-gray-300 dark:border-gray-600 rounded hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors">
            <FaShareAlt />
            Share
          </button>
        </div>
      </header>
      <main className="flex-grow bg-surface-light dark:bg-surface-dark rounded-lg shadow-md p-6 flex flex-col items-center">
        <div className="bg-gray-200 dark:bg-gray-700 p-1 rounded-lg flex items-center gap-1 mb-6">
          <Link to="/report/arabian-sea">
            <button className={`${
              activeTab === 'statistical'
                ? 'bg-primary text-white'
                : 'text-subtle-light dark:text-subtle-dark'
            } px-6 py-2 rounded-md text-sm font-semibold transition-colors`}>
              Statistical
            </button>
          </Link>
          <button
            onClick={() => setActiveTab('geographical')}
            className={`${
              activeTab === 'geographical'
                ? 'bg-primary text-white'
                : 'text-subtle-light dark:text-subtle-dark'
            } px-6 py-2 rounded-md text-sm font-semibold transition-colors`}
          >
            Geographical
          </button>
        </div>

        {activeTab === 'geographical' && <GeographicalReport region={region} />} 

        {activeTab === 'statistical' && (
            <div className="w-full h-full flex-grow rounded-md">
                <iframe
                    className="w-full h-full border-0"
                    src="/Arabian_Sea_Statistical.html" 
                    title={`${region} Statistical Report`}
                ></iframe>
            </div>
        )}
      </main>
      <footer className="text-center text-sm text-subtle-light dark:text-subtle-dark mt-6">
        <p>Generated from ARGO NetCDF preprocessing.</p>
      </footer>
    </div>
  );
};

export default StatisticalReport;