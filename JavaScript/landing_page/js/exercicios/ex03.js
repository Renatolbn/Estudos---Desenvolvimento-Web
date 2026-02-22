function executarEx03(nota1, nota2) {
  nota1 = parseFloat(nota1);
  nota2 = parseFloat(nota2);
  
  if (isNaN(nota1) || nota1 < 0 || isNaN(nota2) || nota2 < 0) {
    return "Valor inválido!";
  }
  
  const media = (nota1 + nota2) / 2;
  
  if (media === 10) {
    return `${media} Aprovado com mérito!`;
  } else if (media >= 7) {
    return `${media} Aprovado`;
  } else {
    return `${media} Reprovado!`;
  }
}

registrarExercicio({
  id: "03",
  title: "Média das Notas",
  category: "Condicional",
  description: "Calcular média de duas notas e verificar situação do aluno",
  inputs: [
    { label: "Primeira nota", type: "number" },
    { label: "Segunda nota", type: "number" }
  ],
  executar: executarEx03
});
