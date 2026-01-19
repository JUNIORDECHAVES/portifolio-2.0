# Portfólio 2.0

Este projeto é um portfólio desenvolvido utilizando React, TypeScript e Vite. O objetivo é apresentar projetos e habilidades de forma interativa e responsiva.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Vite**: Ferramenta de construção que oferece um ambiente de desenvolvimento rápido e otimizado.
- **ESLint**: Ferramenta para identificar e corrigir problemas no código JavaScript.
- **MUI (Material-UI)**: Biblioteca de componentes React baseada no Material Design.
- **MUI Icons Material**: Ícones do Material Design para React.
- **Emotion**: Biblioteca CSS-in-JS para estilização de componentes React.
- **Emotion Styled**: Utilitário Emotion para criar componentes estilizados.

## Estrutura do Projeto

O projeto possui a seguinte estrutura:

```
src/
  ├── App.tsx
  ├── index.css
  ├── main.tsx
  ├── theme.ts
  ├── assets/
  │   └── images/
  ├── components/
  │   ├── animatedBackground/
  │   │   └── animation.tsx
  │   ├── animationComponent/
  │   │   └── animationComponent.tsx
  │   ├── Footer/
  │   │   └── footer.tsx
  │   ├── navBar/
  │   │   └── navBar.tsx
  │   ├── ProjectCard/
  │   │   └── projectCard.tsx
  │   ├── styleButton/
  │   │   └── styleButton.tsx
  │   ├── StyledButton/
  │   │   └── StyleButton.tsx
  │   └── TypeWriter/
  │       └── typeWriter.tsx
  └── pages/
      ├── Home/
      │   ├── home.tsx
      │   └── Sections/
      │       ├── About/
      │       │   └── about.tsx
      │       ├── Hero/
      │       │   └── hero.tsx
      │       └── Projects/
      │           └── Project.tsx
```

## Componentes

### animatedBackground
Componente responsável por exibir um fundo animado na aplicação.

### animationComponent
Componente genérico para animações utilizadas em diferentes partes do portfólio.

### Footer
Componente do rodapé da página com informações e links importantes.

### navBar
Barra de navegação principal da aplicação.

### ProjectCard
Componente para exibir os projetos em forma de cards com informações detalhadas.

### styleButton
Botão estilizado para ações secundárias.

### StyledButton
Botão estilizado para ações primárias.

### TypeWriter
Componente que simula o efeito de digitação de texto em tempo real.

## Como Executar o Projeto

### Pré-requisitos

Antes de começar, certifique-se de que você tem instalado:

- **Node.js** (versão 18 ou superior)
- **npm** (gerenciador de pacotes do Node.js)

Você pode verificar se já possui essas ferramentas instaladas executando os seguintes comandos no terminal:

```bash
node --version
npm --version
```

### Passos de Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/JUNIORDECHAVES/portifolio-2.0
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

   O servidor estará disponível em `http://localhost:5173` (ou outra porta informada no terminal).

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com hot reload
- `npm run build` - Compila o projeto para produção
- `npm run lint` - Executa o ESLint para verificar a qualidade do código
- `npm run preview` - Visualiza a versão de produção localmente

### Estrutura de Pastas

- `src/` - Código-fonte da aplicação
- `src/components/` - Componentes reutilizáveis
- `src/pages/` - Páginas da aplicação
- `src/assets/` - Imagens e outros ativos
- `public/` - Arquivos públicos estáticos

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a MIT License.
