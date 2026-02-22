//  LISTA GLOBAL DE EXERCÍCIOS

window.exercicios = [];


// REGISTRAR EXERCÍCIO

window.registrarExercicio = function (exercicio) {
  window.exercicios.push(exercicio);

  console.log("Registrado:", exercicio.title);

  renderizarExercicios();
};

//  RENDERIZAÇÃO DOS CARDS

function renderizarExercicios() {
  const container = document.getElementById("lista-exercicios");

  // limpa a tela para evitar duplicação
  container.innerHTML = "";

  window.exercicios.forEach((exercicio) => {
    const card = document.createElement("div");
    card.classList.add("card-exercicio");

    card.innerHTML = `
      <div class= "titulo-card">
      <h3>${exercicio.id} ${exercicio.title}</h3>
      <span class="tag">${exercicio.category}</span>
      </div>
      <p>${exercicio.description}</p>
    `;

    // ÁREA DE INPUTS
  
    const areaInputs = document.createElement("div");
    areaInputs.classList.add("area-inputs");
    (exercicio.inputs || []).forEach((inp) => {
      const input = document.createElement("input");
      input.placeholder = inp.label;
      input.type = inp.type || "text";

      areaInputs.appendChild(input);
    });

    card.appendChild(areaInputs);

    
    // BOTÃO EXECUTAR
    
    const btnExecutar = document.createElement("button");
    btnExecutar.textContent = "Executar";

    const resultadoBox = document.createElement("p");

    btnExecutar.addEventListener("click", () => {
      const valores = [];

      areaInputs.querySelectorAll("input").forEach((i) => {
        valores.push(i.value);
      });

      const resultado = exercicio.executar(...valores);

      resultadoBox.textContent = "Resultado: " + resultado;
    });

    card.appendChild(btnExecutar);
    card.appendChild(resultadoBox);

    container.appendChild(card);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  renderizarExercicios();
});

console.log("Lista de exercícios:", window.exercicios);

