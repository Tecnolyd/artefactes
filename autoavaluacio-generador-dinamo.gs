/**
 * Generadors i dinamo · Autoavaluació (1r BAT)
 * Crea un qüestionari de Google Forms amb puntuació automàtica.
 *
 * Com fer-lo servir:
 *  1. Ves a https://script.google.com i prem «Projecte nou».
 *  2. Esborra el codi que hi ha i enganxa tot aquest fitxer.
 *  3. Desa (icona del disquet) i, a la barra de dalt, tria la funció «crearQuestionari» i prem «Executa».
 *  4. La primera vegada et demanarà permisos: accepta'ls amb el teu compte de l'XTEC.
 *  5. Al «Registre d'execució» sortiran els enllaços del formulari. També el trobaràs al teu Drive.
 */

const TITOL = 'Generadors i dinamo · Autoavaluació';
const DESCRIPCIO = 'Inducció electromagnètica, alternador i dinamo. Tria una resposta a cada pregunta. En enviar-lo veuràs la puntuació i les explicacions.';

const PREGUNTES = [
  {"p": "Quina transformació d’energia fa un generador?", "o": ["Elèctrica en mecànica", "Mecànica en elèctrica", "Química en elèctrica", "Tèrmica en mecànica"], "c": 1, "e": "El generador rep energia mecànica (gir de l’eix) i la transforma en energia elèctrica gràcies a la inducció."},
  {"p": "Quan s’indueix una fem en un conductor dins d’un camp magnètic?", "o": ["Sempre que hi ha un imant a prop", "Quan el conductor és quiet", "Quan el conductor es mou tallant les línies de camp", "Quan es mou paral·lel a les línies de camp"], "c": 2, "e": "Cal que el conductor talli línies de camp. Quiet o movent-se paral·lel al camp, ε = 0."},
  {"p": "Quina part del generador crea el camp magnètic?", "o": ["L’induït", "L’inductor", "Les escombretes", "El col·lector"], "c": 1, "e": "L’inductor crea el camp (imant permanent o electroimant). L’induït és on s’indueix la fem."},
  {"p": "En quina posició de l’espira la fem és màxima?", "o": ["Quan el pla de l’espira és perpendicular al camp", "Quan el pla de l’espira és paral·lel al camp", "Sempre és igual", "Quan l’espira s’atura"], "c": 1, "e": "Amb l’espira paral·lela al camp, els costats es mouen perpendiculars a les línies i les tallen de ple."},
  {"p": "Cada quant canvia de sentit la fem dins d’una espira que gira?", "o": ["Cada volta", "Cada mitja volta", "Cada quart de volta", "Mai"], "c": 1, "e": "Cada mitja volta, el costat que pujava passa a baixar i ε s’inverteix."},
  {"p": "Una espira gira amb dos anells col·lectors. Quin corrent arriba al circuit exterior?", "o": ["Continu", "Altern", "Cap", "Continu i constant"], "c": 1, "e": "Cada costat va sempre al mateix anell i a la mateixa escombreta: el corrent exterior canvia de sentit com dins l’espira. És un alternador."},
  {"p": "Quina peça converteix la CA de l’espira en CC a la sortida de la dinamo?", "o": ["L’inductor", "Les escombretes de grafit", "El col·lector de lamel·les", "La manovella"], "c": 2, "e": "Les lamel·les intercanvien la connexió de l’espira amb les escombretes cada mitja volta."},
  {"p": "En una dinamo, quan passen les escombretes d’una lamel·la a l’altra?", "o": ["Quan ε és màxima", "Quan ε = 0", "A l’atzar", "Només quan s’atura"], "c": 1, "e": "El canvi es fa just quan ε = 0, amb l’espira perpendicular al camp. Així el sentit a la sortida no canvia mai."},
  {"p": "Què vol dir que el corrent d’una dinamo d’una espira és continu polsant?", "o": ["Que canvia de sentit cada mitja volta", "Que va sempre en el mateix sentit, però el valor puja i baixa fins a 0", "Que és constant com el d’una pila", "Que només circula a mitja volta"], "c": 1, "e": "El col·lector evita el canvi de sentit, però no pot evitar que ε passi per 0 dues vegades a cada volta."},
  {"p": "Per què les dinamos reals tenen moltes espires i moltes lamel·les?", "o": ["Per girar més ràpid", "Perquè la CC sigui més constant (menys polsant)", "Per obtenir corrent altern", "Per no necessitar escombretes"], "c": 1, "e": "Les escombretes connecten sempre amb l’espira que té més ε, i la tensió ja no baixa fins a zero."},
  {"p": "L’inductor és un electroimant. Què passa si reduïm el corrent d’excitació?", "o": ["ε augmenta", "ε disminueix", "ε no canvia", "Passa a donar CA"], "c": 1, "e": "Menys corrent d’excitació vol dir un camp més feble, i per tant menys fem. Si el tallem, ε = 0."},
  {"p": "Per què costa més girar la manovella quan la bombeta està encesa?", "o": ["Perquè l’espira s’escalfa i pesa més", "Pel corrent induït, que s’oposa al gir (llei de Lenz)", "Perquè les escombretes es claven", "No costa més"], "c": 1, "e": "El corrent que circula per l’espira dins del camp rep forces contràries al gir. Aquest esforç extra és l’energia que obtenim."}
];

function crearQuestionari() {
  const form = FormApp.create(TITOL);
  form.setDescription(DESCRIPCIO)
      .setIsQuiz(true)
      .setCollectEmail(true)            // demana el correu de l'alumne
      .setShuffleQuestions(false)       // posa true per barrejar l'ordre de les preguntes
      .setProgressBar(true)
      .setConfirmationMessage('Respostes enviades. Revisa la puntuació i les explicacions.');

  PREGUNTES.forEach(function (q, i) {
    const item = form.addMultipleChoiceItem();
    item.setTitle((i + 1) + '. ' + q.p)
        .setPoints(1)
        .setRequired(true)
        .setChoices(q.o.map(function (text, j) { return item.createChoice(text, j === q.c); }));
    const fb = FormApp.createFeedback().setText(q.e).build();
    item.setFeedbackForCorrect(fb).setFeedbackForIncorrect(fb);
  });

  Logger.log('Formulari per editar: ' + form.getEditUrl());
  Logger.log('Enllaç per a l\'alumnat: ' + form.getPublishedUrl());
}
