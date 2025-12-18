Para criar um site de locadora de vídeos usando HTML, CSS e JavaScript puro, consumindo uma API do IMDb (ou alternativa gratuita), estude conceitos básicos de estrutura web, estilização responsiva e manipulação dinâmica de dados via fetch(). Como você está no nível iniciante-intermediário com prática em JS e projetos como calculadora, foque em buscas de filmes, listagem com pôsteres e simulação de aluguel com localStorage.​

Tópicos Essenciais HTML
Crie estrutura semântica com <header> para busca, <main> para grid de filmes e <section> para carrinho de aluguel.

Campo <input> para busca por título e botão submit.

Container <div class="movies-grid"> para cards dinâmicos.

Modal ou seção para detalhes do filme (título, ano, pôster, sinopse).
Use Flexbox/Grid no CSS para layout responsivo em mobile.​

Conceitos JavaScript Prioritários
Domine fetch() para chamadas assíncronas à API, async/await para aguardar respostas e manipulação do DOM com querySelector e innerHTML.

Event listeners em formulário de busca: addEventListener('submit', buscarFilmes).

Processar JSON da API: extrair title, year, poster, plot e renderizar cards.

localStorage para "aluguéis": salvar array de IDs selecionados e exibir carrinho.​
Exemplo básico de fetch: fetch('https://api.themoviedb.org/3/search/movie?api_key=SUA_CHAVE&query=termo') (TMDB é grátis e alternativa ao IMDb oficial, que exige aprovação).​

Estilização CSS Recomendada
Use SCSS (sua preferência) com variáveis para cores/temas de locadora (azul escuro, cards com sombra).

Grid responsivo: .movies-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }.

Cards hover: transition: transform 0.3s; :hover { transform: scale(1.05); }.

Botão "Alugar": verde com ícone, desabilitado se já alugado.​

APIs Gratuitas para Filmes
IMDb oficial requer acesso pago/aprovação; use TMDB (gratuito, chave em themoviedb.org) ou OMDB (omdbapi.com, 1000 req/dia grátis).

API	Endpoint Busca	Chave Necessária	Limite Diário
TMDB	/search/movie	Sim (grátis)	40 req/10s ​
OMDB	?t=nomefilme	Não (1000/dia)	Ilimitado básico ​
IMDb-API.dev	/title/{id}	Não	Não especificado ​
Próximos Passos Práticos
Cadastre-se no TMDB, pegue API key e teste fetch no console.

Construa protótipo: input busca → lista 10 filmes com pôster → clique aluga/salva localStorage.

Adicione filtro por "alugados" e Git para versionar (seu foco).
Teste em VSCode com Live Server; evolua para React depois.​