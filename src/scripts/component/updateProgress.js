function updateProgress(num) {
  const initial_width = 100 / 23;
  const progressInd = document.getElementById("currentIndice");
  const indice = document.getElementById("indice");

  progressInd.style.width = (num + 1) * initial_width + "%";
  indice.innerText = num + 1;
}

export { updateProgress };
