!function(e){var n={};function i(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=n,i.d=function(e,n,r){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)i.d(r,t,function(n){return e[n]}.bind(null,t));return r},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i(i.s=0)}([function(e,n,i){"use strict";function r(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,n)}(e))){var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,s=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){a=!0,o=e},f:function(){try{s||null==r.return||r.return()}finally{if(a)throw o}}}}function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,r=new Array(n);i<n;i++)r[i]=e[i];return r}function o(e,n){var i=document.createElement(e);if(0!==Object.keys(n).length)for(var t in n)if("class"===t){var o,s=r(n[t]);try{for(s.s();!(o=s.n()).done;){var a=o.value;i.classList.add(a)}}catch(e){s.e(e)}finally{s.f()}}else i.setAttribute(t,n[t]);return i}function s(e,n){var i,t=r(n);try{for(t.s();!(i=t.n()).done;){var o=i.value;e.appendChild(o)}}catch(e){t.e(e)}finally{t.f()}}function a(){var e=o("div",{class:["container"],id:"progre"}),n=o("div",{class:["show-progress"]}),i=o("div",{class:["progress-indicateur"],id:"currentIndice"}),r=o("span",{id:"indice"});r.textContent="1";var t=o("span",{});return t.textContent="/23",s(n,[i]),s(e,[n,r,t]),e}function u(e){var n=document.getElementById("currentIndice"),i=document.getElementById("indice");n.style.width=(e+1)*(100/23)+"%",i.innerText=e+1}function c(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,n){if(!e)return;if("string"==typeof e)return l(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return l(e,n)}(e))){var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,t,o=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){s=!0,t=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw t}}}}function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,r=new Array(n);i<n;i++)r[i]=e[i];return r}i.r(n);var d="nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes.",v="téléconsultation ou médecin généraliste ou visite à domicile",f="appel 141",p="appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent.",m="Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute.",h="Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141.",b="Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation. Pour toute information concernant le Covid-19 allez vers la page d’accueil.",g="Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15.",y="Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.",q=function(e){if(e[11]<15)return{res8:g,res9:y};if(22===counter){var n=function(e){var n=0,i=0,r=0,t=e[12]/(e[13]/100*2);"Oui"===e[0]&&(e[1]>=39?n++:e[1]<=35.4&&i++);"Oui"===e[6]&&"Oui"===e[7]&&n++;"Oui"===e[8]&&i++;"Oui"===e[9]&&i++;"Fatigué(e)"!==e[10]&&"Très fatigué(e)"!==e[10]||n++;e[11]>=70&&r++;(t<18.5||t>25)&&r++;for(var o=14;o<e.length;o++)"Oui"===e[o]&&r++;return{fac_gra_min:n,fac_gra_maj:i,fac_prono:r}}(e,counter),i=n.fac_gra_min,r=n.fac_gra_maj,t=n.fac_prono;if("Oui"===e[2]&&("Oui"===e[4]||"Oui"===e[3])||"Oui"===e[0]||"Oui"===e[5]&&"Oui"===e[0]){if(0===t){if(e[11]<50)return{res1:d,res9:y};if(r+r===0&&e[11]>=50&&e[11]<=69||i>=1)return{res2:v,res4:p,res9:y};if(r>0)return{res3:f,res9:y}}else if(t>=1){if(r+r===0||i>0)return{res2:v,res4:p,res9:y};if(i>1)return{res3:f,res9:y};if(r>0)return{res3:f,res9:y}}}else if("Oui"===e[0]&&"Oui"===e[2]){if(0===t){if(r+i===0||i>=1&&0===r)return{res2:v,res9:y};if(r>0)return{res3:f,res9:y}}else if(t>=1){if(r+i===0||1===i)return v;if(i>1)return{res3:f,res9:y};if(r>0)return{res3:f,res9:y}}}else{if("Oui"!==e[0]&&"Oui"!==e[2]&&"Oui"!==e[3]&&"Oui"!==e[4])return{res7:b,res9:y};if(r+i===0)return{res5:m,res9:y};if(r+i>0||t>0)return{res6:h,res9:y}}}};var _=function(e){var n=o("div",{class:["msg"]});return n.innerHTML="\n        <p>".concat(e,"</p>\n    "),n};function O(e,n,i){var r=o("div",{}),t=o("div",{class:["container","quiz_elem"]}),a=o("div",{class:["container","btnCont"]}),l=o("p",{class:["question"]}),d=o("form",{class:["form"]}),v=o("div",{}),f=o("button",{class:["btn","small-btn","btn-main","question--btn"]}),p=o("button",{class:["btn","small-btn","btn-main","question--btn"]});s(a,[p,f]),z(n,e,l,d,v);var m=null;return f.addEventListener("click",(function(){if(n<=e.length-1&&(function(e,n){var i=document.querySelectorAll("form input");if(1===i.length)isNaN(parseFloat(i[0].value))?e[n]=-1:e[n]=Number(i[0].value);else{var r,t=c(i);try{for(t.s();!(r=t.n()).done;){var o=r.value;o.checked&&(e[n]=o.value)}}catch(e){t.e(e)}finally{t.f()}}}(i,n),null!=(m=q(i))))return function(e){var n=o("div",{class:["container"]});for(var i in e)s(n,[_(i)]);return n}(m);n<e.length-1&&(z(++n,e,l,d,v),u(n))})),p.addEventListener("click",(function(){n>0&&(z(--n,e,l,d,v),u(n)),"Submit"===f.innerText&&e.length-2&&(f.innerText="Question suivant",f.classList.remove("add-green-backgr"))})),f.innerText="Question suivant",p.innerText="Question président",s(t,[l,d]),s(r,[t,a,v]),r}function z(e,n,i,r,t){var a,u;if(i.innerText=n[e].question,n[e].addInfo?t.appendChild((a=n[e].addInfo,(u=o("div",{class:["hero","info-medical"]})).innerHTML='\n    <div class="hero__warning container">\n        <p class="hero__descri">\n        '.concat(a," \n        </p>\n    </div>\n  "),u)):t.innerHTML="",n[e].choices.length>0){4===n[e].choices.length?r.classList.add("flex-radio"):r.classList.contains("flex-radio")&&r.classList.remove("flex-radio"),r.innerHTML="";for(var c=0;c<n[e].choices.length;c++){var l=o("div",{class:["form-checkbox"]}),d=o("input",{type:"radio",name:"question".concat(e),id:"question".concat(c),value:n[e].choices[c]}),v=o("label",{for:"question".concat(e)});v.innerText=n[e].choices[c],s(l,[v,d]),s(r,[l])}}else{r.innerHTML="";var f=o("div",{class:["form-control"]}),p=o("input",{type:"number",name:"question".concat(e),id:"question".concat(e)}),m=o("label",{for:"question".concat(e)});m.innerText=n[e].label,s(f,[p,m]),s(r,[f])}}var N=function(){var e=o("div",{class:["recommandations"]});return e.innerHTML='\n    <h3 class="title recommandations__title">Recommandations officielles</h3>\n    <div class="container recommandations__desc">\n      <div class="recommandations__list">\n        <h4 class="recommandations__list--title">Si vous pensez être malade,</h4>\n        <ul class="recommandations__items">\n          <li>évitez les endroits publics.</li>\n          <li>Ne rendez pas visite aux personnes fragiles.</li>\n          <li>Évitez de sortir de chez vous.</li>\n          <li>Respectez les mesures barrière (lavage de main, masque).</li>\n          <li>\n            Surveillez vos symptômes, l’évolution de votre température\n          </li>\n          <li>corporelle et recherchez un avis médical.</li>\n        </ul>\n      </div>\n      <div class="recommandations__contact">\n        <h3 class="recommandations__contact--title">Appel Gratuit</h3>\n        <a href="tel:+2120801004747" class="recommandations__contact--phone"\n          >080 100 47 47</a\n        >\n        <a\n          href="www.sante.gov.ma"\n          target="_blank"\n          class="recommandations__contact--site"\n          >www.sante.gov.ma</a\n        >\n      </div>\n    </div>\n    ',e},x=[{question:"Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?",choices:["Oui","Non"],addInfo:"Anti-inflammatoires non stéroïdiens La prise d'anti-inflammatoires (ibuprofène, cortisone ...) pourrait être un facteur d'aggravation de l’infection. En cas de fièvre, prenez du paracétamol. Cette remarque concerte les traitements par gélules ou comprimés et ne concerne pas les formes inhalées. Si vous êtes déjà sous traitement, n'arrêtez pas ce traitement, demandez l'avis de votre médecin ou de votre pharmacien."},{question:"Quelle est votre température corporelle ?",choices:[],label:"degre"},{question:"Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?",choices:["Oui","Non"]},{question:"Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?",choices:["Oui","Non"]},{question:"Ces derniers jours, avez-vous un mal de gorge",choices:["Oui","Non"]},{question:"Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.",choices:["Oui","Non"]},{question:"Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?",choices:["Oui","Non"]},{question:"cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ?",choices:["Oui","Non"]},{question:"Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?",choices:["Oui","Non"]},{question:"Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?",choices:["Oui","Non"]},{question:"Actuellement, comment vous vous sentez ?",choices:["Bien","Assez bien","Fatigué(e)","Très fatigué(e)"]},{question:"Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.",choices:[],label:"age"},{question:"Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",choices:[],label:"kg"},{question:"Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",choices:[],label:"cm"},{question:"Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?",choices:["Oui","Non"]},{question:"Êtes-vous diabétique ?",choices:["Oui","Non"]},{question:"Avez-vous ou avez-vous eu un cancer ?",choices:["Oui","Non"]},{question:"Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?",choices:["Oui","Non"]},{question:"Avez-vous une insuffisance rénale chronique dialysée ?",choices:["Oui","Non"]},{question:"Avez-vous une maladie chronique du foie ?",choices:["Oui","Non"]},{question:"Êtes-vous enceinte ?",choices:["Oui","Non","Homme"]},{question:"Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?",choices:["Oui","Non"]},{question:"Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).",choices:["Oui","Non"]}];window.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("root"),n=[null,null,"Non","Non","Non","Non","Non","Non","Non","Non","Bien",null,null,null,"Oui","Non","Non","Non","Non","Non","Non","Non","Non"];e.innerHTML="";var i,r=((i=o("div",{class:["container"],id:"stepper"})).innerHTML='\n            <div class="progress-bar" id="progress-bar">\n              <span class="big-circle add_main_color" id="sp1"><i class="circle add_warning_color" id="c1"></i></span>\n              <div class="line"><span class="big-circle second-circle-container" id="sp2"><i class="circle second-circle" id="c2"></i></span></div>\n              <span class="big-circle" id="sp3"><i class="circle" id="c3"></i></span>\n            </div>\n            <div class="progress-bar-description">\n              <p class="progress-bar-description--first">Informations</p>\n              <p class="progress-bar-description--second">Questionnaire</p>\n              <p class="progress-bar-description--third">Résultats</p>\n            </div>                     \n    ',i),t=function(){var e=o("div",{class:["start-btn__container","container"]});return e.innerHTML='\n        <a class="btn btn-main" id="start_survey" >Demarer le test</a>\n        ',e}(),u=function(){var e=o("div",{class:["container","preambule__container"],id:"preambule"});return e.innerHTML='\n    <div class="preambule">\n        <h3 class="title">Préambule</h3>\n        <p>« L’application est fournie à titre gratuit, en l’état, uniquement à des fins d’information pour contribuer à fluidifier la prise en charge des personnes par les services d’urgences pendant l’épidémie de Coronavirus COVID-19. L’exhaustivité, l’exactitude, le caractère à jour des informations et contenus mis à disposition dans cette application, ou leur adéquation à des finalités particulières, ne sont pas garantis.</p>\n        <hr>\n        <p> L’utilisation de l’application et de son contenu ne remplace en aucun cas le conseil nécessaire donné par votre médecin ou votre pharmacien ou tout autre professionnel de santé compétent dans chaque cas particulier. Tout examen ou décision de l’utilisateur doit être réalisé ou prise de manière autonome sur la base de l’information scientifique et clinique pertinente, de la notice officielle du produit concerné le cas échéant et en cas de doute, en consultant un médecin compétent. </p>\n    </div>\n    ',e}();s(e,[r,u,t]),t.addEventListener("click",(function(){var i,r,o,c;i=1,r=2,o=document.querySelectorAll("#progress-bar span"),c=document.querySelectorAll("#progress-bar i.circle"),o[i-1].classList.remove("add_main_color"),o[r-1].classList.add("add_main_color"),c[r-1].classList.add("add_warning_color"),e.removeChild(u),e.removeChild(t),s(e,[a(),O(x,0,n),N()])}))}))}]);