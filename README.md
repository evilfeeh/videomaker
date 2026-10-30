# Portfólio Audiovisual — Felipe Santorini (24 FPS)

Site profissional completo desenvolvido com base na referência de design editorial experimental, cinema independente e materiais reais de **Felipe Santorini**.

---

## 🎞️ Conceito & Direção de Arte
- **Estética Editorial Experimental:** Textura de papel envelhecido (`#E7E5DF`), dobras/vincos de película e granulação analógica.
- **Cinema Independente:** Alto contraste com áreas de preto profundo (`#101010`) e vermelho editorial (`#D92732`).
- **Tipografia Expressiva:** `Bebas Neue` para títulos condensados, `IBM Plex Mono` para fichas técnicas cinematográficas e `Inter` para leitura fluida.
- **Imagens 100% Autênticas:** Frames reais das produções do diretor (*A Gripe*, *Isso Foi Longe Demais*, *Maratona com Café*, *Meia Noite Eu Te Conto*), sem uso de IA ou bancos de imagem genéricos.

---

## 📁 Estrutura de Arquivos

```
website/
├── index.html                   # Página principal completa e pronta para visualização
├── package.json                 # Configuração do projeto React + TypeScript + Vite
├── tsconfig.json                # Configurações TypeScript
├── vite.config.ts               # Configuração do Vite
├── assets/
│   ├── css/
│   │   └── main.css             # Estilos completos compilados
│   ├── js/
│   │   └── main.js              # Interatividade, filtros, modal e navegação
│   └── images/                  # Frames reais, fotografias de bastidores e carimbos
│       ├── hero-felipe.jpg (+ @2x)
│       ├── about-felipe.jpg (+ @2x)
│       ├── a-gripe.jpg (+ @2x)
│       ├── isso-foi-longe-demais.jpg (+ @2x)
│       ├── maratona-com-cafe.jpg (+ @2x)
│       ├── meia-noite-eu-te-conto.jpg (+ @2x)
│       ├── contact-eye.jpg (+ @2x)
│       ├── stamp-cinema-pessoas-clean.png
│       ├── stamp-bora-fazer-clean.png
│       └── tag-transformar-ideias.png
└── src/
    ├── main.tsx                 # Entrada React
    ├── App.tsx                  # Componente raiz
    ├── types/
    │   └── index.ts             # Interfaces TypeScript (Project, NavItem, etc.)
    ├── data/
    │   └── projects.ts          # Base de dados dos filmes, sinopses e créditos
    ├── styles/                  # CSS modular por componente
    └── components/
        ├── Header.tsx           # Monograma FS e navegação
        ├── Hero.tsx             # Seção 01: Abertura editorial e foto no set
        ├── About.tsx            # Seção 02: Sobre mim, biografia e atuação
        ├── ProjectsSection.tsx  # Seção 03: Trabalhos Selecionados
        ├── ProjectCard.tsx      # Card editorial de filme
        ├── ProjectModal.tsx     # Modal de ficha técnica e exibição
        ├── ContactSection.tsx   # Seção 04: Contato em fundo preto
        └── Footer.tsx           # Rodapé oficial
```

---

## 🚀 Como Executar o Projeto

### Opção 1: Visualização Imediata (Sem Instalação)
Basta abrir o arquivo `index.html` com dois cliques em qualquer navegador (Brave, Chrome, Firefox, Edge). Todo o layout, as imagens reais, o modal de filmes, os filtros e os botões interativos funcionam instantaneamente.

### Opção 2: Modo Desenvolvimento com React & Vite
Caso deseje rodar o ambiente de desenvolvimento React:
```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor local Vite
npm run dev

# 3. Compilar versão de produção
npm run build
```

---

## 🎬 Como Atualizar os Projetos e Imagens
1. Para alterar títulos, sinopses, créditos ou links de vídeos, edite apenas o arquivo:
   - `assets/js/projects-data.js` (Base de dados central que alimenta o site tanto em modo estático quanto em React).
2. Para substituir qualquer imagem de capa, adicione a imagem em `assets/images/` e mantenha a proporção cinematográfica (recomenda-se 16:9 widescreen).

