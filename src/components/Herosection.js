import React from 'react';
import HeroSectionContent from './HeroSectionContent';

const HeroSection = ({Background}) => {
  return (
    <div className="relative bg-cover bg-center h-[600px] md:h-[500px] lg:h-[600px]" style={{ backgroundImage: `url(${Background})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <HeroSectionContent page={"home"}/>
    </div>
  );
};

export default HeroSection;
