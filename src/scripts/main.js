"use strict";

import {
  removePreambule,
  updateStepperStyle,
} from "./component/removeInitailElem";

// import "../sass/_quiz.scss";
// import "../sass/normalize.scss";

import { addProgressIndi } from "./component/addProgress";
import { updateProgress } from "./component/updateProgress";
import { addStepper } from "./component/stepper";
import { addToparent } from "./helpers/createElement";
import { startBtn, addPreambule } from "./component/peambule";

const main = document.getElementById("root");

window.addEventListener("load", () => {
  main.innerHTML = "";
  const stepper = addStepper();
  const start = startBtn();
  const preambule = addPreambule();
  addToparent(main, [stepper, preambule, start]);
});
