import { RESPONCE as responce } from "../helpers/reponce";

export const checkAnswer = (arr) => {
  // else if (counter === 22) {
  let facteur = countFac(arr);
  let fac_min = facteur.fac_gra_min;
  let fac_maj = facteur.fac_gra_maj;
  let fac_prono = facteur.fac_prono;
  // Patient avec fièvre, ou toux + mal de gorge, ou toux + courbatures ou fièvre + diarrhée
  if (
    (arr[2] === "Oui" && (arr[4] === "Oui" || arr[3] === "Oui")) ||
    arr[0] === "Oui" ||
    (arr[5] === "Oui" && arr[0] === "Oui")
  ) {
    // Tout patient sans facteur pronostique
    if (fac_prono === 0) {
      // <50 ans
      if (arr[11] < 50) {
        return { res1: responce.res1, res9: responce.res9 };
      }
      // Sans facteur de gravité & 50-69 ans,
      else if (
        (fac_maj + fac_maj === 0 && arr[11] >= 50 && arr[11] <= 69) ||
        fac_min >= 1
      ) {
        return {
          res2: responce.res2,
          res4: responce.res4,
          res9: responce.res9,
        };
      }
      // Tout patient avec ou sans facteur pronostique avec au moins un facteur de gravité majeur
      else {
        if (fac_maj > 0) {
          return { res3: responce.res3, res9: responce.res9 };
        }
      }
    }
    // Tout patient avec un facteur pronostique ou plus
    else if (fac_prono >= 1) {
      // Aucun facteur de gravité ou Un seul facteur de gravité mineur
      if (fac_maj + fac_maj === 0 || fac_min > 0) {
        return {
          res2: responce.res2,
          res4: responce.res4,
          res9: responce.res9,
        };
      }
      // Au moins deux facteurs de gravité mineurs
      else if (fac_min > 1) {
        return { res3: responce.res3, res9: responce.res9 };
      }
      // Tout patient avec ou sans facteur pronostique avec au moins un facteur de gravité majeur
      else {
        if (fac_maj > 0) {
          return { res3: responce.res3, res9: responce.res9 };
        }
      }
    }
    // end Tout patient sans facteur pronostique
  }
  // Tout patient avec fièvre et toux
  else if (arr[0] === "Oui" && arr[2] === "Oui") {
    // Tout patient sans facteur pronostique
    if (fac_prono === 0) {
      // Sans facteur de gravité ou au moins 1 facteur de gravité mineur sans facteur de gravité majeur
      if (fac_maj + fac_min === 0 || (fac_min >= 1 && fac_maj === 0))
        return { res2: responce.res2, res9: responce.res9 };
      // Tout patient avec ou sans facteur pronostique avec au moins un facteur de gravité majeur
      else if (fac_maj > 0) {
        return { res3: responce.res3, res9: responce.res9 };
      }
    }
    // Tout patient avec un facteur pronostique ou plus :
    else if (fac_prono >= 1) {
      // Aucun facteur de gravité :
      if (fac_maj + fac_min === 0 || fac_min === 1) return responce.res2;
      // Au moins deux facteurs de gravité mineurs
      else if (fac_min > 1) return { res3: responce.res3, res9: responce.res9 };
      // Tout patient avec ou sans facteur pronostique avec au moins un facteur de gravité majeur
      else if (fac_maj > 0) return { res3: responce.res3, res9: responce.res9 };
    }
  }
  // Tout patient avec un seul symptôme parmi fièvre, toux, mal de gorge, courbatures
  else if (
    arr[0] === "Oui" ||
    arr[2] === "Oui" ||
    arr[3] === "Oui" ||
    arr[4] === "Oui"
  ) {
    // Pas de facteur de gravité
    if (fac_maj + fac_min === 0)
      return { res5: responce.res5, res9: responce.res9 };
    // Au moins un facteur de gravité ou un facteur pronostique
    else if (fac_maj + fac_min > 0 || fac_prono > 0)
      return { res6: responce.res6, res9: responce.res9 };
  }
  // Tout patient avec aucun symptôme
  else {
    return { res7: responce.res7, res9: responce.res9 };
  }
};
// };

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
// check if user age is less than 15 or not
export function isLess15(arr, indice) {
  // STOP si < 15 ans
  if (arr[indice] < 15) {
    return { res8: responce.res8, res9: responce.res9 };
  } else {
    return null;
  }
}

//
//
//
// count the number of the facteurs
function countFac(arr) {
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
