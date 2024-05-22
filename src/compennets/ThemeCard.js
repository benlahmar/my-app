import React from 'react';

const ThemeCard = ({ slug, logo, title, description }) => {
  return (
    <div className="theme-card">
      <img src={logo} alt={`${title} logo`} className="theme-card-logo" />
      <h3 className="theme-card-title">{title}</h3>
      <p className="theme-card-description">{description}</p>
    </div>
  );
};

export default ThemeCard;
