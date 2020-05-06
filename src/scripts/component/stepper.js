import { createElement } from "../helpers/createElement";

function addStepper() {
  const container = createElement("div", {
    class: ["container"],
    id: "stepper",
  });
  const container2 = createElement("div", {
    class: ["progress-bar"],
    id: "progress-bar"
  });
  const sp1 = createElement("span", {
    class: ["big-circle", "add_main_color"],
    id: "sp1"
  });
  const i1 = createElement("i", {
    class: ["circle", "add_warning_color"],
    id: "c1"
  });
  sp1.appendChild(i1);

  // second step
  const line = createElement("div", {
    class: ["line"]
  })
  const sp2 = createElement("span", {
    class: ["big-circle", "second-circle-container"],
    id: "sp2"
  });
  const i2 = createElement("i", {
    class: ["circle", "second-circle"],
    id: "c2"
  });
  sp2.appendChild(i2);
  line.appendChild(sp2);
  // third circle
  const sp3 = createElement("span", {
    class: ["big-circle"],
    id: "sp3"
  });
  const i3 = createElement("i", {
    class: ["circle"],
    id: "c3"
  });
  sp3.appendChild(i3);
  addToparent(container2, [sp1, line, sp3]);
  container.appendChild(container2);
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
//
// 
// 
// 
// 
// 
// 
// 

// function stepper(node1, node2, node3, root) {
//   let counter = 1;

//   // add stepper indicateur
//   const step = addStepper();
//   // update content of the root
//   const next = document.createElement("button");
//   next.textContent = "next";

//   root.appendChild(step);
//   root.appendChild(node1);
//   root.appendChild(next);

//   next.addEventListener("click", () => {
//     counter++;
//     switch (counter) {
//       case 2:
//         root.replaceChild(node2, node1);
//         updateStepper(1, 2);
//         break;
//       case 3:
//         root.replaceChild(node3, node2);
//         updateStepper(2, 3);
//         counter = 0;
//         break;
//       case 1:
//         root.replaceChild(node1, node3);
//         updateStepper(3, 1);
//         break;
//     }
//   })
// }

// export { stepper };
