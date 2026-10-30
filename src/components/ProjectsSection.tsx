import React, { useState } from 'react';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { PROJECTS_DATA } from '../data/projects';
import '../styles/ProjectsSection.css';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('TODOS');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { label: 'TODOS', key: 'TODOS' },
    { label: 'FILMES', key: 'FILMES' },
    { label: 'YOUTUBE', key: 'YOUTUBE' },
    { label: 'CLIENTES', key: 'CLIENTES' }
  ];

  const filteredProjects =
    selectedCategory === 'TODOS'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="filmes" className="projects-section" aria-label="Trabalhos Selecionados">
      <div className="container">
        <hr className="paper-crease-divider" aria-hidden="true" />

        {/* Cabeçalho da Seção */}
        <header className="projects-header">
          <div className="projects-title-wrapper">
            <h2 className="projects-title">
              <span className="title-line">TRABALHOS</span>
              <span className="title-line">SELECIONADOS</span>
            </h2>
            <div className="projects-title-arrow" aria-hidden="true">
              <span className="projects-arrow-line" />
              <span className="projects-arrow-head">&gt;</span>
            </div>
          </div>

          {/* Categorias / Filtros Editoriais */}
          <nav className="projects-categories" aria-label="Filtro de categorias">
            {categories.slice(1).map((cat, index, arr) => (
              <React.Fragment key={cat.key}>
                <button
                  className={`category-filter-btn ${selectedCategory === cat.key ? 'active' : ''
                    }`}
                  onClick={() =>
                    setSelectedCategory(selectedCategory === cat.key ? 'TODOS' : cat.key)
                  }
                >
                  {cat.label}
                </button>
                {index < arr.length - 1 && (
                  <span className="category-separator" aria-hidden="true">
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
            <span className="categories-indicator-line" aria-hidden="true" />
          </nav>
        </header>

        {/* Grid de Projetos Obrigatórios (Ordem: A Gripe, Isso Foi Longe Demais, Maratona com Café, Meia Noite Eu Te Conto) */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Modal de Detalhes Cinematográficos */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};

