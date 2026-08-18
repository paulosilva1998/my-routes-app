## Projeto 2: Gerenciador de Clientes - Rotas Dinâmicas (`my-routes-app`)

# Comandos de Configuração, Dependências e Correções de Estilo:
# 1. Criar o projeto
# npx create-vite@5 my-routes-app --template react
# 2. Entrar na pasta
# cd my-routes-app
# 3. Instalar dependências do projeto e o React Router
# npm install
# npm install react-router-dom
# 4. (IMPORTANTE) Para evitar texto invisível na tela:
# Limpe o conteúdo do arquivo src/index.css
# 5. Rodar a aplicação
# npm run dev

# -------------------------------------------------------------------
# ARQUIVO: README.md
# -------------------------------------------------------------------

# 👥 Gerenciador de Clientes - Rotas Dinâmicas

Aplicação desenvolvida em React para demonstrar a navegação SPA (Single Page Application) e o carregamento de dados com rotas dinâmicas utilizando a biblioteca **React Router**.

## 📚 Conceitos Praticados

- **React Router (`createBrowserRouter` & `RouterProvider`)**: Configuração de rotas de navegação no cliente.
- **Rotas Dinâmicas (`:customerId`)**: Captura de parâmetros dinâmicos na URL.
- **Data Loaders (`useLoaderData`)**: Carregamento assíncrono/prévio de dados antes da renderização do componente.
- **Componentes de Layout (`Outlet` & `Link`)**: Renderização de rotas filhas sem recarregar a página.

## 🛠️ Tecnologias e Dependências

- **React** (`react`, `react-dom`)
- **React Router DOM** (`react-router-dom` - gerenciamento de rotas)
- **Vite** (Build tool e servidor de desenvolvimento)
- **CSS3** (Estilização modular por página)

## 🔧 Como Executar

```bash
# Entrar no diretório do projeto
cd my-routes-app

# Instalar dependências principais e de rotas
npm install
npm install react-router-dom

# Iniciar aplicação
npm run dev
