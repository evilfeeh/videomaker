import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

interface HeaderProps {
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection = 'inicio' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(activeSection);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre', 'filmes', 'contato'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setCurrentSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="site-header" role="banner">
      <div className="container">
        <a
          href="#inicio"
          className="header-brand"
          onClick={(e) => handleNavClick(e, 'inicio')}
          aria-label="Felipe Santorini — Voltar ao início"
        >
          <span className="brand-monogram">FS</span>
          <span className="brand-line" aria-hidden="true" />
        </a>

        <button
          className="mobile-nav-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Alternar menu de navegação"
          aria-expanded={mobileMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`header-nav ${mobileMenuOpen ? 'is-open' : ''}`}
          role="navigation"
          aria-label="Menu principal"
        >
          <a
            href="#inicio"
            className={`nav-link ${currentSection === 'inicio' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'inicio')}
          >
            INÍCIO
          </a>
          <a
            href="#sobre"
            className={`nav-link ${currentSection === 'sobre' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'sobre')}
          >
            SOBRE
          </a>
          <a
            href="#filmes"
            className={`nav-link ${currentSection === 'filmes' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'filmes')}
          >
            FILMES
          </a>
          <a
            href="#contato"
            className={`nav-link ${currentSection === 'contato' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'contato')}
          >
            CONTATO
          </a>
        </nav>
      </div>
    </header>
  );
};

