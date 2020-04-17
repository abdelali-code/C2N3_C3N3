import { createElement, addToparent } from "../helpers/createElement";
import { addInfoMedi } from "./addInfo";

function addQuiz() {
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

  // add btn the next and prev question;
  nextBtn.innerText = "Question suivant";
  prevBtn.innerText = "Question président";
  //
  //
  addToparent(btnCont, [prevBtn, nextBtn]);
  addToparent(container, [para, form, warning_cont]);
  addToparent(parent, [container, btnCont]);
  return { parent, btnCont, prevBtn, nextBtn, para, form, warning_cont };
}

// for dispaly single quiz
export function addSiQs(counter, QUESTION, para, form, warning_cont, result) {
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
      if (QUESTION[counter].choices[i] === result[counter]) {
        step.setAttribute("checked", true);
      }
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
      value: result[counter] === -1 ? "" : result[counter],
    });
    let label = createElement("label", { for: `question${counter}` });
    label.innerText = QUESTION[counter].label;
    addToparent(form_control, [step, label]);
    addToparent(form, [form_control]);
  }
}

export { addQuiz };
