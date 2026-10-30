import { Project, ContactInfo } from '../types';

declare global {
  interface Window {
    PROJECTS_DATA?: Project[];
  }
}

/**
 * Projetos em destaque no portfólio de Felipe Santorini.
 * Ordem obrigatória conforme diretriz de arte e referência:
 * 1. A Gripe
 * 2. Isso Foi Longe Demais
 * 3. Maratona com Café
 * 4. Meia Noite Eu Te Conto
 *
 * NOTA: Carrega automaticamente a partir de assets/js/projects-data.js
 * via window.PROJECTS_DATA caso disponível no navegador.
 */
export const PROJECTS_DATA: Project[] =
  (typeof window !== 'undefined' && window.PROJECTS_DATA) || [
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
    }
  ];

export const CONTACT_DATA: ContactInfo = {
  email: 'contato@felipesantorini.com.br',
  instagram: {
    handle: '@ofelipesantorini',
    url: 'https://www.instagram.com/ofelipesantorini/'
  },
  behance: {
    name: 'Behance',
    url: 'https://www.behance.net/felipesantorini'
  }
};

export const ABOUT_DATA = {
  title: 'SOBRE MIM',
  subtitle: 'POR TRÁS DAS IMAGENS.',
  bioParagraph1:
    'Sou Felipe Santorini, videomaker, montador, diretor e diretor de fotografia, nascido e criado no Brasil, onde desenvolvo meu trabalho audiovisual.',
  bioParagraph2:
    'Minha relação com o cinema começou cedo, entre quadrinhos, música e muita imaginação. Hoje, sigo explorando as possibilidades da imagem para contar histórias que importam — e que, acima de tudo, sejam sentidas.',
  specialtiesTitle: 'ÁREAS DE ATUAÇÃO',
  specialties: [
    'DIREÇÃO',
    'CINEMATOGRAFIA',
    'ROTEIRO',
    'MONTAGEM',
    'SOM E COR'
  ]
};

