import React, { useEffect, useRef } from 'react';
import { Project } from '../types';
import '../styles/ProjectModal.css';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="modal-content" ref={modalRef}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Fechar janela de detalhes"
        >
          ✕
        </button>

        <div className="modal-media-wrapper">
          <picture>
            {project.image2x && (
              <source srcSet={project.image2x} media="(min-width: 600px)" />
            )}
            <img
              src={project.image}
              alt={`Cena do filme ${project.title}`}
              className="modal-media-img"
              width="820"
              height="380"
            />
          </picture>
        </div>

        <div className="modal-body">
          <div className="modal-header-info">
            <p className="modal-badge-meta">
              {project.category} &nbsp;·&nbsp; {project.year}
            </p>
            <h2 id="modal-project-title" className="modal-title">
              {project.title}
            </h2>
          </div>

          <div className="modal-specs-grid">
            <div className="spec-item">
              <span className="spec-label">FUNÇÕES</span>
              <span className="spec-value">{project.roles.join(' / ')}</span>
            </div>
            {project.duration && (
              <div className="spec-item">
                <span className="spec-label">DURAÇÃO</span>
                <span className="spec-value">{project.duration}</span>
              </div>
            )}
            {project.format && (
              <div className="spec-item">
                <span className="spec-label">FORMATO</span>
                <span className="spec-value">{project.format}</span>
              </div>
            )}
            <div className="spec-item">
              <span className="spec-label">DIREÇÃO DE ARTE</span>
              <span className="spec-value">Felipe Santorini</span>
            </div>
          </div>

          <div className="modal-synopsis-section">
            <h3 className="modal-synopsis-title">SINOPSE / CONTEXTO</h3>
            <p className="modal-synopsis-text">{project.synopsis}</p>
          </div>

          <div className="modal-actions">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-watch-btn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>VER NO SITE OFICIAL</span>
              </a>
            )}
            <p className="modal-source-notice">
              {project.sourceNotice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

