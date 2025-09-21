// src/components/ArabianSeaReport.jsx

import React, { useState } from 'react';
import { FaDownload, FaShareAlt, FaExpand } from 'react-icons/fa';
import ArabianSeaGeographicalContent from './ArabianSeaGeographicalContent';

const ArabianSeaReport = () => {
    const [activeTab, setActiveTab] = useState('statistical');

    const handleDownload = () => {
        const link = document.createElement('a');
        if (activeTab === 'statistical') {
            link.href = '/Arabian_sea .html';
            link.download = 'Arabian_Sea_Statistical_Report.html';
        } else {
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
                title: 'Arabian Sea Report',
                text: 'Check out this data profiling report for the Arabian Sea!',
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
                                <span className="text-sm font-medium">Arabian Sea</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">Arabian Sea Profiling Report</h1>
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
                            <iframe className="w-full h-full border-0" src="/Arabian_sea .html" title="Arabian Sea Statistical Report"></iframe>
                        ) : (
                            <ArabianSeaGeographicalContent />
                        )}
                    </div>

                    <p className="text-center text-sm text-text-light/60 dark:text-text-dark/60 mt-4">Generated from ARGO NetCDF preprocessing.</p>
                </div>
            </main>
        </div>
    );
};

export default ArabianSeaReport;