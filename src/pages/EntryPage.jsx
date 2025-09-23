import React from 'react';
import { useNavigate } from 'react-router-dom';

const EntryPage = () => {
  const navigate = useNavigate();

  const handleDiveIn = () => {
    navigate('/landing');
  };

  return (
    <div className="entry-page-container">
      <video
        autoPlay
        loop
        muted
        className="video-background"
      >
        <source src="/Untitled design.mp4" type="video/mp4" />
      </video>

      {/* Ek overlay aur usme blur filter */}
      <div className="content-overlay">
        <h1 className="title-text">
          Dive Into India’s Living Oceans
        </h1>
        <button
          onClick={handleDiveIn}
          className="dive-in-button"
        >
          Dive In
          <span className="arrow-icon">→</span>
        </button>
      </div>
    </div>
  );
};

export default EntryPage;