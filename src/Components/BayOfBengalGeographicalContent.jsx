// src/components/BayOfBengalGeographicalContent.jsx

import React, { useState } from 'react';

const BayOfBengalGeographicalContent = () => {
    const [activeSubTab, setActiveSubTab] = useState('maps');

    const renderContent = () => {
        if (activeSubTab === 'maps') {
            return (
                <iframe
                    className="w-full h-full border-0"
                    src="/geographic_map.html"
                    title="Bay of Bengal Map"
                ></iframe>
            );
        } else if (activeSubTab === 'graphs') {
            return (
                <div className="w-full h-full flex justify-center items-center">
                    <img
                        src="/BayOfBengal.png"
                        alt="Bay of Bengal Graphs"
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
            );
        } else if (activeSubTab === 'reports') {
            return (
                <iframe
                    className="w-full h-full border-0"
                    src="/Bay_Of_Bengal_Graphical.html"
                    title="Bay of Bengal Graphical Report"
                ></iframe>
            );
        }
        return null;
    };

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="bg-gray-200 dark:bg-gray-700 p-1 rounded-lg flex items-center gap-1 mb-6">
                <button
                    onClick={() => setActiveSubTab('maps')}
                    className={`${
                        activeSubTab === 'maps'
                            ? 'bg-blue-500 text-white'
                            : 'text-gray-600 dark:text-gray-300'
                    } px-6 py-2 rounded-md text-sm font-semibold transition-colors hover:bg-blue-500 hover:text-white`}
                >
                    Maps
                </button>
                <button
                    onClick={() => setActiveSubTab('graphs')}
                    className={`${
                        activeSubTab === 'graphs'
                            ? 'bg-blue-500 text-white'
                            : 'text-gray-600 dark:text-gray-300'
                    } px-6 py-2 rounded-md text-sm font-semibold transition-colors hover:bg-blue-500 hover:text-white`}
                >
                    Graphs
                </button>
                <button
                    onClick={() => setActiveSubTab('reports')}
                    className={`${
                        activeSubTab === 'reports'
                            ? 'bg-blue-500 text-white'
                            : 'text-gray-600 dark:text-gray-300'
                    } px-6 py-2 rounded-md text-sm font-semibold transition-colors hover:bg-blue-500 hover:text-white`}
                >
                    Reports
                </button>
            </div>
            <div className="w-full h-full flex-grow rounded-md">
                {renderContent()}
            </div>
        </div>
    );
};

export default BayOfBengalGeographicalContent;