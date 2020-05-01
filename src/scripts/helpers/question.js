export const QUESTION = [
  {
    question:
      "Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.",
    choices: [],
    label: "age",
    id: 11,
  },
  {
    question:
      "Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?",
    choices: ["Oui", "Non"],
    addInfo:
      "Anti-inflammatoires non stéroïdiens: La prise d'anti-inflammatoires (ibuprofène, cortisone ...) pourrait être un facteur d'aggravation de l’infection. En cas de fièvre, prenez du paracétamol. Cette remarque concerte les traitements par gélules ou comprimés et ne concerne pas les formes inhalées. Si vous êtes déjà sous traitement, n'arrêtez pas ce traitement, demandez l'avis de votre médecin ou de votre pharmacien.",
    id: 0,
  },
  {
    question: "Quelle est votre température corporelle ?",
    choices: [],
    label: "degre",
    id: 1,
  },
  {
    question:
      "Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?",
    choices: ["Oui", "Non"],
    id: 2,
  },
  {
    question:
      "Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?",
    choices: ["Oui", "Non"],
    id: 3,
  },
  {
    question: "Ces derniers jours, avez-vous un mal de gorge",
    choices: ["Oui", "Non"],
    id: 4,
  },
  {
    question:
      "Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.",
    choices: ["Oui", "Non"],
    id: 5,
  },
  {
    question: "Ces derniers jours, avez-vous une fatigue inhabituelle ?",
    choices: ["Oui", "Non"],
    id: 6,
  },
  {
    question:
      "cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ?",
    choices: ["Oui", "Non"],
    id: 7,
  },
  {
    question:
      "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?",
    choices: ["Oui", "Non"],
    id: 8,
  },
  {
    question:
      "Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ?",
    choices: ["Oui", "Non"],
    id: 9,
  },
  {
    question: "Actuellement, comment vous vous sentez ?",
    choices: ["Bien", "Assez bien", "Fatigué(e)", "Très fatigué(e)"],
    id: 10,
  },
  {
    question:
      "Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",
    choices: [],
    label: "kg",
    id: 12,
  },
  {
    question:
      "Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",
    choices: [],
    label: "cm",
    id: 13,
  },
  {
    question:
      "Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?",
    choices: ["Oui", "Non"],
    id: 14,
  },
  { question: "Êtes-vous diabétique ?", choices: ["Oui", "Non"], id: 15 },
  {
    question: "Avez-vous ou avez-vous eu un cancer ?",
    choices: ["Oui", "Non"],
    id: 16,
  },
  {
    question:
      "Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?",
    choices: ["Oui", "Non"],
    id: 17,
  },
  {
    question: "Avez-vous une insuffisance rénale chronique dialysée ?",
    choices: ["Oui", "Non"],
    id: 18,
  },
  {
    question: "Avez-vous une maladie chronique du foie ?",
    choices: ["Oui", "Non"],
    id: 19,
  },
  {
    question: "Êtes-vous enceinte ?",
    choices: ["Oui", "Non", "Homme"],
    id: 20,
  },
  {
    question:
      "Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?",
    choices: ["Oui", "Non"],
    id: 21,
  },
  {
    question:
      "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).",
    choices: ["Oui", "Non"],
    id: 22,
  },
];














