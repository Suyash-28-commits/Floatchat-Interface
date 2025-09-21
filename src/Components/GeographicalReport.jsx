// src/components/GeographicalReport.jsx

import React, { useState } from 'react';

const GeographicalReport = ({ region }) => {
    const [activeSubTab, setActiveSubTab] = useState('maps');

    const formatFileName = (type) => {
        // Replace spaces with underscores and get the base name
        const baseName = region.replace(/\s/g, '_');

        if (type === 'map') {
            return `/${baseName}_map.html`;
        }
        if (type === 'graphical_report') {
            return `/${baseName}_Graphical.html`;
        }
        if (type === 'image') {
            return `/${baseName}.png`;
        }
        return null;
    };

    const renderContent = () => {
        if (activeSubTab === 'maps') {
            const mapSrc = formatFileName('map');
            return (
                <iframe
                    className="w-full h-full border-0"
                    src={mapSrc}
                    title={`${region} Map`}
                ></iframe>
            );
        } else if (activeSubTab === 'graphs') {
            const imgSrc = formatFileName('image');
            return (
                <div className="w-full h-full flex justify-center items-center">
                    <img
                        src={imgSrc}
                        alt={`${region} Graphs`}
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
            );
        } else if (activeSubTab === 'reports') {
            const reportSrc = formatFileName('graphical_report');
            return (
                <iframe
                    className="w-full h-full border-0"
                    src={reportSrc}
                    title={`${region} Graphical Report`}
                ></iframe>
            );
        }
        return null;
    };

    return (
        <>
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

            <div className="w-full h-[80vh] flex-grow rounded-md">
                {renderContent()}
            </div>
        </>
    );
};

export default GeographicalReport;