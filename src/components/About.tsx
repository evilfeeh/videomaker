import React from 'react';
import '../styles/About.css';
import { ABOUT_DATA } from '../data/projects';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="about-section" aria-label="Sobre Felipe Santorini">
      <div className="container">
        <hr className="paper-crease-divider" aria-hidden="true" />

        <div className="about-grid">
          {/* Coluna 1: Fotografia P&B & Etiqueta */}
          <div className="about-visual">
            <div className="about-photo-card">
              <picture>
                <source srcSet="assets/images/about-felipe@2x.jpg" media="(min-width: 600px)" />
                <img
                  src="assets/images/about-felipe.jpg"
                  alt="Felipe Santorini com gorro e jaqueta operando câmera de cinema"
                  className="about-photo-img"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <div className="about-badge-tag" aria-hidden="true">
              <img
                src="assets/images/tag-transformar-ideias.png"
                alt="Transformar ideias em experiências visuais"
                width="205"
                height="32"
              />
            </div>
          </div>

          {/* Coluna 2: Título Editorial Vermelho & Biografia */}
          <div className="about-bio">
            <h2 className="about-title">
              <span className="title-line">SOBRE</span>
              <span className="title-line">MIM</span>
            </h2>

            <div className="about-text">
              <p>{ABOUT_DATA.bioParagraph1}</p>
              <p>{ABOUT_DATA.bioParagraph2}</p>
            </div>
          </div>

          {/* Coluna 3: Áreas de Atuação & Carimbo */}
          <div className="about-specialties">
            <h3 className="specialties-header">
              <span>{ABOUT_DATA.specialtiesTitle}</span>
              <span className="specialties-arrow" aria-hidden="true">
                <span className="specialties-arrow-line" />
                <span>&gt;</span>
              </span>
            </h3>

            <ul className="specialties-list">
              {ABOUT_DATA.specialties.map((item, index) => (
                <li key={index} className="specialty-item">
                  {item}
                </li>
              ))}
            </ul>

            <div className="about-stamp-wrapper" aria-hidden="true">
              <img
                src="assets/images/stamp-cinema-pessoas-clean.png"
                alt="Cinema é sobre pessoas"
                className="about-stamp-img"
                width="85"
                height="75"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

