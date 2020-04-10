function updateProgress(n) {
  let initialWidth = 4.55;
  const indice = document.getElementById("indice");
  const currentIndice = document.getElementById("currentIndice");
  currentIndice.style.width = n * initialWidth + "%";
  let addVal = Number(indice.textContent);
  indice.textContent = "10";
}

export { updateProgress };
