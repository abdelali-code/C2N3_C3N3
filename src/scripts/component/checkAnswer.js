export const checkAnswer = (arr, counter) => {
  if (counter === 11 && arr[counter] < 15) {
    alert("your age not supported");
    return;
  } else if (counter !== 22) {
    alert("you not reach the level to check");
    return;
  }
  // for age less than 15 ans

  // begin excution after user enter all the question
  else if (counter === 22) {
    let facteur = countFac(arr, counter);
    alert(facteur.fac_gra_min);
    alert(facteur.fac_gra_maj);
    alert(facteur.fac_prono);
  }
};

//
//
//
//
//
//
//
//
//
//
//

// count the number of the facteurs
function countFac(arr, counter) {
  let fac_gra_min = 0;
  let fac_gra_maj = 0;
  let fac_prono = 0;
  let imc = arr[12] / ((arr[13] / 100) * 2);
  // exist from this function while counter does not reach the question number 10;

  if (arr[0] === "Oui") {
    if (arr[1] >= 39) {
      fac_gra_min++;
    } else if (arr[1] <= 35.4) {
      fac_gra_maj++;
    }
  }
  if (arr[6] === "Oui" && arr[7] === "Oui") {
    fac_gra_min++;
  }
  if (arr[8] === "Oui") {
    fac_gra_maj++;
  }
  if (arr[9] === "Oui") {
    fac_gra_maj++;
  }
  if (arr[10] === "Fatigué(e)" || arr[10] === "Très fatigué(e)") {
    fac_gra_min++;
  }
  // facteurs pronostique
  if (arr[11] >= 70) {
    fac_prono++;
  }
  if (imc < 18.5 || imc > 25) {
    fac_prono++;
  }
  for (let i = 14; i < arr.length; i++) {
    if (arr[i] === "Oui") {
      fac_prono++;
    }
  }
  return {
    fac_gra_min,
    fac_gra_maj,
    fac_prono,
  };
}
