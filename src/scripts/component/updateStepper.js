export function updateStepper(fr, to) {
  const spans = document.querySelectorAll("#progress-bar span");
  const is = document.querySelectorAll("#progress-bar i.circle");
  spans[fr - 1].classList.remove("add_main_color");
  is[fr - 1].classList.remove("add_warning_color");
  spans[to - 1].classList.add("add_main_color");
  is[to - 1].classList.add("add_warning_color");
}
