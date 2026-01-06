function calcularNotas() {
    //Criar referência aos elementos da página.
    let inSaque = document.getElementById("inSaque");
    let outNotasCem = document.getElementById("outNotasCem");
    let outNotasCinquenta = document.getElementById("outNotasCinquenta");
    let outNotasDez = document.getElementById("outNotasDez");

    //Limpa mensagens (caso, segunda execução).
    outNotasCem.textContent = " ";
    outNotasCinquenta.textContent = " ";
    outNotasDez.textContent = " ";

    let saque = Number(inSaque.value); // converte o contéudo do campo inSaque.

    /*Validações: 
    
    O código verifica duas condições:
    
    Se o valor foi preenchido corretamente (não é zero ou inválido)
    Se o valor é múltiplo de 10 (já que só existem notas de 10, 50 e 100)*/

    // Se não preencheu ou NAN (Not a number).
    if (saque == 0 || isNaN(saque)) {
        alert("Informe o valor do saque corretamente");
        inSaque.focus(); // posiciona em inSaque.
        return;
    }

    // Verifica se o saque não é múltiplo de 10.
    if (saque % 10 != 0) {
        alert("valor inválido para notas disponíveis (R$ 10, 50, 100)");
        inSaque.focus();
        return;
    }

    //Calcula notas de 100, 50 e 10.
    let notasCem = Math.floor(saque / 100);
    let resto = saque % 100;
    let notasCinquenta = Math.floor(resto / 50);
    resto = resto % 50;
    let notasDez = Math.floor(resto / 10);

    /*Usa divisão inteira (Math.floor) para calcular quantas notas cabem e o operador módulo (%) para calcular o resto, seguindo uma lógica gulosa (greedy) que prioriza notas maiores.
Exemplo: Para R$ 380:

380 ÷ 100 = 3 notas de R$ 100 (resto: 80)
80 ÷ 50 = 1 nota de R$ 50 (resto: 30)
30 ÷ 10 = 3 notas de R$ 10*/

    //Exibe as notas apenas se houver.
    if (notasCem > 0) {
        outNotasCem.textContent = "Notas de R$ 100: " + notasCem;
    }
    if (notasCinquenta > 0) {
        outNotasCinquenta.textContent = "Notas de R$ 50: " + notasCinquenta;
    }
    if (notasDez > 0) {
        outNotasDez.textContent = "Notas de R$ 10: " + notasDez;
    }

}
//Cria referência ao elemento btExibir e associa function ao evento click.
const btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularNotas);

/*Ordem de Construção Recomendada
Para construir este código de forma lógica, a ordem ideal seria:
1. Estrutura HTML (não mostrada, mas necessária)
Criar os elementos da interface:

Campo de entrada para o valor do saque
Botão para executar o cálculo
Áreas para exibir os resultados

2. Captura de elementos
Obter referências aos elementos HTML que serão manipulados
3. Validação de entrada
Garantir que o usuário inseriu dados válidos antes de processar
4. Lógica de cálculo
Implementar o algoritmo que distribui o valor em notas
5. Exibição de resultados
Mostrar as notas calculadas na interface
6. Event listener
Conectar a função ao botão para que seja executada quando o usuário clicar

Pontos de atenção:

Algoritmo guloso: O código sempre prioriza notas maiores, o que funciona bem para este caso específico (10, 50, 100)
Limpeza de mensagens: O código limpa os resultados anteriores antes de calcular novamente, evitando confusão
Feedback ao usuário: Usa alert() para informar erros e focus() para posicionar o cursor no campo correto

Este é um exemplo clássico de programação procedural aplicada a validação de formulários e cálculos matemáticos simples!*/
