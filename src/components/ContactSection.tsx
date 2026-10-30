import React, { useState } from 'react';
import { CONTACT_DATA } from '../data/projects';
import '../styles/ContactSection.css';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(CONTACT_DATA.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="contato" className="contact-section" aria-label="Contato com Felipe Santorini">
      <div className="container">
        <div className="contact-grid">
          {/* Coluna 1: Título Editorial & Sublinhado */}
          <div className="contact-heading-col">
            <div className="contact-meta-label">
              <span>CONTATO</span>
              <span className="contact-meta-line" aria-hidden="true" />
            </div>

            <h2 className="contact-title">
              <span className="title-line">VAMOS</span>
              <span className="title-line">CONVERSAR?</span>
            </h2>

            <div className="contact-title-underline" aria-hidden="true" />
          </div>

          {/* Coluna 2: Texto & Canais Oficiais de Contato */}
          <div className="contact-content-col">
            <p className="contact-lead-text">
              Se você tem um projeto, uma ideia ou só quer bater um papo sobre cinema, vídeo e imagem, me manda uma mensagem.
            </p>

            <div className="contact-links-list">
              {/* E-mail Profissional */}
              <div className="contact-link-item">
                <span className="contact-icon-wrapper" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </span>
                <a
                  href={`mailto:${CONTACT_DATA.email}`}
                  className="contact-link-text"
                  aria-label={`Enviar e-mail para ${CONTACT_DATA.email}`}
                >
                  {CONTACT_DATA.email}
                </a>
                <button
                  type="button"
                  className="contact-link-copy-btn"
                  onClick={handleCopyEmail}
                  title="Copiar e-mail"
                >
                  {copied ? 'Copiado!' : 'Copiar'}
                </button>
              </div>

              {/* Instagram */}
              <a
                href={CONTACT_DATA.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
                aria-label="Perfil do Instagram de Felipe Santorini"
              >
                <span className="contact-icon-wrapper" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </span>
                <span className="contact-link-text">{CONTACT_DATA.instagram.handle}</span>
              </a>

              {/* Behance */}
              <a
                href={CONTACT_DATA.behance.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
                aria-label="Perfil do Behance de Felipe Santorini"
              >
                <span className="contact-icon-wrapper" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M7.74 10.23c.53 0 .97-.13 1.3-.39.33-.26.5-.66.5-1.2 0-.48-.15-.86-.44-1.12-.29-.26-.71-.4-1.25-.4H4.5v3.11h3.24zm.27 4.17c.64 0 1.15-.15 1.52-.45.37-.3.56-.75.56-1.34 0-.57-.2-1-.59-1.28-.39-.28-.96-.42-1.7-.42H4.5v3.49h3.51zm9.46-3.83c-.45 0-.85.12-1.2.35-.35.23-.6.58-.75 1.05h3.87c-.07-.46-.3-.82-.69-1.07-.39-.25-.8-.33-1.23-.33zm5.03 2.16c-.05 1.34-.51 2.45-1.39 3.32-.88.87-2.07 1.3-3.56 1.3-1.63 0-2.92-.51-3.87-1.53-.95-1.02-1.43-2.39-1.43-4.11 0-1.74.47-3.13 1.42-4.17.95-1.04 2.22-1.56 3.82-1.56 1.54 0 2.77.49 3.69 1.47.92.98 1.38 2.34 1.38 4.08v1.2h-7.68c.04.9.36 1.6 1 2.08.64.48 1.43.72 2.37.72.76 0 1.4-.15 1.91-.45.51-.3.87-.7 1.08-1.2l1.26.66zM2.2 4.5h5.88c1.36 0 2.41.34 3.16 1.01.75.67 1.13 1.58 1.13 2.73 0 .78-.2 1.46-.59 2.03-.39.57-.96.99-1.71 1.26.97.26 1.7.74 2.19 1.44.49.7.74 1.57.74 2.61 0 1.34-.44 2.4-1.31 3.19-.87.79-2.07 1.18-3.6 1.18H2.2V4.5zm12.38 2.04h5.45V7.7h-5.45V6.54z" />
                  </svg>
                </span>
                <span className="contact-link-text">{CONTACT_DATA.behance.name}</span>
              </a>

              {/* Site Oficial */}
              <a
                href={CONTACT_DATA.website.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
                aria-label="Site oficial de Felipe Santorini"
              >
                <span className="contact-icon-wrapper" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </span>
                <span className="contact-link-text">{CONTACT_DATA.website.name}</span>
              </a>
            </div>
          </div>

          {/* Coluna 3: Fotografia do Olho com Carimbo */}
          <div className="contact-visual-col">
            <div className="contact-eye-card">
              <picture>
                <source srcSet="assets/images/contact-eye@2x.jpg" media="(min-width: 600px)" />
                <img
                  src="assets/images/contact-eye.jpg"
                  alt="Olhar cinematográfico em close-up sob enquadramento anamórfico"
                  className="contact-eye-img"
                  width="410"
                  height="220"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            {/* Carimbo: BORA FAZER ALGO INESQUECÍVEL? */}
            <div className="contact-stamp-wrapper" aria-hidden="true">
              <img
                src="assets/images/stamp-bora-fazer-clean.png"
                alt="Bora fazer algo inesquecível?"
                className="contact-stamp-img"
                width="115"
                height="65"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

