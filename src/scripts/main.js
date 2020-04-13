"use strict";

// import "../sass/_quiz.scss";
// import "../sass/normalize.scss";

import { addProgressIndi } from "./component/addProgress";
import { addStepper } from "./component/stepper";
import { addToparent } from "./helpers/createElement";
import { startBtn, addPreambule } from "./component/peambule";
import { addQuiz } from "./component/addQuiz";
import { addRecommandations } from "./component/addRecommand";
import { QUESTION } from "./helpers/question";
import { updateStepper } from "./component/updateStepper";

window.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let counter = 0;
  // to store the answer of the question;
  const result = Array(QUESTION.length).fill(null);
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
      addQuiz(QUESTION, counter, result),
      addRecommandations(),
    ]);
  });
});
