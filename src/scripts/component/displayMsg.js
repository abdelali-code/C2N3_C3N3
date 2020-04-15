import { createElement, addToparent } from "../helpers/createElement";

export const displaMsg = (msg) => {
  const container = createElement("div", { class: ["msg"] });
  container.innerHTML = `
        <p>${msg}</p>
    `;
  return container;
};

export const addMsgs = (msgs) => {
  const container = createElement("div", { class: ["container"] });

  for (let msg in msgs) {
    addToparent(container, [displaMsg(msg)]);
  }
  return container;
};
