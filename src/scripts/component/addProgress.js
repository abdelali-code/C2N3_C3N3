import { createElement, addToparent } from "../helpers/createElement";

function addProgressIndi() {
  const container = createElement("div", {
    class: ["container"],
    id: "progre",
  });
  const show_progress = createElement("div", { class: ["show-progress"] });
  const progress_indicateur = createElement("div", {
    class: ["progress-indicateur"],
    id: "currentIndice",
  });
  // progress_indicateur.style.width = 4.55 + "%";
  const sp = createElement("span", { id: "indice" });
  sp.textContent = "1";
  const sp2 = createElement("span", {});
  sp2.textContent = "/23";

  addToparent(show_progress, [progress_indicateur]);
  addToparent(container, [show_progress, sp, sp2]);
  return container;
}

export { addProgressIndi };
