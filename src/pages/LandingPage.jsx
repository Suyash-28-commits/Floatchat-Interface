import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Globe from 'react-globe.gl';
import * as THREE from 'three';

// India ke coordinates
const INDIA_COORDS = { lat: 20.5937, lng: 78.9629 };

// Oceans ke exact coordinates aur naye colors
const OCEAN_DATA = [
  { lat: 15.5, lng: 65, name: 'Arabian Sea', color: '#ffeb3b' }, // Bright yellow
  { lat: 15.5, lng: 88, name: 'Bay of Bengal', color: '#00e5ff' }, // Neon cyan
  { lat: 5, lng: 75, name: 'Indian Ocean', color: '#ffffff' }, // White
];

const LandingPage = () => {
  const globeEl = useRef();
  const navigate = useNavigate();
  const [isGlobeClicked, setIsGlobeClicked] = useState(false);
  const [indiaPolygons, setIndiaPolygons] = useState([]);
  const [showExploreButton, setShowExploreButton] = useState(false);
  const lngRef = useRef(0);
  const floatAltRef = useRef(0);

  useEffect(() => {
    // India ka GeoJSON data fetch kar rahe hain
    fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries/IND.geo.json')
      .then(res => res.json())
      .then(data => {
        setIndiaPolygons(data.features || []);
      });

    // Globe aur floats ko animate karne ke liye
    let autoRotate = true;
    const rotationSpeed = 0.005;
    
    const animate = () => {
      if (autoRotate && globeEl.current && !isGlobeClicked) {
        lngRef.current += rotationSpeed;
        globeEl.current.pointOfView({
            lng: lngRef.current,
            lat: 0,
            altitude: 1.5,
        });
      }
      // Floating animation for points
      floatAltRef.current = Math.sin(Date.now() * 0.002) * 0.005;
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => autoRotate = false;
  }, [isGlobeClicked]);

  const handleGlobeClick = () => {
    if (!isGlobeClicked) {
      globeEl.current.pointOfView({
        lat: INDIA_COORDS.lat, 
        lng: INDIA_COORDS.lng, 
        altitude: 0.8
      }, 2000);
      
      setIsGlobeClicked(true);
      
      setTimeout(() => {
          setShowExploreButton(true);
      }, 2000);
    }
  };

  const handleExploreData = () => {
    navigate('/explore');
  };

  const oceanFloatsData = OCEAN_DATA.flatMap(ocean => 
      Array.from({ length: 7 }).map(() => ({
          lat: ocean.lat + (Math.random() - 0.5) * 5,
          lng: ocean.lng + (Math.random() - 0.5) * 5,
          color: ocean.color
      }))
  );

  return (
    <motion.div
      className="landing-page-container w-screen h-screen relative overflow-hidden cursor-pointer"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 to-fuchsia-100"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full filter blur-[150px] opacity-70" style={{ backgroundImage: 'linear-gradient(to bottom right, #00c6ff, #0d6efd)' }}></div>
      
      <div className="relative z-10 w-full h-full">
        <Globe
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe@2.30.0/example/img/earth-day.jpg"
          bumpImageUrl="//unpkg.com/three-globe@2.30.0/example/img/earth-topology.png"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          atmosphereColor="#00c6ff"
          atmosphereAltitude={0.2}
          onGlobeClick={handleGlobeClick}
          
          polygonsData={indiaPolygons}
          polygonCapColor={() => 'rgba(255, 255, 255, 0.4)'}
          polygonSideColor={() => 'rgba(255, 255, 255, 0.2)'}
          polygonStrokeColor={() => '#ffffff'}

          labelsData={isGlobeClicked ? OCEAN_DATA : []}
          labelLat={d => d.lat}
          labelLng={d => d.lng}
          labelText={d => d.name}
          labelSize={0.8}
          labelColor={d => d.color}
          labelDotRadius={0.4}
          labelResolution={2}
          labelAltitude={0.01}

          pointsData={isGlobeClicked ? oceanFloatsData : []}
          pointLat={d => d.lat}
          pointLng={d => d.lng}
          pointColor={d => d.color}
          pointAltitude={() => floatAltRef.current}
          pointRadius={0.2}
        />

        <AnimatePresence>
          {showExploreButton && (
            <motion.div
              className="absolute bottom-10 inset-x-0 mx-auto z-20 flex justify-center w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <button
                onClick={handleExploreData}
                className="explore-button px-10 py-4 text-xl font-bold text-white bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
              >
                Explore Data
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default LandingPage;