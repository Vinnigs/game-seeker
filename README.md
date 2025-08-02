# GameSeeker

GameSeeker é um website para descoberta de jogos gratuitos, permitindo aos usuários encontrar jogos com base em suas preferências e especificações do sistema.

🌐 **Acesse o projeto**: [https://gameseeker.vercel.app/](https://gameseeker.vercel.app/)


## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- NPM ou Yarn


### Instalação

1. Clone o repositório
```bash
git clone https://github.com/Vinnigs/game-seeker.git
cd game-seeker
```

2. Instale as dependências
```bash
npm install
# ou
yarn install
```

3. Inicie o servidor de desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

4. Acesse o projeto em [http://localhost:3000](http://localhost:3000)


## 🎮 Funcionalidades

### Página Inicial
- Hero com formulário de busca personalizada de jogos
- Seção de jogos populares
- Carrossel de lançamentos recentes
- Design responsivo para mobile e desktop

### Busca de Jogos
- Filtros por:
  - Plataforma (PC/Navegador)
  - Gênero do jogo
  - Requisitos de memória RAM
- Modal com resultados da busca
- Cards informativos com detalhes dos jogos

### Página de Detalhes do Jogo
- Informações detalhadas sobre o jogo
- Galeria de screenshots
- Requisitos mínimos do sistema
- Link direto para jogar
- Sistema de navegação por breadcrumbs

### Interface
- Menu responsivo com versão mobile
- Design moderno com elementos visuais atrativos
- Animações suaves de transição


## ⚙️ Especificações Técnicas

### Infraestrutura
- Integração contínua com GitHub e Vercel

### Arquitetura
- Estrutura de pastas organizada por features
- Componentização modular para fácil manutenção
- Tipagem forte com TypeScript
- Padrões consistentes de código com ESLint

### Performance
- Cache inteligente de dados da API
- Otimização de imagens com Next.js Image
- Code splitting automático
- Carregamento sob demanda (lazy loading)

### Manutenabilidade
- Componentes reutilizáveis
- Separação clara de responsabilidades
- Nomenclatura consistente


## 🛠 Tecnologias Utilizadas

- Next.js 15.4
- React 19.1
- Material-UI
- Tailwind CSS
- Swiper.js para carrosséis
- Headless UI para componentes acessíveis