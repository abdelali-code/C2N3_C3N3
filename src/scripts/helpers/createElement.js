function createElement(element, properties) {
  // properties is an object if no attribute pass empty {}
  // if properties contains class attributes it must be as an array
  // ex : class: [class1, class2, class3];
  const tag = document.createElement(element);

  if (Object.keys(properties).length !== 0) {
    for (let property in properties) {
      if (property === "class") {
        for (let cls of properties[property]) {
          tag.classList.add(cls);
        }
      } else {
        tag.setAttribute(property, properties[property]);
      }
    }
  }
  return tag;
}

function addToparent(parent, childs) {
  // parent is DOM node to insert into
  // childs : an array of the childs to insert them into parent

  for (let child of childs) {
    parent.appendChild(child);
  }
}

export { createElement, addToparent };
