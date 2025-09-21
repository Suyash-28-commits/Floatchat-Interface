// src/components/BayOfBengalReport.jsx

import React, { useState } from 'react';
import { FaDownload, FaShareAlt, FaExpand } from 'react-icons/fa';
import BayOfBengalGeographicalContent from './BayOfBengalGeographicalContent'; // Naya component import kiya hai

const BayOfBengalReport = () => {
    const [activeTab, setActiveTab] = useState('statistical');

    const handleDownload = () => {
        // Download logic for the currently active tab
        const link = document.createElement('a');
        if (activeTab === 'statistical') {
            link.href = '/Bay_Of_Bengal_Statistical.html';
            link.download = 'Bay_Of_Bengal_Statistical_Report.html';
        } else {
            // This will need more complex logic if you want to download
            // geographical report content. For now, it's a placeholder.
            alert('Download for geographical reports is not yet implemented.');
            return;
        }
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Bay of Bengal Report',
                text: `Check out this data profiling report for the Bay of Bengal!`,
                url: window.location.href,
            }).then(() => {
                console.log('Successfully shared');
            }).catch((error) => {
                console.error('Error sharing:', error);
            });
        } else {
            alert('Sharing is not supported on this browser.');
            prompt('Share this link:', window.location.href);
        }
    };

    const handleFullScreen = () => {
        const iframe = document.querySelector('iframe');
        if (iframe) {
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } else if (iframe.mozRequestFullScreen) {
                iframe.mozRequestFullScreen();
            } else if (iframe.webkitRequestFullscreen) {
                iframe.webkitRequestFullscreen();
            } else if (iframe.msRequestFullscreen) {
                iframe.msRequestFullscreen();
            }
        }
    };

    return (
        <div className="flex flex-col min-h-screen font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
            <main className="flex-grow p-6 md:p-8">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full mb-2">
                                <span className="text-sm font-medium">Bay of Bengal</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">Bay of Bengal Profiling Report</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <button onClick={handleFullScreen} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-subtle-light dark:bg-subtle-dark hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                                <FaExpand />
                                <span className="text-sm font-medium hidden sm:inline">Open full screen</span>
                            </button>
                            <button onClick={handleDownload} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-subtle-light dark:bg-subtle-dark hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                                <FaDownload />
                                <span className="text-sm font-medium hidden sm:inline">Download</span>
                            </button>
                            <button onClick={handleShare} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-subtle-light dark:bg-subtle-dark hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                                <FaShareAlt />
                                <span className="text-sm font-medium hidden sm:inline">Share</span>
                            </button>
                        </div>
                    </div>

                    <div className="bg-gray-200 dark:bg-gray-700 p-1 rounded-lg flex items-center gap-1 mb-6">
                        <button
                            onClick={() => setActiveTab('statistical')}
                            className={`${
                                activeTab === 'statistical'
                                    ? 'bg-primary text-white'
                                    : 'text-subtle-light dark:text-subtle-dark hover:bg-primary hover:text-white'
                            } px-6 py-2 rounded-md text-sm font-semibold transition-colors`}
                        >
                            Statistical
                        </button>
                        <button
                            onClick={() => setActiveTab('geographical')}
                            className={`${
                                activeTab === 'geographical'
                                    ? 'bg-primary text-white'
                                    : 'text-subtle-light dark:text-subtle-dark hover:bg-primary hover:text-white'
                            } px-6 py-2 rounded-md text-sm font-semibold transition-colors`}
                        >
                            Geographical
                        </button>
                    </div>

                    <div className="w-full h-[80vh] bg-background-light dark:bg-subtle-dark border border-subtle-light dark:border-subtle-dark rounded-xl shadow-lg overflow-hidden">
                        {activeTab === 'statistical' ? (
                            <iframe className="w-full h-full border-0" src="/Bay_Of_Bengal_Statistical.html" title="Bay of Bengal Statistical Report"></iframe>
                        ) : (
                            <BayOfBengalGeographicalContent />
                        )}
                    </div>

                    <p className="text-center text-sm text-text-light/60 dark:text-text-dark/60 mt-4">Generated from ARGO NetCDF preprocessing.</p>
                </div>
            </main>
        </div>
    );
};

export default BayOfBengalReport;