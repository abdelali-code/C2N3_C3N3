import { createElement, addToParent } from "../helpers/createElement";

export function alertUser(msg) {
  const header = createElement("header", {});
  const div = createElement("div", { class: ["alert"], id: "alert" });
  const para = createElement("p", {});

  header.addEventListener("click", () => {
    div.remove();
  });

  para.textContent = `${msg}`;
  header.textContent = "X";
  addToParent(div, [header, para]);

  return div;
}
