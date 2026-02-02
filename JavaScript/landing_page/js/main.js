function carregarExercicio(id) {
  const script = document.createElement('script');
  script.src = `js/exercicios/ex${id}.js`;
  document.head.appendChild(script);
}
