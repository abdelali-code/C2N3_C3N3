import { createElement } from "../helpers/createElement";

export const addRecommandations = () => {
  const container = createElement("div", { class: ["recommandations"] });

  container.innerHTML = `
    <h3 class="title recommandations__title">Recommandations officielles</h3>
    <div class="container recommandations__desc">
      <div class="recommandations__list">
        <h4 class="recommandations__list--title">Si vous pensez être malade,</h4>
        <ul class="recommandations__items">
          <li>évitez les endroits publics.</li>
          <li>Ne rendez pas visite aux personnes fragiles.</li>
          <li>Évitez de sortir de chez vous.</li>
          <li>Respectez les mesures barrière (lavage de main, masque).</li>
          <li>
            Surveillez vos symptômes, l’évolution de votre température
          </li>
          <li>corporelle et recherchez un avis médical.</li>
        </ul>
      </div>
      <div class="recommandations__contact">
        <h3 class="recommandations__contact--title">Appel Gratuit</h3>
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
