export const collectAnswer = (arr, counter) => {
  const inps = document.querySelectorAll("form input");

  if (inps.length === 1) {
    arr[counter] = inps[0].value;
  } else {
    for (let inp of inps) {
      if (inp.checked) {
        arr[counter] = inp.value;
      }
    }
  }
};
