"use strict";

// import "../sass/_quiz.scss";
// import "../sass/normalize.scss";

import { addProgressIndi } from "./component/addProgress";
import { updateProgress } from "./component/updateProgress";
import { addStepper } from "./component/stepper";
import { addToparent } from "./helpers/createElement";
import { startBtn, addPreambule } from "./component/peambule";
// import { addInfoMedi } from "./component/addInfo";
import { addQuiz } from "./component/addQuiz";
import { addRecommandations } from "./component/addRecommand";
import { QUESTION } from "./helpers/question";
import { updateStepper } from "./component/updateStepper";

const root = document.getElementById("root");
let counter = 0;

window.addEventListener("load", () => {
  root.innerHTML = "";
  const stepper = addStepper();
  const start = startBtn();
  const preambule = addPreambule();
  // const addProgressi = addProgressIndi()

  addToparent(root, [stepper, preambule, start]);

  // when user start the quiz
  start.addEventListener("click", () => {
    updateStepper(1, 2);
    root.removeChild(preambule);
    root.removeChild(start);
    addToparent(root, [
      addProgressIndi(),
      addQuiz(QUESTION, counter),
      addRecommandations(),
    ]);
  });
});
