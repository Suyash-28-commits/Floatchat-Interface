import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Docs from './pages/Docs';
import OceanReports from './Components/OceanReports';
import IndianOceanReport from './Components/IndianOceanReport';
import ArabianSeaReport from './Components/ArabianSeaReport';
import BayOfBengalReport from './Components/BayOfBengalReport';
import LandingPage from './pages/LandingPage';
import EntryPage from './pages/EntryPage'; 
import ExploreOptions  from './pages/ExploreOptions';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<EntryPage />} /> {/* Naya entry page yaha set kiya */}
        <Route path="/landing" element={<LandingPage />} /> {/* Purana landing page ab is route par hai */}
        <Route path="/explore" element={<ExploreOptions />} />
        <Route path="/oceanReports" element={<OceanReports />} />
        <Route path="/report/indian-ocean" element={<IndianOceanReport />} />
        <Route path="/report/arabian-sea" element={<ArabianSeaReport />} />
        <Route path="/report/bay-of-bengal" element={<BayOfBengalReport />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;