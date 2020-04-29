import { createElement } from "../helpers/createElement";

function addStepper() {
  const container = createElement("div", {
    class: ["container"],
    id: "stepper",
  });
  container.innerHTML = `
            <div class="progress-bar" id="progress-bar">
              <span class="big-circle add_main_color" id="sp1"><i class="circle add_warning_color" id="c1"></i></span>
              <div class="line"><span class="big-circle second-circle-container" id="sp2"><i class="circle second-circle" id="c2"></i></span></div>
              <span class="big-circle" id="sp3"><i class="circle" id="c3"></i></span>
            </div>
            <div class="progress-bar-description">
              <p class="progress-bar-description--first" data-key="information">Informations</p>
              <p class="progress-bar-description--second" data-key = "questionnaire">Questionnaire</p>
              <p class="progress-bar-description--third" data-key="result">Résultats</p>
            </div>                     
    `;
  return container;
}

export { addStepper };
