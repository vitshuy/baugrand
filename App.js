import React, { useState, useEffect } from 'react';
import './App.css';
import { translations } from './translations';
import {
  Header,
  HeroSection,
  AboutSection,
  ServicesSection,
  ProjectsSection,
  ContactSection,
  Footer
} from './components';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentLanguage, setCurrentLanguage] = useState('uk');

  const t = translations[currentLanguage];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      <Header 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
        t={t}
      />
      
      <main>
        <HeroSection t={t} />
        <AboutSection t={t} />
        <ServicesSection t={t} />
        <ProjectsSection t={t} />
        <ContactSection t={t} />
      </main>
      
      <Footer t={t} />
    </div>
  );
}

export default App;