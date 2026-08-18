# 👥 Gerenciador de Clientes - Rotas Dinâmicas

Aplicação desenvolvida em **React** para demonstrar a navegação SPA (*Single Page Application*), manipulação de rotas dinâmicas e carregamento assíncrono de dados com a biblioteca **React Router**.

---

## 📚 Conceitos Praticados

* **Roteamento Declarativo:** Configuração de rotas estruturadas utilizando `createBrowserRouter` e `RouterProvider`.
* **Rotas Dinâmicas (`:customerId`):** Captura e extração de parâmetros diretamente da URL para renderizar informações contextuais de cada cliente.
* **Data Loaders (`useLoaderData`):** Carregamento e injeção assíncrona de dados pré-renderização em cada rota.
* **Navegação SPA:** Uso de `<Link>` para transição instantânea entre views sem recarregar a página.
* **Layouts Aninhados (`<Outlet />`):** Renderização dinâmica de componentes-filho mantendo a estrutura da tela principal.

---

## 🛠️ Tecnologias e Dependências

* [React](https://react.dev/) — Biblioteca para construção da interface de usuário.
* [React Router DOM](https://reactrouter.com/) — Gerenciamento de rotas e navegação client-side.
* [Vite](https://vitejs.dev/) — Ferramenta de build e servidor de desenvolvimento ágil.
* **CSS3** — Estilização modularizada e responsiva por página.

---

## 🔧 Como Executar

```bash
# Clone o repositório
git clone [https://github.com/paulosilva1998/my-routes-app.git](https://github.com/paulosilva1998/my-routes-app.git)

# Acesse o diretório do projeto
cd my-routes-app

# Instale as dependências (incluindo o react-router-dom)
npm install

# Inicie o servidor em modo de desenvolvimento
npm run dev+
