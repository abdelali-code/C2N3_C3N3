import { createElement, addToparent } from "../helpers/createElement";

function recommandations() {
  const container = createElement("section", {
    class: ["recommandations"],
    id: "recommandations",
  });

  const h3 = createElement("h3", { class: ["title"] });
  h3.textContent = "Recommandations officielles";

  const cont2 = createElement("div", {
    class: ["container", "recommandations-desc"],
  });

  const recom_List = createElement("div", { class: ["recommandations--list"] });
  const h4 = createElement("h4", {});
  h4.textContent = "Si vous pensez être malade,";

  //   list
  const ul = createElement("ul", {});
  const li1 = createElement("li", {});
  li1.textContent = "évitez les endroits publics.";
  const li2 = createElement("li", {});
  li2.textContent = "Ne rendez pas visite aux personnes fragiles.";
  const li3 = createElement("li", {});
  li3.textContent = "Évitez de sortir de chez vous.";
  const li4 = createElement("li", {});
  li4.textContent = "Respectez les mesures barrière (lavage de main, masque).";
  const li5 = createElement("li", {});
  li5.textContent =
    " Surveillez vos symptômes, l’évolution de votre température";
  const li6 = createElement("li", {});
  li6.textContent = "corporelle et recherchez un avis médical.";

  //   add li to ul
  addToparent(ul, [li1, li2, li3, li4, li5, li6]);

  addToparent(recom_List, [h4, ul]);

  const contact = createElement("div", { class: ["recommandations--contact"] });
  const con_h3 = createElement("h3", {});
  con_h3.textContent = "Appel Gratuit";
  const href1 = createElement("a", {
    href: "tel:+2120801004747",
    class: ["recommandations--contact-phone"],
  });
  href1.textContent = "080 100 47 47";
  const href2 = createElement("a", {
    target: "_blank",
    class: ["recommandations--contact-site"],
    href: "www.sante.gov.ma",
  });
  href2.textContent = "www.sante.gov.ma";

  addToparent(contact, [con_h3, href1, href2]);
  addToparent(cont2, [recom_List, contact]);

  addToparent(container, [h3, cont2]);
  return container;
}

export { recommandations };
