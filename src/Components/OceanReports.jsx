// src/components/OceanReports.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const OceanReports = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white font-display text-slate-800">
            {/* ... baaki code same hai ... */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex-grow">
                <div className="max-w-5xl mx-auto">
                    {/* ... baaki code same hai ... */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Arabian Sea Card */}
                        <div className="group card-wrapper active">
                            <div className="relative bg-white border border-slate-200/80 rounded-xl shadow-sm overflow-hidden transition-all duration-300 h-full flex flex-col">
                                <div className="card-image-wrapper">
                                    <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQkvYLPut7LRr01jUKIFMOCM8ULtOkcc4TsJm3S0QbbkDx3_bgap5YEjiBkPwbnN0EegRmhHc_ySA45l31Hs8n8z5wD-OiGjrUNCQTavaWVnXtPo8e8Z5MwsOzLrwBTyzpW3lZLVaB-_4L7AOzHCCB6SsgCJ1RubuQWrQ6rskThot0wP28D3wvQcXUEZ9AogIgoQp7AVJ7hiYl0UM7jQw6z-_ujFNpLNQq_X0LfC8YKjZ0DO-wWEQylIQ4L8kS_WTrY2FeY_Ds9Xg")' }}></div>
                                </div>
                                <div className="p-5 flex-grow flex flex-col">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-bold text-slate-900">Arabian Sea</h3>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Available</span>
                                    </div>
                                    <div className="mt-auto">
                                        <Link 
                                            to="/report/arabian-sea" 
                                            className="w-full bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 focus:ring-offset-background-light transition-all inline-block text-center"
                                        >
                                            Open Report
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bay of Bengal Card */}
                        <div className="group card-wrapper">
                            <div className="relative bg-white border border-slate-200/80 rounded-xl shadow-sm overflow-hidden transition-all duration-300 h-full flex flex-col">
                                <div className="card-image-wrapper">
                                    <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBq40y3zKrIHJXksweacJNb85LQiDrUhVuIT-gVijkjy9tR1fCOApcpMfrYaQiwhy0xumG0xH9C2U6AAaY0Hla07iHK4TagrXkrxwOjRuH-Wc9xC_yCdrpwh-2ZykNjSQa1-z1nXxhigfp9oina60iyJ8YZQfy49gUoM9ne6x_cFNgE6gQVRVsSIl4qXkHgYlw6tEZt-tqaEkDPAJbepElC2ATh9Fe1mDjsgtCL1rTt98OKSyDkg4xOn88wYqx_Ve8YwO_HYLqslbQ")' }}></div>
                                </div>
                                <div className="p-5 flex-grow flex flex-col">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-bold text-slate-900">Bay of Bengal</h3>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Available</span>
                                    </div>
                                    <div className="mt-auto">
                                        <Link 
                                            to="/report/bay-of-bengal" 
                                            className="w-full bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 focus:ring-offset-background-light transition-all inline-block text-center"
                                        >
                                            Open Report
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Indian Ocean Card */}
                        <div className="group card-wrapper">
                            <div className="relative bg-white border border-slate-200/80 rounded-xl shadow-sm overflow-hidden transition-all duration-300 h-full flex flex-col">
                                <div className="card-image-wrapper">
                                    <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCL74GGegph60ZFmmAXVcfY3j2wjJABVB5V_4jM2ZxjbhZ7-5uPKCjS0ULtEI2636f5SR55nskH50WCrtARhUiYKsVwSdBjEyPb6OoIt36PHoFZvWFcFIL-7-6vlek2J1LcE0ZyTeTqlUe34GMTZbmY_BCDOjdOZT2IazNXWCcQlAZOL1x3ybUHM2b4AsItGv40lvQ06MNGtOYF3Lg2LE78iE0NPMPkFEKZCYhKHxI4m-DpKEtmFCJDVh7tBTTY5VsrJDqIx36FGp4")' }}></div>
                                </div>
                                <div className="p-5 flex-grow flex flex-col">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-bold text-slate-900">Indian Ocean</h3>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Available</span>
                                    </div>
                                    <div className="mt-auto">
                                        <Link 
                                            to="/report/indian-ocean" 
                                            className="w-full bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 focus:ring-offset-background-light transition-all inline-block text-center"
                                        >
                                            Open Report
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-sm text-slate-500 mt-10">
                        Reports summarize distributions, correlations, and data quality.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default OceanReports;