import React from 'react';
import { Project } from '../types';
import '../styles/ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <article
      className="project-card"
      onClick={() => onSelect(project)}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
      aria-label={`Ver detalhes do filme ${project.title}`}
    >
      <div className="project-thumbnail-wrapper">
        <picture>
          {project.image2x && (
            <source srcSet={project.image2x} media="(min-width: 600px)" />
          )}
          <img
            src={project.image}
            alt={`Frame cinematográfico de ${project.title}`}
            className="project-thumbnail-img"
            loading="lazy"
            decoding="async"
            width="292"
            height="174"
          />
        </picture>

        <div className="project-play-overlay" aria-hidden="true">
          <div className="project-play-icon">
            <svg viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="project-info-header">
        <h3 className="project-card-title">{project.title}</h3>
        <span className="project-card-arrow" aria-hidden="true">→</span>
      </div>

      <p className="project-card-meta">
        {project.category} &nbsp;·&nbsp; {project.year}
      </p>

      <p className="project-card-roles">
        {project.roles.join('  /  ')}
      </p>
    </article>
  );
};