export const QUESTION_AR = [
  {
    question: "شحال عندك فعمرك ؟ هادشي باش نقدو نعرفو الخطورة ديال المرض إلا كان.",
    choices: [],
    label: "عام",
    id: 11,
  },
  {
    question: "واش كانت فيك السخانة في 10 ايام لي فاتت ( تبوريشة ، عرقتي ) ؟",
    choices: ["نعم", "لا"],
    addInfo: "الأدوية المضادة للالتهابات (الإيبوبروفين والكورتيزون ...) تقد تزيد من الحالة ديال العدوى، إلا فيك السخانة خود الباراسيتامول،  و إلى كنتي تتاخد الادوية المضادة للإلتها  بات ولا عندك الشك ضروري تشوف الطبيب ديالك",
    id: 0,
  },
  {
    question: "شحال درجة الحرارة عندك ؟",
    choices: [],
    label: "درجة",
    id: 1,
  },
  {
    question: "في الايام لي فاتو واش كانت فيك الكحبة اولا تزادت الكحبة لي كانت تتجيك عادية ؟",
    choices: ["نعم", "لا"],
    id: 2,
  },
  {
    question: "في ليام اللخرة واش نقصات عندك حاسة الشم و الذوق اولا مبقاتش ؟",
    choices: ["نعم", "لا"],
    id: 3,
  },
  {
    question: "واش تيدرك حلقك هاد الايام ؟",
    choices: ["نعم", "لا"],
    id: 4,
  },
  {
    question: "فهاد 24 ساعة لي فاتو واش كان فيك الإسهال ؟ على الاقل 3 مرات",
    choices: ["نعم", "لا"],
    id: 5,
  },
  {
    question: "فهاد الايام لي فاتو، واش عيتي بطريقة ماشي عادية ؟",
    choices: ["نعم", "لا"],
    id: 6,
  },
  {
    question: "واش هاد العيا خلاك مريح اكثر من نص يوم ؟",
    choices: ["نعم", "لا"],
    id: 7,
  },
  {
    question: "واش لقيتي صعوبة كبيرة فالماكلة و الشراب لاكثر من 24 ساعة ؟",
    choices: ["نعم", "لا"],
    id: 8,
  },
  {
    question: "واش عندق ضيق فالتنفس مني تتكلم ولا تدير جهد كثر من العادة ؟",
    choices: ["نعم", "لا"],
    id: 9,
  },
  {
    question: "فهاد الوقت كيف تتحس بالجسم ديالك ؟",
    choices: ["مزيان", "شويا مزيان", "عيان", "عيان بزاف"],
    id: 10,
  },
  {
    question: "شحال عندك فالوزن ؟ باش نعرفو مؤشر الوزن ديال الجسم ديالك حيث يقدر يتزاد عليك الحال فحالة كان فيك الڤيروس",
    choices: [],
    label: "kg",
    id: 12,
  },
  {
    question: "شحال فيك فالطول ؟ باش نعرفو مؤشر الوزن ديال الجسم ديالك حيث يقدر يتزاد عليك الحال فحالة كان فيك الڤيروس",
    choices: [],
    label: "cm",
    id: 13,
  },
  {
    question: "واش عندك ارتفاع ضغط الدم ؟ ولا فيك مرض القلب او الأوعية ادموية ؟ او تتاخد دوا ديال القلب ؟",
    choices: ["نعم", "لا"],
    id: 14,
  },
  { question: "فيك مرض السكر ؟", choices: ["نعم", "لا"], id: 15 },
  {
    question: "واش فيك السرطان ولا كان فيك السرطان ؟",
    choices: ["نعم", "لا"],
    id: 16,
  },
  {
    question: "واش عندك الضيقة ؟ او متبع مع شي طبيب ديال الرية",
    choices: ["نعم", "لا"],
    id: 17,
  },
  {
    question: "واش تادير دياليز؟",
    choices: ["نعم", "لا"],
    id: 18,
  },
  {
    question: "واش عندك إلتهاب فالكبد",
    choices: ["نعم", "لا"],
    id: 19,
  },
  {
    question: "واش حاملة ؟",
    choices: ["نعم", "لا", "ممطبقش عليا "],
    id: 20,
  },
  {
    question: "واش عندك شي مرض تينقص لك المناعة ديالك ؟",
    choices: ["نعم", "لا"],
    id: 21,
  },
  {
    question: "واش تتاخد شي دواء تينقص لك المناعة ديالك ؟ بحال: الكورتيكوستيرويدات ، الميثوتريكسات ، السيكلوسبورين تاكروليموس ، الآزوثيوبرين ، سيكلوفوسفاميد (كاين ادوية اخرى من غير هادو).",
    choices: ["نعم", "لا"],
    id: 22,
  },
];
