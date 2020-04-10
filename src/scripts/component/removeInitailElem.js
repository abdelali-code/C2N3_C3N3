function removePreambule() {
  // accept one node
  // return that node after removing it from dom
  const preambule = document.getElementById("preambule");
  preambule.remove();
  return preambule;
}

export const updateStepperStyle = (last, current, c) => {
  last.classList.remove("add_main_color");
  current.classList.add("add_main_color");
  c.classList.add("add_warning_color");
};

export { removePreambule };
