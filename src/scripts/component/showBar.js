import { createElement, addToparent } from "../helpers/createElement";

function stepper() {
  const container = createElement("div", { class: ["container"] });
  const progress = createElement("div", { class: ["progress-bar"] });

  const sp1 = createElement("span", {
    class: ["big-circle", "add_main_color"],
  });
  const i1 = createElement("i", { class: ["circle", "add_warning_color"] });

  addToparent(sp1, [i1]);

  const line = createElement("div", { class: ["line"] });
  const sp2 = createElement("span", {
    class: ["big-circle", "second-circle-container"],
  });
  const i2 = createElement("i", { class: ["circle", "second-circle"] });
  addToparent(sp2, [i2]);
  addToparent(line, [sp2]);

  const sp3 = createElement("span", { class: ["big-circle"] });
  const i3 = createElement("i", { class: ["circle"] });

  addToparent(sp3, [i3]);

  addToparent(progress, [sp1, line, sp3]);
  addToparent(container, [progress]);
  return container;
}

export { stepper };
