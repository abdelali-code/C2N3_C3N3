export const collectAnswer = (arr, counter) => {
  const inps = document.querySelectorAll("form input");

  // if there is a single input in the form
  if (inps.length === 1) {
    // check if user enter a number
    if (!isNaN(parseFloat(inps[0].value))) {
      arr[counter] = Number(inps[0].value);
    } else {
      arr[counter] = -1;
    }
  }
  // there is multipe input in the form;
  else {
    for (let inp of inps) {
      if (inp.checked) {
        arr[counter] = inp.value;
      }
    }
  }
};
