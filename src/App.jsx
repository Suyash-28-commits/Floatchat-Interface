import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ExploreOptions from './pages/ExploreOptions';
import DocsPage from './pages/Docs';
import React from 'react';
import Header from './Components/Header'; // Import the Header component


import OceanReports from './Components/OceanReports';
import StatisticalReport from './Components/StatisticalReport';
import ArabianSeaReport from './Components/ArabianSeaReport';
import BayOfBengalReport from './Components/BayOfBengalReport';
import IndianOceanReport from './Components/IndianOceanReport';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-800 font-inter">
         {/* Header component added here */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
           <Route path="/explore" element={<ExploreOptions />} />
            <Route path="/docs" element={<DocsPage/>} />
             <Route path="/oceanReports" element={<OceanReports />} />
              <Route path="/statistical-report" element={<StatisticalReport />} />
              <Route path="/report/arabian-sea" element={<ArabianSeaReport />} />
              <Route path="/report/bay-of-bengal" element={<BayOfBengalReport />} />
              <Route path="/report/indian-ocean" element={<IndianOceanReport />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;