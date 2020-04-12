import { createElement } from "../helpers/createElement";

function addInfoMedi(info) {
  const container = createElement("div", { class: ["hero"] });

  container.innerHTML = `
    <div class="hero__warning container">
        <p class="hero__descri">
        ${info} 
        </p>
    </div>
  `;
  return container;
}

export { addInfoMedi };
