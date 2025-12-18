function converterDuracao () {
    //Criar referência ao elementos da página.
    let inTitulo = document.getElementById("inTitulo");
    let inDuracao = document.getElementById("inDuracao");
    let outTitulo = document.getElementById("outTitulo");
    let outDuracao = document.getElementById("outDuracao");

    //Obtém conteúdos dos campos de entrada.
    let titulo = inTitulo.value;
    let duracao = Number(inDuracao.value);

    //Arredonda para baixo o resultado da divisão.
    let horas = Math.floor(duracao / 60);

    //Obtém  o resto da divisão entre os números.
    let minutos =duracao % 60;

    //Altera o conteúdo dos parágrafos de resposta.
    outTitulo.textContent = titulo;
    outResposta.textContent = `${horas} hora(s) e ${minutos} minuto(s)`;
}

//Cria uma referência ao elemento btConverter (botão).
const btConverter = document.getElementById("btConverter");

//Registra um evento associado ao botão, para carregar uma função.
btConverter.addEventListener("click", converterDuracao);
