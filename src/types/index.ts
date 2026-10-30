export interface Project {
  id: string;
  title: string;
  category: 'FILMES' | 'YOUTUBE' | 'COMERCIAIS' | 'CLIENTES';
  year: number;
  roles: string[];
  image: string;
  image2x?: string;
  aspectRatio?: string;
  synopsis: string;
  duration?: string;
  format?: string;
  url?: string;
  hasRealVideo: boolean;
  sourceNotice: string;
}

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface ContactInfo {
  email: string;
  instagram: {
    handle: string;
    url: string;
  };
  behance: {
    name: string;
    url: string;
  };
  website: {
    name: string;
    url: string;
  }
}

