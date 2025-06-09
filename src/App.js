import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CallForPapers from './components/CallForPapers';
import Registration from './components/Registration';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <CallForPapers />
      <Registration />
      <Contact />
    </div>
  );
};

export default App;

