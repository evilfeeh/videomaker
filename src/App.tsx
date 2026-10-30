import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import './App.css';

export const App: React.FC = () => {
  return (
    <div className="portfolio-app">
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <ProjectsSection />
      </main>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;

