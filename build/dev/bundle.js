!function (e) { var n = {}; function t(i) { if (n[i]) return n[i].exports; var r = n[i] = { i: i, l: !1, exports: {} }; return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports } t.m = e, t.c = n, t.d = function (e, n, i) { t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: i }) }, t.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, t.t = function (e, n) { if (1 & n && (e = t(e)), 8 & n) return e; if (4 & n && "object" == typeof e && e && e.__esModule) return e; var i = Object.create(null); if (t.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & n && "string" != typeof e) for (var r in e) t.d(i, r, function (n) { return e[n] }.bind(null, r)); return i }, t.n = function (e) { var n = e && e.__esModule ? function () { return e.default } : function () { return e }; return t.d(n, "a", n), n }, t.o = function (e, n) { return Object.prototype.hasOwnProperty.call(e, n) }, t.p = "", t(t.s = 0) }([function (e, n, t) { "use strict"; function i(e) { if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) { if (Array.isArray(e) || (e = function (e, n) { if (!e) return; if ("string" == typeof e) return r(e, n); var t = Object.prototype.toString.call(e).slice(8, -1); "Object" === t && e.constructor && (t = e.constructor.name); if ("Map" === t || "Set" === t) return Array.from(t); if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return r(e, n) }(e))) { var n = 0, t = function () { }; return { s: t, n: function () { return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] } }, e: function (e) { throw e }, f: t } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var i, o, a = !0, s = !1; return { s: function () { i = e[Symbol.iterator]() }, n: function () { var e = i.next(); return a = e.done, e }, e: function (e) { s = !0, o = e }, f: function () { try { a || null == i.return || i.return() } finally { if (s) throw o } } } } function r(e, n) { (null == n || n > e.length) && (n = e.length); for (var t = 0, i = new Array(n); t < n; t++)i[t] = e[t]; return i } function o(e, n) { var t = document.createElement(e); if (0 !== Object.keys(n).length) for (var r in n) if ("class" === r) { var o, a = i(n[r]); try { for (a.s(); !(o = a.n()).done;) { var s = o.value; t.classList.add(s) } } catch (e) { a.e(e) } finally { a.f() } } else t.setAttribute(r, n[r]); return t } function a(e, n) { var t, r = i(n); try { for (r.s(); !(t = r.n()).done;) { var o = t.value; e.appendChild(o) } } catch (e) { r.e(e) } finally { r.f() } } function s(e, n, t, i, r, s) { var u, c; if (t.innerText = n[e].question, n[e].addInfo ? r.appendChild((u = n[e].addInfo, (c = o("div", { class: ["hero", "info-medical"] })).innerHTML = '\n    <div class="hero__warning container">\n        <p class="hero__descri">\n        '.concat(u, " \n        </p>\n    </div>\n  "), c)) : r.innerHTML = "", n[e].choices.length > 0) { 4 === n[e].choices.length ? i.classList.add("flex-radio") : i.classList.contains("flex-radio") && i.classList.remove("flex-radio"), i.innerHTML = ""; for (var l = 0; l < n[e].choices.length; l++) { var d = o("div", { class: ["form-checkbox"] }), p = o("input", { type: "radio", name: "question".concat(e), id: "question".concat(l), value: n[e].choices[l] }); n[e].choices[l] === s[e] && p.setAttribute("checked", !0); var v = o("label", { for: "question".concat(e) }); v.innerText = n[e].choices[l], a(d, [v, p]), a(i, [d]) } } else { i.innerHTML = ""; var f = o("div", { class: ["form-control"] }), m = o("input", { type: "number", name: "question".concat(e), id: "question".concat(e), value: -1 === s[e] ? "" : s[e], placeholder: "  ".concat(n[e].label) }), h = o("label", { for: "question".concat(e) }); h.innerText = n[e].label, a(f, [m, h]), a(i, [f]) } } t.r(n); var u = [{ question: "Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.", choices: [], label: "age", id: 11 }, { question: "Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?", choices: ["Oui", "Non"], addInfo: "Anti-inflammatoires non stéroïdiens La prise d'anti-inflammatoires (ibuprofène, cortisone ...) pourrait être un facteur d'aggravation de l’infection. En cas de fièvre, prenez du paracétamol. Cette remarque concerte les traitements par gélules ou comprimés et ne concerne pas les formes inhalées. Si vous êtes déjà sous traitement, n'arrêtez pas ce traitement, demandez l'avis de votre médecin ou de votre pharmacien.", id: 0 }, { question: "Quelle est votre température corporelle ?", choices: [], label: "degre", id: 1 }, { question: "Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?", choices: ["Oui", "Non"], id: 2 }, { question: "Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?", choices: ["Oui", "Non"], id: 3 }, { question: "Ces derniers jours, avez-vous un mal de gorge", choices: ["Oui", "Non"], id: 4 }, { question: "Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.", choices: ["Oui", "Non"], id: 5 }, { question: "Ces derniers jours, avez-vous une fatigue inhabituelle ?", choices: ["Oui", "Non"], id: 6 }, { question: "cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ?", choices: ["Oui", "Non"], id: 7 }, { question: "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?", choices: ["Oui", "Non"], id: 8 }, { question: "Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ?", choices: ["Oui", "Non"], id: 9 }, { question: "Actuellement, comment vous vous sentez ?", choices: ["Bien", "Assez bien", "Fatigué(e)", "Très fatigué(e)"], id: 10 }, { question: "Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.", choices: [], label: "kg", id: 12 }, { question: "Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.", choices: [], label: "cm", id: 13 }, { question: "Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?", choices: ["Oui", "Non"], id: 14 }, { question: "Êtes-vous diabétique ?", choices: ["Oui", "Non"], id: 15 }, { question: "Avez-vous ou avez-vous eu un cancer ?", choices: ["Oui", "Non"], id: 16 }, { question: "Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?", choices: ["Oui", "Non"], id: 17 }, { question: "Avez-vous une insuffisance rénale chronique dialysée ?", choices: ["Oui", "Non"], id: 18 }, { question: "Avez-vous une maladie chronique du foie ?", choices: ["Oui", "Non"], id: 19 }, { question: "Êtes-vous enceinte ?", choices: ["Oui", "Non", "Homme"], id: 20 }, { question: "Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?", choices: ["Oui", "Non"], id: 21 }, { question: "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).", choices: ["Oui", "Non"], id: 22 }]; function c(e, n) { var t = document.querySelectorAll("#progress-bar span"), i = document.querySelectorAll("#progress-bar i.circle"); t[e - 1].classList.remove("add_main_color"), i[e - 1].classList.remove("add_warning_color"), t[n - 1].classList.add("add_main_color"), i[n - 1].classList.add("add_warning_color") } function l(e) { if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) { if (Array.isArray(e) || (e = function (e, n) { if (!e) return; if ("string" == typeof e) return d(e, n); var t = Object.prototype.toString.call(e).slice(8, -1); "Object" === t && e.constructor && (t = e.constructor.name); if ("Map" === t || "Set" === t) return Array.from(t); if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return d(e, n) }(e))) { var n = 0, t = function () { }; return { s: t, n: function () { return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] } }, e: function (e) { throw e }, f: t } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var i, r, o = !0, a = !1; return { s: function () { i = e[Symbol.iterator]() }, n: function () { var e = i.next(); return o = e.done, e }, e: function (e) { a = !0, r = e }, f: function () { try { o || null == i.return || i.return() } finally { if (a) throw r } } } } function d(e, n) { (null == n || n > e.length) && (n = e.length); for (var t = 0, i = new Array(n); t < n; t++)i[t] = e[t]; return i } function p(e) { var n = document.getElementById("currentIndice"), t = document.getElementById("indice"); n.style.width = (e + 1) * (100 / 23) + "%", t.innerText = e + 1 } var v = function (e) { var n = o("div", { class: ["msg"] }); return n.innerHTML = "\n        <p>".concat(e, "</p>\n    "), n }; window.addEventListener("DOMContentLoaded", (function () { var e, n = document.getElementById("root"), t = 0, i = Array(23).fill(null), r = ((e = o("div", { class: ["container"], id: "stepper" })).innerHTML = '\n            <div class="progress-bar" id="progress-bar">\n              <span class="big-circle add_main_color" id="sp1"><i class="circle add_warning_color" id="c1"></i></span>\n              <div class="line"><span class="big-circle second-circle-container" id="sp2"><i class="circle second-circle" id="c2"></i></span></div>\n              <span class="big-circle" id="sp3"><i class="circle" id="c3"></i></span>\n            </div>\n            <div class="progress-bar-description">\n              <p class="progress-bar-description--first" data-key="information">Informations</p>\n              <p class="progress-bar-description--second" data-key = "questionnaire">Questionnaire</p>\n              <p class="progress-bar-description--third" data-key="result">Résultats</p>\n            </div>                     \n    ', e), d = function () { var e = o("div", { class: ["start-btn__container", "container"] }); return e.innerHTML = '\n        <a class="btn btn-main" id="start_survey" data-key="start_survey">Demarer le test</a>\n        ', e }(), f = function () { var e = o("div", { class: ["container", "preambule__container"], id: "preambule" }); return e.innerHTML = '\n    <div class="preambule">\n        <h3 class="title" data-key="preambule">Préambule</h3>\n        <p data-key="preambule_cont1">« L’application est fournie à titre gratuit, en l’état, uniquement à des fins d’information pour contribuer à fluidifier la prise en charge des personnes par les services d’urgences pendant l’épidémie de Coronavirus COVID-19. L’exhaustivité, l’exactitude, le caractère à jour des informations et contenus mis à disposition dans cette application, ou leur adéquation à des finalités particulières, ne sont pas garantis.</p>\n        <hr>\n        <p data-key="preambule_cont2"> L’utilisation de l’application et de son contenu ne remplace en aucun cas le conseil nécessaire donné par votre médecin ou votre pharmacien ou tout autre professionnel de santé compétent dans chaque cas particulier. Tout examen ou décision de l’utilisateur doit être réalisé ou prise de manière autonome sur la base de l’information scientifique et clinique pertinente, de la notice officielle du produit concerné le cas échéant et en cas de doute, en consultant un médecin compétent. </p>\n    </div>\n    ', e }(), m = function () { var e = o("div", { class: ["container"], id: "progre" }), n = o("div", { class: ["show-progress"] }), t = o("div", { class: ["progress-indicateur"], id: "currentIndice" }), i = o("span", { id: "indice" }); i.textContent = "1"; var r = o("span", {}); return r.textContent = "/23", a(n, [t]), a(e, [n, i, r]), e }(), h = function () { var e = o("div", { class: ["recommandations"], dir: "auto" }); return e.innerHTML = '\n    <h3 class="title recommandations__title" data-key="rec_title">Recommandations officielles</h3>\n    <div class="container recommandations__desc">\n      <div class="recommandations__list">\n        <h4 class="recommandations__list--title" data-key="rec_header">Si vous pensez être malade,</h4>\n        <ul class="recommandations__items">\n          <li data-key="rec_1">évitez les endroits publics.</li>\n          <li data-key="rec_2">Ne rendez pas visite aux personnes fragiles.</li>\n          <li data-key="rec_3">Évitez de sortir de chez vous.</li>\n          <li data-key="rec_4">Respectez les mesures barrière (lavage de main, masque).</li>\n          <li data-key="rec_5">\n            Surveillez vos symptômes, l’évolution de votre température\n          </li>\n          <li data-key="rec_6">corporelle et recherchez un avis médical.</li>\n        </ul>\n      </div>\n      <div class="recommandations__contact">\n        <h3 class="recommandations__contact--title" data-key="appel">Appel Gratuit</h3>\n        <a href="tel:+2120801004747" class="recommandations__contact--phone"\n          >080 100 47 47</a\n        >\n        <a\n          href="www.sante.gov.ma"\n          target="_blank"\n          class="recommandations__contact--site"\n          >www.sante.gov.ma</a\n        >\n      </div>\n    </div>\n    ', e }(), b = o("button", { class: ["btn", "small-btn", "btn-main", "question--btn", "add-green-backgr"] }); b.textContent = "Submit"; var g = o("button", { class: ["btn", "small-btn", "btn-main", "reprendre"] }); g.textContent = "Repredre Test", n.innerHTML = "", a(n, [r, f, d, h]); var y = function () { var e = o("div", {}), n = o("div", { class: ["container", "quiz_elem"] }), t = o("div", { class: ["container", "btnCont"] }), i = o("p", { class: ["question"] }), r = o("form", { class: ["form"] }), s = o("div", {}), u = o("button", { class: ["btn", "small-btn", "btn-main", "question--btn"] }), c = o("button", { class: ["btn", "small-btn", "btn-main", "question--btn"] }); return u.innerText = "Question suivant", c.innerText = "Question président", a(t, [c, u]), a(n, [i, r, s]), a(e, [n, t]), { parent: e, btnCont: t, prevBtn: c, nextBtn: u, para: i, form: r, warning_cont: s } }(); d.addEventListener("click", (function () { s(t, u, y.para, y.form, y.warning_cont, i), c(1, 2), n.removeChild(f), n.removeChild(d), a(n, [r, m, y.parent, h]), p(t) })), y.nextBtn.addEventListener("click", (function () { if (t <= u.length - 1) { if (function (e, n) { var t = document.querySelectorAll("form input"); if (1 === t.length) isNaN(parseFloat(t[0].value)) ? e[n] = null : e[n] = Number(t[0].value); else { var i, r = l(t); try { for (r.s(); !(i = r.n()).done;) { var o = i.value; o.checked && (e[n] = o.value) } } catch (e) { r.e(e) } finally { r.f() } } }(i, t), 0 == t) { var e = i[0] < 15 ? "Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15." : null; if (e) return i = Array(23).fill(null), c(2, 3), n.removeChild(m), n.replaceChild(v(e), y.parent), void n.insertBefore(g, h) } (1 === t && "Non" == i[1] || 7 === t && ("Non" === i[7] || null == i[7])) && t++ } t < u.length - 1 && (s(++t, u, y.para, y.form, y.warning_cont, i), p(t)), t === u.length - 1 && y.btnCont.replaceChild(b, y.nextBtn) })), y.prevBtn.addEventListener("click", (function () { t > 0 && ((3 === t && "Non" === i[1] || 9 === t && ("Non" === i[7] || null == i[7])) && t--, s(--t, u, y.para, y.form, y.warning_cont, i), p(t)), t === u.length - 2 && y.btnCont.replaceChild(y.nextBtn, b) })), b.addEventListener("click", (function () { var e = function (e) { var n = "nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes.", t = "téléconsultation ou médecin généraliste ou visite à domicile", i = "appel 141", r = "appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent.", o = "Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute.", a = "Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141.", s = "Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation. Pour toute information concernant le Covid-19 allez vers la page d’accueil.", u = "Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.", c = function (e) { var n, t, i; n = 0, t = 0, i = 0, "Oui" === e[1] && (e[2] >= 39 ? n++ : e[2] <= 35.4 && t++); "Oui" === e[7] && "Oui" === e[8] && n++; "Oui" === e[9] && t++; "Oui" === e[10] && t++; "Fatigué(e)" !== e[11] && "Très fatigué(e)" !== e[11] || n++; e[0] >= 70 && i++; if (e[12] && e[13]) { var r = e[12] / (e[13] / 100 * 2); (r < 18.5 || r > 25) && i++ } null != e[14] && "Oui" !== e[14] || i++; for (var o = 15; o < e.length; o++)"Oui" === e[o] && i++; return { fac_gra_min: n, fac_gra_maj: t, fac_prono: i } }(e), l = c.fac_gra_min, d = c.fac_gra_maj, p = c.fac_prono; if ("Oui" === e[1] || "Oui" === e[3] && ("Oui" === e[5] || "Oui" === e[4])) { if (0 === p) { if (e[0] < 50) return { res1: n, res9: u }; if (d + d === 0 && e[1] >= 50 && e[1] <= 69 || l > 0) return { res2: t, res4: r, res9: u }; if (d > 0) return { res3: i, res9: u } } else if (p > 0) { if (0 === d && (0 === l || 1 === l)) return { res2: t, res4: r, res9: u }; if (l > 1) return { res3: i, res9: u }; if (d > 0) return { res3: i, res9: u } } } else if ("Oui" === e[1] && "Oui" === e[3]) { if (0 === p) { if (0 === d && l >= 0) return { res2: t, res9: u }; if (d > 0) return { res3: i, res9: u } } else if (p >= 1) { if (0 === d && l <= 1) return { res2: t, res9: u }; if (l > 1) return { res3: i, res9: u }; if (d > 0) return { res3: i, res9: u } } } else { if ("Oui" !== e[1] && "Oui" !== e[3] && "Oui" !== e[4] && "Oui" !== e[5]) return { res7: s, res9: u }; if (d + l === 0) return { res5: o, res9: u }; if (d + l > 0 || p > 0) return { res6: a, res9: u } } }(i); c(2, 3), n.removeChild(m), n.replaceChild(function (e) { var n = o("div", { class: ["container"] }); for (var t in e) a(n, [v(e[t])]); return n }(e), y.parent), n.insertBefore(g, h) })), g.addEventListener("click", (function () { t = 0, i = Array(23).fill(null), n.innerHTML = "", a(n, [r, f, d, h]), c(3, 1), y.btnCont.replaceChild(y.nextBtn, b) })) })) }]);
