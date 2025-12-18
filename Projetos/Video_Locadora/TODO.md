Requisitos funcionais mínimos definem o escopo essencial para um protótipo funcional da locadora de vídeos, priorizando autenticação, busca via API, validação etária brasileira e simulação de aluguéis com localStorage.

RF01: Autenticação e Cadastro de Usuário
Tela inicial com formulário de login/cadastro: campos email (validação @), senha (mín. 6 caracteres), idade (número 0-100, obrigatório).

Botões "Entrar" e "Cadastrar": simule autenticação salvando {email, senhaHash, idade} em localStorage como userData.

Após login, exiba nome/email no header e desbloqueie funcionalidades; sem login, redirecione para tela de autenticação.

Logout: limpa localStorage e volta para login.​

RF02: Busca e Listagem de Filmes
Barra de busca no header: <input type="text" placeholder="Buscar filme..."> + botão ícone lupa.

On submit: async buscarFilmes(termo) faz fetch TMDB (/search/movie?api_key=CHAVE&query=${termo}&page=1) ou OMDB (?s=${termo}&apikey=CHAVE), limita 10 resultados.

Renderiza grid responsivo com cards: pôster (img src="https://image.tmdb.org/t/p/w200${poster_path}"), título, ano (release_date.slice(0,4)), rating inicial (PG/R/NC-17).

Fallback: array JSON local com 20 filmes se API falhar ou sem internet.​

RF03: Visualização de Detalhes do Filme
Clique em card abre modal centralizado: título grande, pôster w500, sinopse (overview), ano, rating MPAA mapeado para Brasil (PG→Livre, PG-13→12, R→16, NC-17→18).

Fetch adicional para detalhes se necessário (/movie/{id}?api_key=CHAVE no TMDB).

Indicador visual: "🔒 Indisponível para sua idade" se user.idade < limite do rating (ex: <16 bloqueia R).​

RF04: Simulação de Aluguel e Carrinho
Botão "Alugar" (verde, com ícone carrinho) nos cards/modais: só habilitado se idade compatível e filme não alugado.

On click: adiciona {id, title, poster, rentedDate} ao array carrinho em localStorage; atualiza UI (botão vira "Alugado ✓", filtra grid).

Seção "Meus Aluguéis": lista cards alugados com botão "Devolver" (remove do array, libera no grid).

Persistência: recarrega carrinho do localStorage no load da página.

RF05: Filtros e Estados da Aplicação
Dropdown filtro no grid: "Todos" (default), "Alugados" (apenas carrinho), "Disponíveis" (não alugados).

Estados globais via objetos JS: let filmes = []; let carrinho = JSON.parse(localStorage.getItem('carrinho')) || []; let usuario = {...};.

Responsividade: mobile-first com CSS Grid (repeat(auto-fit, minmax(250px, 1fr))), modal fecha com ESC ou clique fora.

Validações: loader spinner durante fetch, mensagens de erro ("Filme não encontrado", "API indisponível").