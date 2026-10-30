/**
 * PORTFÓLIO AUDIOVISUAL — FELIPE SANTORINI
 * Script de Interatividade, Acessibilidade e Navegação Editorial
 */

// Dados dos Trabalhos Selecionados (carregados a partir de projects-data.js)

document.addEventListener('DOMContentLoaded', () => {
  // 1. Renderização dos cards de projetos
  const gridContainer = document.getElementById('projects-grid');
  const modalBackdrop = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function renderProjects(filter = 'TODOS') {
    if (!gridContainer) return;
    gridContainer.innerHTML = '';

    const filtered = filter === 'TODOS'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter(p => p.category === filter);

    filtered.forEach(project => {
      const card = document.createElement('article');
      card.className = 'project-card';
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Ver detalhes do filme ${project.title}`);

      card.innerHTML = `
        <div class="project-thumbnail-wrapper">
          <picture>
            <source srcset="${project.image2x}" media="(min-width: 600px)">
            <img
              src="${project.image}"
              alt="Frame cinematográfico de ${project.title}"
              class="project-thumbnail-img"
              loading="lazy"
              decoding="async"
              width="292"
              height="174"
            >
          </picture>
          <div class="project-play-overlay" aria-hidden="true">
            <div class="project-play-icon">
              <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
        <div class="project-info-header">
          <h3 class="project-card-title">${project.title}</h3>
          <span class="project-card-arrow" aria-hidden="true">→</span>
        </div>
        <p class="project-card-meta">${project.category} &nbsp;·&nbsp; ${project.year}</p>
        <p class="project-card-roles">${project.roles.join('  /  ')}</p>
      `;

      card.addEventListener('click', () => openModal(project));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(project);
        }
      });

      gridContainer.appendChild(card);
    });
  }

  // 2. Filtro de Categorias
  const filterButtons = document.querySelectorAll('.category-filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter') || 'TODOS';
      if (btn.classList.contains('active')) {
        btn.classList.remove('active');
        renderProjects('TODOS');
      } else {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(category);
      }
    });
  });

  renderProjects('TODOS');

  // 3. Modal Cinematográfico
  function openModal(project) {
    if (!modalBackdrop) return;

    document.getElementById('modal-img').src = project.image;
    document.getElementById('modal-img-source').srcset = project.image2x || project.image;
    document.getElementById('modal-badge-meta').textContent = `${project.category} · ${project.year}`;
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-roles').textContent = project.roles.join(' / ');
    document.getElementById('modal-duration').textContent = project.duration || '24 FPS';
    document.getElementById('modal-format').textContent = project.format || 'Digital Cinema';
    document.getElementById('modal-synopsis').textContent = project.synopsis;
    document.getElementById('modal-notice').textContent = project.sourceNotice;

    const watchBtn = document.getElementById('modal-watch-link');
    if (watchBtn) {
      watchBtn.href = project.url || 'https://www.felipesantorini.com.br/';
    }

    modalBackdrop.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    modalCloseBtn?.focus();
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.style.display = 'none';
    document.body.style.overflow = '';
  }

  modalCloseBtn?.addEventListener('click', closeModal);
  modalBackdrop?.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  // 4. Navegação e Rastreamento de Seção Ativa no Scroll
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = ['inicio', 'sobre', 'filmes', 'contato'];

  function updateActiveNav() {
    const scrollPos = window.scrollY + 220;
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
          break;
        }
      }
    }
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // 5. Menu Mobile
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const headerNav = document.querySelector('.header-nav');

  mobileToggle?.addEventListener('click', () => {
    const isOpen = headerNav?.classList.toggle('is-open');
    mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      headerNav?.classList.remove('is-open');
      mobileToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  // 6. Cópia de E-mail
  const copyBtn = document.getElementById('copy-email-btn');
  copyBtn?.addEventListener('click', () => {
    navigator.clipboard.writeText('contato@felipesantorini.com.br').then(() => {
      copyBtn.textContent = 'Copiado!';
      setTimeout(() => {
        copyBtn.textContent = 'Copiar';
      }, 2500);
    });
  });
});

