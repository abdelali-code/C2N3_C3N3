"use strict";
// import "../sass/_quiz.scss";
// import "../sass/normalize.scss";
import { addProgressIndi } from "./component/addProgress";
import { addStepper } from "./component/stepper";
import { addToparent, createElement } from "./helpers/createElement";
import { startBtn, addPreambule } from "./component/peambule";
import { addQuiz, addSiQs } from "./component/addQuiz";
import { addRecommandations } from "./component/addRecommand";
import { QUESTION } from "./helpers/question";
import { updateStepper } from "./component/updateStepper";
import { collectAnswer } from "./component/collectAnswer";
import { updateProgress } from "./component/updateProgress";
import { checkAnswer, isLess15 } from "./component/checkAnswer";
import { addMsgs } from "./component/displayMsg";

window.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let counter = 0;
  // to store the answer of the question;
  // Array(QUESTION.length).fill(null);
  let result = [
    null,
    null,
    "Non",
    "Non",
    "Non",
    "Non",
    "Non",
    "Non",
    "Non",
    "Non",
    "Bien",
    null,
    null,
    null,
    "Oui",
    "Non",
    "Non",
    "Non",
    "Non",
    "Non",
    "Non",
    "Non",
    "Non",
  ];
  // remove of all content from the root
  root.innerHTML = "";
  // create a stepper
  const stepper = addStepper();
  // create the start button
  const start = startBtn();
  // create preambule
  const preambule = addPreambule();
  // create the progress indicateur
  const addProgressIndice = addProgressIndi();
  // create the recommandations section
  const addRecm = addRecommandations();

  let addQs;
  // the finish btn
  const submitBtn = createElement("button", {
    class: [
      "btn",
      "small-btn",
      "btn-main",
      "question--btn",
      "add-green-backgr",
    ],
  });
  submitBtn.textContent = "Submit";

  // the restart btn
  const restartBtn = createElement("button", {
    class: ["btn", "small-btn", "btn-main", "reprendre"],
  });
  restartBtn.textContent = "Repredre Test";

  // add the content of inferface the test;
  addToparent(root, [stepper, preambule, start]);

  addQs = addQuiz();
  //

  /*********************** when user start the quiz **********************************/
  // when user start the quiz
  start.addEventListener("click", () => {
    // add the first question
    addSiQs(
      counter,
      QUESTION,
      addQs.para,
      addQs.form,
      addQs.warning_cont,
      result
    );
    // move stepper from informations to Questionnaire
    updateStepper(1, 2);
    // remove the preambule from test interface
    root.removeChild(preambule);
    // remove the start button
    root.removeChild(start);
    // add progress indicateur and question container and recommadations section to the test page
    addToparent(root, [addProgressIndice, addQs.parent, addRecm]);
    // check progress indicateur as one question is answered
    updateProgress(counter);
    //
  });
  /*********************** end of when user start the quiz **********************************/

  // *************************move to the next question ******************************/
  //   when we click on btn suiv incre counter by 1 to change to the next question
  addQs.nextBtn.addEventListener("click", () => {
    if (counter <= QUESTION.length - 1) {
      // collect the first user choice
      collectAnswer(result, counter);
    }
    // when we reach the question of the age
    if (counter === 11) {
      let isAccepted = isLess15(result, counter);
      if (isAccepted != null) {
        console.log("is not accepted");
      }
    }
    // end age
    // while counter not reach the end of the question do this
    if (counter < QUESTION.length - 1) {
      // move counter by one to indicate to the next question
      counter++;
      // display this question to the user
      addSiQs(
        counter,
        QUESTION,
        addQs.para,
        addQs.form,
        addQs.warning_cont,
        result
      );
      // and again update progress bar
      updateProgress(counter);
    }
    // insert submit btn when user reach the last question
    if (counter === QUESTION.length - 1) {
      // replace the next question btn by submit button
      addQs.btnCont.replaceChild(submitBtn, addQs.nextBtn);
    }
  });

  /*************************end of move to the next question ******************************/

  /*************************return the previous question ******************************/
  //   when we click on prev question btn decrement counter by 1 to change to prev question
  addQs.prevBtn.addEventListener("click", () => {
    if (counter > 0) {
      counter--;
      addSiQs(
        counter,
        QUESTION,
        addQs.para,
        addQs.form,
        addQs.warning_cont,
        result
      );
      updateProgress(counter);
    }
    // remove submit btn
    if (counter === QUESTION.length - 2) {
      addQs.btnCont.replaceChild(addQs.nextBtn, submitBtn);
    }
  });
  /*************************end of return to the previous question ******************************/

  /***************************when user click the submit btn;***********************/
  submitBtn.addEventListener("click", () => {
    let answer = checkAnswer(result);
    updateStepper(2, 3);
    root.removeChild(addProgressIndice);
    // display the result of the test to the user
    root.replaceChild(addMsgs(answer), addQs.parent);
    // add a button to restart the test
    root.insertBefore(restartBtn, addRecm);
  });
  /*************************** end when user click the submit btn;*********************/

  /**************** repredre the test ********************************************/
  restartBtn.addEventListener("click", () => {
    // reset counter and result to the initial value to allow user to retake test
    counter = 0;
    result = [
      null,
      null,
      "Non",
      "Non",
      "Non",
      "Non",
      "Non",
      "Non",
      "Non",
      "Non",
      "Bien",
      null,
      null,
      null,
      "Oui",
      "Non",
      "Non",
      "Non",
      "Non",
      "Non",
      "Non",
      "Non",
      "Non",
    ];
    // remove all the content from the root
    root.innerHTML = "";
    // add the contetn of the acceuil page of the test
    addToparent(root, [stepper, preambule, start]);
    // update the design of the stepper
    updateStepper(3, 1);

    // replace the submit button by the next question
    addQs.btnCont.replaceChild(addQs.nextBtn, submitBtn);
  });
  /****************end repredre the test********************************************/
});
