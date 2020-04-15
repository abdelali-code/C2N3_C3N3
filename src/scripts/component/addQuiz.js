import { createElement, addToparent } from "../helpers/createElement";
import { addInfoMedi } from "./addInfo";
import { updateProgress } from "./updateProgress";
import { collectAnswer } from "./collectAnswer";
import { checkAnswer } from "./checkAnswer";

function addQuiz(QUESTION, counter, result) {
  const parent = createElement("div", {}); //cont for question and additionnel info
  const container = createElement("div", { class: ["container", "quiz_elem"] });
  const btnCont = createElement("div", { class: ["container", "btnCont"] });
  const para = createElement("p", { class: ["question"] });
  const form = createElement("form", { class: ["form"] });

  // for display warning msg
  const warning_cont = createElement("div", {});

  const nextBtn = createElement("button", {
    class: ["btn", "small-btn", "btn-main", "question--btn"],
  });

  const prevBtn = createElement("button", {
    class: ["btn", "small-btn", "btn-main", "question--btn"],
  });

  addToparent(btnCont, [prevBtn, nextBtn]);

  // display first question
  addSiQs(counter, QUESTION, para, form, warning_cont);

  //   when we click on btn suiv incre counter by 1 to change to next question
  nextBtn.addEventListener("click", (e) => {
    if (counter < QUESTION.length - 1) {
      collectAnswer(result, counter);
      console.log("after2", result);
      counter++;
      addSiQs(counter, QUESTION, para, form, warning_cont);
      updateProgress(counter);
      // change the title of last btn of the question to submit
      if (counter === QUESTION.length - 1) {
        // nextBtn.innerText = "Submit";
        e.target.classList.add("add-green-backgr");
        e.target.innerText = "submit";
      }
    } else if (counter === QUESTION.length - 1) {
      collectAnswer(result, counter);
      console.log(result);
    }
    // check answer here;
  });

  //   when we click on btn prev decremen counter by 1 to change to prev question
  prevBtn.addEventListener("click", () => {
    if (counter > 0) {
      counter--;
      addSiQs(counter, QUESTION, para, form, warning_cont);
      updateProgress(counter);
    }
    if (nextBtn.innerText === "Submit" && QUESTION.length - 2) {
      nextBtn.innerText = "Question suivant";
      nextBtn.classList.remove("add-green-backgr");
    }
  });

  // add btn the next and prev question;
  nextBtn.innerText = "Question suivant";
  prevBtn.innerText = "Question président";

  addToparent(container, [para, form]);
  addToparent(parent, [container, btnCont, warning_cont]);
  return parent;
}

// for dispaly single quiz
function addSiQs(counter, QUESTION, para, form, warning_cont) {
  // display question
  para.innerText = QUESTION[counter].question;

  // to append warning msg to warning container
  if (QUESTION[counter].addInfo) {
    warning_cont.appendChild(addInfoMedi(QUESTION[counter].addInfo));
  } else {
    warning_cont.innerHTML = "";
  }

  // display option for user to chose if exist choices;
  if (QUESTION[counter].choices.length > 0) {
    // for add style for radio btn
    if (QUESTION[counter].choices.length === 4) {
      form.classList.add("flex-radio");
    } else if (form.classList.contains("flex-radio")) {
      form.classList.remove("flex-radio");
    }
    form.innerHTML = "";
    for (let i = 0; i < QUESTION[counter].choices.length; i++) {
      let form_control = createElement("div", { class: ["form-checkbox"] });
      let step = createElement("input", {
        type: "radio",
        name: `question${counter}`,
        id: `question${i}`,
        value: QUESTION[counter].choices[i],
      });
      let label = createElement("label", { for: `question${counter}` });
      label.innerText = QUESTION[counter].choices[i];
      addToparent(form_control, [label, step]);
      addToparent(form, [form_control]);
    }
  }
  // if question does not contain any choices like input text and number;
  else {
    form.innerHTML = "";
    let form_control = createElement("div", { class: ["form-control"] });
    let step = createElement("input", {
      type: "number",
      name: `question${counter}`,
      id: `question${counter}`,
    });
    let label = createElement("label", { for: `question${counter}` });
    label.innerText = QUESTION[counter].label;
    addToparent(form_control, [step, label]);
    addToparent(form, [form_control]);
  }
}

export { addQuiz };
