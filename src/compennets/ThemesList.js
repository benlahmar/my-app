import React from 'react';
import ThemeCard from './ThemeCard';
import themesData from '../data/themesData';

const ThemesList = () => {
  return (
    <div className="themes-list">
      {themesData.map((theme) => (
        <ThemeCard
          key={theme.slug}
          slug={theme.slug}
          logo={theme.logo}
          title={theme.title}
          description={theme.description}
        />
      ))}
    </div>
  );
};

export default ThemesList;
