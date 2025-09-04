# MoviesLib - Aplicação de Filmes em React

Este projeto é uma aplicação em React que consome a API do **The Movie Database (TMDb)** para exibir informações de filmes. Permite buscar filmes, visualizar detalhes, explorar os melhores avaliados e navegar por uma interface intuitiva.

Ideal para estudo de React, roteamento com **React Router**, consumo de APIs, gerenciamento de estado com **useState/useEffect** e estilização com CSS puro.

---

## Funcionalidades

-   Exibir os melhores filmes (Top Rated)
-   Buscar filmes por nome
-   Visualizar detalhes do filme (diretor, elenco, avaliação, duração, descrição)
-   Lista de favoritos
-   Navegação entre páginas usando React Router
-   Componentização com **MovieCard** e **Navbar**
-   Estilização moderna com CSS e ícones do **React Icons**

---

## Estrutura do Projeto

```bash
movies_lib/
│
├─ src/
│ ├─ components/
│ │ ├─ MovieCard.jsx
│ │ ├─ Navbar.jsx
│ │ └─ Navbar.css
│ │
│ ├─ pages/
│ │ ├─ Home.jsx
│ │ ├─ Movie.jsx
│ │ ├─ Search.jsx
│ │ ├─ Movie.css
│ │ └─ MoviesGrid.css
│ │
│ ├─ App.jsx
│ ├─ App.css
│ ├─ main.jsx
│ └─ index.css
│
└─ .env
```

---

## Requisitos

-   Node.js instalado  
    [Baixar Node.js](https://nodejs.org/)
-   Conta e chave de API no TMDb (já configurada no arquivo `.env`)

---

## Configuração do `.env`

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
VITE_API_KEY=SEU_API_KEY_AQUI
VITE_API=https://api.themoviedb.org/3/movie/
VITE_SEARCH=https://api.themoviedb.org/3/search/movie
VITE_IMG=https://image.tmdb.org/t/p/w500/
```

### Instruções:

Obtenha sua chave de API do TMDb em: [Configurações da API](https://www.themoviedb.org/settings/api)

Cole a chave no campo VITE_API_KEY subistituindo SEU_API_KEY_AQUI.

## Como executar

1. Clone o repositório

    ```bash
    git clone https://github.com/EliezerMigu3l00/MaisPraTI-Atividade5.git
    ```
2. Entre no projeto
   ```bash
   cd .\MaisPraTI-Atividade5\
   ```
   ```bash
   cd movies_lib
   ```
4. Instale as dependências

    ```bash
    npm install
    ```

5. Inicie a aplicação

    ```bash
    npm run dev
    ```

4. Acesse a aplicação
   Abra o navegador e vá para http://localhost:5173 (porta padrão do Vite).

## Observações

-   A busca de filmes retorna resultados em tempo real conforme o termo pesquisado.

-   A página de detalhes do filme mostra informações detalhadas obtidas da API, incluindo elenco limitado aos 5 primeiros atores.

-   A estilização é totalmente responsiva e utiliza cores escuras com destaques em amarelo (#f7d354), seguindo padrão visual moderno.

-   Navegação entre páginas:

    -   / → Home (melhores filmes)

    -   /movie/:id → Detalhes do filme

    -   /search?q=nome_do_filme → Resultados da busca

## Exemplo de uso

-   Após iniciar a aplicação, a interface principal exibirá:

-   Barra de navegação superior com logo Movies Library +PraTI o campo de busca e a lista de favoritos.

-   Lista dos melhores filmes em cards com título, imagem, ano e link para detalhes.

-   Ao clicar em um filme, será exibida a página de detalhes completa.

-   Na pagina de detalhes voce poderar adicionar o filme a sua lista de favoritos.

-   Buscas são realizadas diretamente pela barra de pesquisa, redirecionando para a página de resultados.
