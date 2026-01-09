Requisitos funcionais mínimos definem o escopo essencial para um protótipo funcional da locadora de vídeos, priorizando autenticação, busca via API, validação etária brasileira e simulação de aluguéis com localStorage.

RF01: Autenticação e Cadastro de Usuário
Tela inicial com formulário de login/cadastro: campos email (validação @), senha (mín. 6 caracteres), idade (número 0-100, obrigatório).

Botões "Entrar" e "Cadastrar": simule autenticação salvando {email, senhaHash, idade} em localStorage como userData.

Após login, exiba nome/email no header e desbloqueie funcionalidades; sem login, redirecione para tela de autenticação.

Logout: limpa localStorage e volta para login.​

***Orientações e melhorias sugeridas***
Perfeito! Vou te orientar passo a passo:

## 1. Feedback Visual de Erros

**O que fazer:**
- Crie elementos `<span>` ou `<p>` no HTML abaixo de cada input para exibir mensagens de erro
- Dê um `id` ou `class` para cada mensagem (exemplo: `id="emailErro"`)
- No JavaScript, use `document.getElementById()` para pegar esses elementos
- Quando detectar erro, coloque o texto da mensagem usando `.textContent` ou `.innerHTML`
- Quando estiver válido, limpe a mensagem (string vazia)

## 2. Validação Completa de Email

**O que melhorar:**
- Sua validação atual só checa se tem "@", mas e-mails precisam de mais
- Use uma regex mais completa ou verifique: tem "@", tem texto antes do "@", tem domínio depois (exemplo: ".com")
- Ou use regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` (pesquise sobre cada parte para entender)

## 3. Mensagens de Erro Específicas

**O que fazer:**
- Para senha: crie mensagens diferentes para cada problema
  - "Senha muito curta (mínimo 6 caracteres)"
  - "Falta letra maiúscula"
  - "Falta número"
  - "Falta caractere especial"
- Use vários `if` ou `else if` para checar cada condição separadamente
- Para email: "Email inválido" ou "Formato de email incorreto"

## 4. Validação no Submit

**O que fazer:**
- Pegue o formulário com `document.querySelector("form")` ou pelo id
- Adicione um evento `addEventListener("submit", function(event) { ... })`
- Dentro da função, use `event.preventDefault()` para impedir o envio
- Chame suas funções de validação
- Se ambas retornarem `true`, aí sim deixe o formulário seguir (ou faça o login)

## 5. Indicadores Visuais nos Campos

**O que fazer:**
- No CSS, crie classes como `.erro` (borda vermelha) e `.sucesso` (borda verde)
- No JavaScript, use `classList.add()` e `classList.remove()` para adicionar/remover essas classes
- Quando o campo for inválido: `entrarEmail.classList.add("erro")`
- Quando for válido: `entrarEmail.classList.remove("erro")` e adicione "sucesso"

## 6. Estrutura Sugerida

**Fluxo de validação:**
1. Usuário digita e sai do campo (blur) → validação individual
2. Usuário clica em Login → validação de todos os campos
3. Se tudo válido → permite login
4. Se algo inválido → mostra erros e impede submit

**Dica:** Crie uma função `limparErros()` que remove todas as mensagens e classes de erro antes de validar novamente.

Por onde você quer começar? Tem alguma dúvida sobre algum desses pontos?

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