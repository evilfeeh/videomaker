import React from 'react';
import '../styles/Hero.css';

export const Hero: React.FC = () => {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('filmes');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero-section" aria-label="Apresentação Felipe Santorini">
      <div className="container">
        <div className="hero-grid">
          {/* Coluna Esquerda: Tipografia & Apresentação */}
          <div className="hero-content">
            <div className="hero-badge-24fps">
              <span>24 FPS</span>
              <span className="badge-dot" aria-hidden="true" />
            </div>

            <h1 className="hero-title">
              <span className="name-first">FELIPE</span>
              <span className="name-last">SANTORINI</span>
            </h1>

            <p className="hero-roles">
              DIREÇÃO &nbsp;/&nbsp; FOTOGRAFIA &nbsp;/&nbsp; MONTAGEM
            </p>

            <p className="hero-description">
              Histórias épicas com humor<br />
              e uma pitada de terror.
            </p>

            <a
              href="#filmes"
              className="hero-cta"
              onClick={handleScrollToProjects}
              aria-label="Explorar filmes de Felipe Santorini"
            >
              <span className="cta-play-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="cta-label">EXPLORAR FILMES</span>
              <span className="cta-arrow" aria-hidden="true">
                <span className="cta-arrow-line" />
                <span className="cta-arrow-head">&gt;</span>
              </span>
            </a>
          </div>

          {/* Coluna Direita: Fotografia Cinematográfica */}
          <div className="hero-visual">
            <div className="hero-photo-wrapper">
              <picture>
                <source srcSet="assets/images/hero-felipe@2x.png" media="(min-width: 600px)" />
                <img
                  src="assets/images/hero-felipe.png"
                  alt="Felipe Santorini operando câmera de cinema em set de gravação"
                  className="hero-photo-img"
                  width="1920"
                  height="1080"
                  loading="eager"
                  decoding="async"
                />
              </picture>

              {/* Anotação manuscrita 24 FPS no canto superior direito */}
              <div className="hero-handwritten-note" aria-hidden="true">
                <img
                  src="assets/images/handwritten-24fps.png"
                  alt=""
                  className="hero-handwritten-img"
                  width="55"
                  height="35"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Marcação técnica de rolo / película */}
        <div className="hero-margin-indicator" aria-hidden="true">
          <span className="indicator-code">010302</span>
          <span className="indicator-num">01</span>
        </div>
      </div>
    </section>
  );
};

