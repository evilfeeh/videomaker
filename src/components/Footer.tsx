import React from 'react';
import '../styles/Footer.css';

export const Footer: React.FC = () => {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-container">
        <p className="footer-credits">
          FELIPE SANTORINI &nbsp;/&nbsp; BRASIL &nbsp;/&nbsp; 24 FPS
        </p>

        <a
          href="#inicio"
          className="footer-monogram"
          onClick={handleScrollToTop}
          aria-label="Voltar ao início da página"
        >
          FS
        </a>
      </div>
    </footer>
  );
};

