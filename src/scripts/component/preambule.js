import { createElement, addToparent } from "../helpers/createElement";

function preambule() {
  const container = createElement("div", { class: ["container"] });
  const prem = createElement("div", { class: ["preambule"] });

  const h3 = createElement("h3", { class: ["title"] });
  h3.textContent = "Préambule";
  const para = createElement("p", {});
  para.textContent =
    "L’application est fournie à titre gratuit, en l’état, uniquement à des fins d’information pour contribuer à fluidifier la prise en charge des personnes par les services d’urgences pendant l’épidémie de Coronavirus COVID-19. L’exhaustivité, l’exactitude, le caractère à jour des informations et contenus mis à disposition dans cette application, ou leur adéquation à des finalités particulières, ne sont pas garantis.";
  const hr = createElement("hr", {});
  const para2 = createElement("p", {});
  para2.textContent =
    "L’utilisation de l’application et de son contenu ne remplace en aucun cas le conseil nécessaire donné par votre médecin ou votre pharmacien ou tout autre professionnel de santé compétent dans chaque cas particulier. Tout examen ou décision de l’utilisateur doit être réalisé ou prise de manière autonome sur la base de l’information scientifique et clinique pertinente, de la notice officielle du produit concerné le cas échéant et en cas de doute, en consultant un médecin compétent. ";
  const href = createElement("a", {
    href: "#",
    class: ["demarer-test"],
    id: "start_survey",
  });
  href.textContent = "Demarer le test";
  addToparent(prem, [h3, para, hr, para2]);
  addToparent(container, [prem, href]);
  return container;
}

export { preambule };
