import { createElement } from "../helpers/createElement";

export const addRecommandations = () => {
  const container = createElement("div", { class: ["recommandations"], dir: "auto" });

  container.innerHTML = `
    <h3 class="title recommandations__title" data-key="rec_title">Recommandations officielles</h3>
    <div class="container recommandations__desc">
      <div class="recommandations__list">
        <h4 class="recommandations__list--title" data-key="rec_header">Si vous pensez être malade,</h4>
        <ul class="recommandations__items">
          <li data-key="rec_1">évitez les endroits publics.</li>
          <li data-key="rec_2">Ne rendez pas visite aux personnes fragiles.</li>
          <li data-key="rec_3">Évitez de sortir de chez vous.</li>
          <li data-key="rec_4">Respectez les mesures barrière (lavage de main, masque).</li>
          <li data-key="rec_5">
            Surveillez vos symptômes, l’évolution de votre température
          </li>
          <li data-key="rec_6">corporelle et recherchez un avis médical.</li>
        </ul>
      </div>
      <div class="recommandations__contact">
        <h3 class="recommandations__contact--title" data-key="appel">Appel Gratuit</h3>
        <a href="tel:+2120801004747" class="recommandations__contact--phone"
          >080 100 47 47</a
        >
        <a
          href="www.sante.gov.ma"
          target="_blank"
          class="recommandations__contact--site"
          >www.sante.gov.ma</a
        >
      </div>
    </div>
    `;
  return container;
};
