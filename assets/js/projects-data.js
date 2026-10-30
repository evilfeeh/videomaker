/**
 * PORTFÓLIO AUDIOVISUAL — FELIPE SANTORINI
 * Base de Dados Unificada dos Trabalhos Selecionados
 *
 * Edite este arquivo para atualizar títulos, anos, categorias,
 * créditos, sinopses e links de todos os projetos.
 */

var PROJECTS_DATA = [
  {
    id: 'a-gripe',
    title: 'A GRIPE',
    category: 'FILMES',
    year: 2026,
    roles: ['ROTEIRO', 'DIREÇÃO', 'FOTOGRAFIA', 'MONTAGEM'],
    image: 'assets/images/a-gripe.jpg',
    image2x: 'assets/images/a-gripe@2x.jpg',
    aspectRatio: '16/9',
    synopsis:
      'Amigos visitam uma colega isolada durante uma pandemia e descobrem que as verdadeiras intenções por trás do convite escondem algo aterrorizante.',
    duration: '7 min',
    format: 'Digital Cinema 4K · 24 FPS',
    url: 'https://www.youtube.com/watch?v=RhXTI0ed_8A',
    hasRealVideo: true,
    sourceNotice: 'Projeto autoral verificado no FilmFreeway e no site oficial de Felipe Santorini.'
  },
  {
    id: 'isso-foi-longe-demais',
    title: 'ISSO FOI LONGE DEMAIS',
    category: 'YOUTUBE',
    year: 2026,
    roles: ['DIREÇÃO', 'FOTOGRAFIA', 'MONTAGEM'],
    image: 'assets/images/isso-foi-longe-demais.jpg',
    image2x: 'assets/images/isso-foi-longe-demais@2x.jpg',
    aspectRatio: '9/16',
    synopsis:
      'Esquestes de comédia e terror com situações do dia a dia levadas ao extremo. Feito em parceria com Nicolas Moraes',
    duration: '18 min',
    format: 'Vídeos verticais',
    url: 'https://www.instagram.com/issofoilongedemaisvideos/',
    hasRealVideo: true,
    sourceNotice: 'Projeto registrado no catálogo oficial de produções de Felipe Santorini.'
  },
  {
    id: 'maratona-com-cafe',
    title: 'MARATONA COM CAFÉ',
    category: 'CLIENTES',
    year: 2026,
    roles: ['MONTAGEM'],
    image: 'assets/images/maratona-com-cafe.jpg',
    image2x: 'assets/images/maratona-com-cafe@2x.jpg',
    aspectRatio: '16/9',
    synopsis:
      'Vídeos semanais de games e humor, por Marcelo GD. ',
    duration: '10 min',
    format: 'Youtube e Instagram',
    url: 'https://www.youtube.com/@maratonacomcafe',
    hasRealVideo: true,
    sourceNotice: 'Vídeos de gameplay com humor e história'
  },
  {
    id: 'meia-noite-eu-te-conto',
    title: 'MEIA NOITE EU TE CONTO',
    category: 'YOUTUBE',
    year: 2021,
    roles: ['ROTEIRO', 'APRESENTAÇÃO', 'MONTAGEM'],
    image: 'assets/images/meia-noite-eu-te-conto.jpg',
    image2x: 'assets/images/meia-noite-eu-te-conto@2x.jpg',
    aspectRatio: '16/9',
    synopsis:
      'Narrativa densa e atmosférica que investiga relatos macabros, folclore e cultura pop do terror contado por três amigos com humor ácido e imersão',
    duration: '16 min',
    format: 'Widescreen 16:9 · 24 FPS',
    url: 'https://www.youtube.com/@meianoiteeutecontocast',
    hasRealVideo: true,
    sourceNotice: 'Podcast criado por Felipe Santorini.'
  },
  {
    id: 'curso-ator',
    title: 'Curso Ator',
    category: 'CLIENTES',
    year: 2021,
    roles: ['CAPTAÇÃO', 'MONTAGEM'],
    image: 'assets/images/curso-ator.jpg',
    image2x: 'assets/images/curso-ator@2x.jpg',
    aspectRatio: '9/16',
    synopsis:
      'Captação e montagem de comerciais para a escola de teatro Curso Ator',
    duration: '60s',
    format: 'Instagram Full HD - 30 FPS',
    url: 'https://www.instagram.com/cursoatordeteatro/',
    hasRealVideo: true,
    sourceNotice: 'Escola de teatro Curso Ator'
  }
];

// Disponibiliza globalmente para carregamento via script no navegador
if (typeof window !== 'undefined') {
  window.PROJECTS_DATA = PROJECTS_DATA;
}

// Disponibiliza para módulos (Node / Bundlers / TypeScript)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PROJECTS_DATA };
}

