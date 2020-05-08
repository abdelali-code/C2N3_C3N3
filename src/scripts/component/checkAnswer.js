// import { RESPONCE as responce } from "../helpers/reponce";

export const checkAnswer = (arr) => {
  const responce = {
    res1:
      "nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes.",
    res2: "téléconsultation ou médecin généraliste ou visite à domicile",
    res3: "appel 141",
    res4:
      "appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent.",
    res5:
      "Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute.",
    res6:
      "Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141.",
    res7:
      "Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation. Pour toute information concernant le Covid-19 allez vers la page d’accueil.",
    res9:
      "Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.",
  };
  // else if (counter === 22) {
  let facteur = countFac(arr);
  let fac_min = facteur.fac_gra_min;
  let fac_maj = facteur.fac_gra_maj;
  let fac_prono = facteur.fac_prono;
  // Patient avec fièvre, ou toux + mal de gorge, ou toux + courbatures ou fièvre + diarrhée
  if (
    arr[1] === "Oui" ||
    (arr[3] === "Oui" && (arr[5] === "Oui" || arr[4] === "Oui"))
  ) {
    // Tout patient sans facteur pronostique
    if (fac_prono === 0) {
      // <50 ans
      if (arr[0] < 50) {
        return { res1: responce.res1, res9: responce.res9 };
      }
      // Sans facteur de gravité & 50-69 ans,
      if (
        (fac_maj + fac_maj === 0 && arr[1] >= 50 && arr[1] <= 69) ||
        fac_min > 0
      ) {
        return {
          res2: responce.res2,
          res4: responce.res4,
          res9: responce.res9,
        };
      }
      // Tout patient avec ou sans facteur pronostique avec au moins un facteur de gravité majeur
      if (fac_maj > 0) {
        return { res3: responce.res3, res9: responce.res9 };
      }
    }
    // Tout patient avec un facteur pronostique ou plus
    if (fac_prono > 0) {
      // Aucun facteur de gravité ou Un seul facteur de gravité mineur
      if (fac_maj === 0 && (fac_min === 0 || fac_min === 1)) {
        return {
          res2: responce.res2,
          res4: responce.res4,
          res9: responce.res9,
        };
      }
      // Au moins deux facteurs de gravité mineurs
      if (fac_min > 1) return { res3: responce.res3, res9: responce.res9 };
      // Tout patient avec ou sans facteur pronostique avec au moins un facteur de gravité majeur
      if (fac_maj > 0) return { res3: responce.res3, res9: responce.res9 };
    }
    // end Tout patient sans facteur pronostique
  }
  // Tout patient avec fièvre et toux
  if (arr[1] === "Oui" && arr[3] === "Oui") {
    // Tout patient sans facteur pronostique
    if (fac_prono === 0) {
      // Sans facteur de gravité ou au moins 1 facteur de gravité mineur sans facteur de gravité majeur
      if (fac_maj === 0 && fac_min >= 0)
        return { res2: responce.res2, res9: responce.res9 };
      // Tout patient avec ou sans facteur pronostique avec au moins un facteur de gravité majeur
      if (fac_maj > 0) return { res3: responce.res3, res9: responce.res9 };
    }
    // Tout patient avec un facteur pronostique ou plus :
    if (fac_prono >= 1) {
      // Aucun facteur de gravité  or Un seul facteur de gravité mineur:
      if (fac_maj === 0 && fac_min <= 1)
        return { res2: responce.res2, res9: responce.res9 };
      // Au moins deux facteurs de gravité mineurs
      if (fac_min > 1) return { res3: responce.res3, res9: responce.res9 };
      // Tout patient avec ou sans facteur pronostique avec au moins un facteur de gravité majeur
      if (fac_maj > 0) return { res3: responce.res3, res9: responce.res9 };
    }
  }
  // Tout patient avec un seul symptôme parmi fièvre, toux, mal de gorge, courbatures
  if (
    arr[1] === "Oui" ||
    arr[3] === "Oui" ||
    arr[4] === "Oui" ||
    arr[5] === "Oui"
  ) {
    // Pas de facteur de gravité
    if (fac_maj + fac_min === 0)
      return { res5: responce.res5, res9: responce.res9 };
    // Au moins un facteur de gravité ou un facteur pronostique
    if (fac_maj + fac_min > 0 || fac_prono > 0)
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
  if (arr[indice] < 15) return "Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15.";
  else return null;
}

//
//
//
// count the number of the facteurs
function countFac(arr) {
  let fac_gra_min;
  let fac_gra_maj;
  let fac_prono;

  fac_gra_min = 0;
  fac_gra_maj = 0;
  fac_prono = 0;

  if (arr[1] === "Oui") {
    if (arr[2] >= 39) fac_gra_min++;
    else if (arr[2] <= 35.4) fac_gra_maj++;
  }

  if (arr[7] === "Oui" && arr[8] === "Oui") fac_gra_min++;
  if (arr[9] === "Oui") fac_gra_maj++;
  if (arr[10] === "Oui") fac_gra_maj++;
  if (arr[11] === "Fatigué(e)" || arr[11] === "Très fatigué(e)") fac_gra_min++;
  // facteurs pronostique

  /********************facteur pronostique**************** */

  if (arr[0] >= 70) fac_prono++;

  if (arr[12] && arr[13]) {
    let imc = arr[12] / ((arr[13] / 100) * 2);
    if (imc < 18.5 || imc > 25) fac_prono++;
  }

  if (arr[14] == null || arr[14] === "Oui") fac_prono++;

  for (let i = 15; i < arr.length; i++) {
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
