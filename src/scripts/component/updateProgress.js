function updateProgress(num) {
  const progressInd = document.getElementById("currentIndice");
  const indice = document.getElementById("indice");

  progressInd.style.width = (num + 1) * 4.55 + "%";
  indice.innerText = num + 1;
}

export { updateProgress };
