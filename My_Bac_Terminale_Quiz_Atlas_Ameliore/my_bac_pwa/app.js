// MY BAC — version enrichie : premier chapitre HGGSP + Atlas thématique interactif
const subjects = {
  hggsp: {
    name: "HGGSP",
    description: "Histoire-géographie, géopolitique et sciences politiques",
    chapters: [
      {id:"conquete", title:"Thème 1 — De nouveaux espaces de conquête", subtitle:"Mers, océans et espace extra-atmosphérique", demo:true},
      {id:"guerre-paix", title:"Thème 2 — Faire la guerre, faire la paix", subtitle:"Formes de conflits et modes de résolution"},
      {id:"memoire", title:"Thème 3 — Histoire et mémoires", subtitle:"Histoire, mémoires et justice"},
      {id:"patrimoine", title:"Thème 4 — Identifier, protéger et valoriser le patrimoine", subtitle:"Enjeux géopolitiques de la préservation"},
      {id:"environnement", title:"Thème 5 — L’environnement, entre exploitation et protection", subtitle:"Un enjeu planétaire"},
      {id:"connaissance", title:"Thème 6 — L’enjeu de la connaissance", subtitle:"Production, diffusion et partage des savoirs"}
    ]
  },
  ses: {
    name:"SES", description:"Sciences économiques et sociales",
    chapters:[
      {id:"croissance",title:"Quels sont les sources et les défis de la croissance économique ?",subtitle:"Productivité, progrès technique et limites de la croissance"},
      {id:"commerce",title:"Quels sont les fondements du commerce international et de l'internationalisation de la production ?",subtitle:"Échanges, spécialisation et chaînes de valeur"},
      {id:"emploi",title:"Comment lutter contre le chômage ?",subtitle:"Marché du travail et politiques de l'emploi"},
      {id:"crises",title:"Comment expliquer les crises financières et réguler le système financier ?",subtitle:"Instabilité et régulation"},
      {id:"action",title:"Quelles politiques économiques dans le cadre européen ?",subtitle:"Politiques conjoncturelles et contraintes européennes"}
    ]
  },
  philo: {
    name:"Philosophie",description:"Notions, auteurs et méthodes pour le bac",
    chapters:[
      {id:"bonheur",title:"Le bonheur",subtitle:"Désir, plaisir et satisfaction"},
      {id:"liberte",title:"La liberté",subtitle:"Liberté, déterminisme et responsabilité"},
      {id:"verite",title:"La vérité",subtitle:"Opinion, raison et recherche de la vérité"},
      {id:"justice",title:"La justice",subtitle:"Droit, égalité et équité"},
      {id:"conscience",title:"La conscience",subtitle:"Conscience de soi et connaissance de soi"}
    ]
  }
};

const chapterOne = {
  intro: "Les océans et l’espace extra-atmosphérique sont deux espaces immenses, difficiles d’accès et longtemps considérés comme des milieux à explorer. Les progrès techniques ont progressivement permis aux sociétés de mieux les connaître et de les utiliser. Ils sont aujourd’hui essentiels aux échanges, à la recherche scientifique, aux activités économiques et à la défense.",
  sections: [
    {title:"1. Deux espaces immenses et difficiles à maîtriser", paragraphs:[
      "Les océans couvrent environ 71 % de la surface de la Terre. Ils comprennent des espaces très différents : mers bordières, grands bassins océaniques, fonds marins et zones côtières. L’espace extra-atmosphérique commence au-delà de l’atmosphère terrestre ; il est exploré grâce aux satellites, aux sondes et aux vols habités.",
      "Ces milieux sont difficiles d’accès. Dans les océans, la pression augmente avec la profondeur, l’obscurité devient totale et les conditions météorologiques peuvent compliquer les opérations. Dans l’espace, le vide, les rayonnements, les températures extrêmes et les distances imposent des technologies complexes.",
      "L’exploration et l’exploitation de ces espaces nécessitent des investissements considérables, des connaissances scientifiques spécialisées et des équipements performants : navires, sous-marins, plateformes, satellites, lanceurs et stations spatiales."
    ]},
    {title:"2. Des espaces stratégiques pour les États et les sociétés", paragraphs:[
      "Les océans sont au cœur de la mondialisation. Ils accueillent les grandes routes maritimes qui transportent une part majeure des marchandises échangées dans le monde. Ils fournissent aussi des ressources halieutiques, énergétiques et minérales. Certains espaces maritimes sont particulièrement stratégiques, notamment les détroits et les canaux qui concentrent les circulations.",
      "L’espace est devenu indispensable au fonctionnement des sociétés contemporaines. Les satellites permettent les télécommunications, la géolocalisation, les prévisions météorologiques, l’observation de la Terre et certaines activités militaires. Les infrastructures spatiales soutiennent donc les économies, les communications et la sécurité des États.",
      "La maîtrise de ces espaces contribue à la puissance. Elle dépend de capacités scientifiques, technologiques, économiques et militaires. Les États cherchent à garantir leur accès, à protéger leurs intérêts et à ne pas dépendre entièrement d'autres puissances."
    ]},
    {title:"3. Des espaces de rivalités et de coopération", paragraphs:[
      "Les océans et l’espace sont des lieux de compétition. Les États cherchent à sécuriser les routes maritimes, à accéder aux ressources, à affirmer leur présence et à développer des capacités stratégiques. Les progrès technologiques et l’arrivée de nouveaux acteurs, notamment des entreprises privées dans le secteur spatial, renouvellent ces rivalités.",
      "Ces espaces sont également des lieux de coopération. Les projets scientifiques sont coûteux et complexes ; ils peuvent être conduits en commun, comme le montre la Station spatiale internationale. Les États négocient aussi des règles afin d’encadrer les usages, de limiter les tensions et de préserver certains milieux.",
      "La question centrale est donc celle de l’équilibre entre appropriation, liberté d’accès, compétition, coopération et protection."
    ]}
  ],
  notions: [
    ["Espace maritime","Ensemble des mers et des océans, comprenant les eaux, les fonds marins et les espaces côtiers."],
    ["Espace extra-atmosphérique","Espace situé au-delà de l’atmosphère terrestre, exploré notamment à l’aide de satellites et de véhicules spatiaux."],
    ["Puissance","Capacité d’un acteur à agir, à influencer d’autres acteurs et à défendre ses intérêts."],
    ["Ressource stratégique","Ressource considérée comme essentielle aux intérêts économiques, politiques, scientifiques ou militaires d’un acteur."],
    ["Géopolitique","Étude des rivalités de pouvoir et des rapports de force liés aux territoires et aux espaces."],
    ["Coopération internationale","Action menée conjointement par plusieurs États ou acteurs afin d’atteindre un objectif commun."],
    ["Mondialisation","Processus de mise en relation croissante des territoires par les échanges et les circulations."]
  ],
  examples: [
    ["Routes maritimes","Les grandes routes maritimes relient les principaux pôles de production et de consommation ; les détroits et canaux sont des passages stratégiques."],
    ["Satellites","Ils assurent des fonctions de télécommunication, de géolocalisation, de météorologie et d’observation de la Terre."],
    ["Station spatiale internationale","La Station spatiale internationale (ISS), dont la construction débute en 1998, illustre une coopération scientifique internationale."],
    ["Ressources océaniques","La pêche, les hydrocarbures offshore et certains minerais suscitent des convoitises, mais leur exploitation pose aussi des questions environnementales."]
  ],
  sheet: [
    ["Pourquoi ces espaces sont-ils difficiles à maîtriser ?","Ils sont immenses, hostiles et difficiles d’accès ; leur exploration exige des technologies avancées et des investissements importants."],
    ["Pourquoi sont-ils stratégiques ?","Ils offrent des ressources, accueillent des circulations essentielles et fournissent des services indispensables aux sociétés."],
    ["Pourquoi sont-ils des espaces de puissance ?","Leur maîtrise renforce les capacités économiques, scientifiques, technologiques et militaires des États."],
    ["Pourquoi suscitent-ils des coopérations ?","Les coûts, les risques et les enjeux communs encouragent les projets scientifiques et l’élaboration de règles internationales."],
    ["Idée centrale","Océans et espace sont à la fois des espaces de rivalités, de coopération, d’exploitation et de protection."]
  ],
  questions: [
    {q:"Quelle part approximative de la surface terrestre est couverte par les océans ?",opts:["Environ 30 %","Environ 51 %","Environ 71 %"],a:2,why:"Les océans couvrent environ 71 % de la surface de la Terre."},
    {q:"Lequel de ces éléments est un usage courant des satellites ?",opts:["La géolocalisation","La pêche au chalut","Le transport de conteneurs"],a:0,why:"Les satellites permettent notamment la géolocalisation, les télécommunications, la météorologie et l'observation de la Terre."},
    {q:"Pourquoi les océans sont-ils essentiels à la mondialisation ?",opts:["Ils empêchent les échanges","Ils accueillent de grandes routes maritimes","Ils remplacent les frontières terrestres"],a:1,why:"Les routes maritimes relient les grands pôles de production et de consommation et transportent une grande partie des marchandises échangées."},
    {q:"Quel exemple illustre une coopération scientifique dans l'espace ?",opts:["La Station spatiale internationale","Le canal de Suez","Une zone économique exclusive"],a:0,why:"La Station spatiale internationale est un projet de coopération scientifique entre plusieurs partenaires."},
    {q:"La maîtrise des océans et de l'espace contribue-t-elle à la puissance des États ?",opts:["Oui, sur les plans économique, scientifique et stratégique","Non, uniquement sur le plan touristique","Non, ces espaces n'ont aucun rôle politique"],a:0,why:"La maîtrise de ces espaces mobilise des capacités technologiques, économiques, scientifiques et militaires."},
    {q:"Pourquoi les États élaborent-ils des règles internationales pour ces espaces ?",opts:["Pour supprimer toute exploration","Pour encadrer les usages, organiser la coopération et limiter les tensions","Pour attribuer tous les océans à un seul pays"],a:1,why:"Les règles internationales contribuent à organiser les usages et à encadrer les rivalités, même si elles ne les font pas disparaître."}
  ]
};

function shuffleQuizQuestions(questions){
  const copy=questions.map(question=>{const q={...question,opts:[...question.opts]};const indexed=q.opts.map((value,index)=>({value,index}));for(let i=indexed.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[indexed[i],indexed[j]]=[indexed[j],indexed[i]];}q.opts=indexed.map(x=>x.value);q.a=indexed.findIndex(x=>x.index===question.a);return q;});
  for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]];}return copy;
}

// Compléments du quiz du thème 1 : notions, droit et mise en situation.
chapterOne.questions.push(
 {q:'Quelle distinction faut-il faire entre la mer territoriale et la ZEE ?',opts:['La mer territoriale relève de la souveraineté de l’État côtier, tandis que la ZEE lui donne des droits souverains définis sur les ressources','La ZEE est une portion de territoire terrestre','Les deux expressions désignent exactement le même espace'],a:0,why:'La mer territoriale peut s’étendre jusqu’à 12 milles marins et relève de la souveraineté de l’État côtier ; la ZEE peut aller jusqu’à 200 milles marins et confère des droits souverains sur les ressources.'},
 {q:'Quel traité encadre les activités des États dans l’espace extra-atmosphérique depuis 1967 ?',opts:['Le traité de l’Antarctique','Le traité de l’espace de 1967','La Convention de Montego Bay'],a:1,why:'Le traité de l’espace de 1967 encadre l’exploration et l’utilisation de l’espace extra-atmosphérique et interdit son appropriation nationale.'},
 {q:'Pourquoi les câbles sous-marins sont-ils devenus stratégiques ?',opts:['Ils transportent une grande partie des communications numériques intercontinentales','Ils servent uniquement à la pêche industrielle','Ils remplacent les satellites pour toutes les communications'],a:0,why:'Les câbles sous-marins constituent une infrastructure essentielle des échanges numériques mondiaux ; leur protection est donc un enjeu stratégique.'},
 {q:'Une entreprise privée développe des lanceurs spatiaux. Quelle évolution cela illustre-t-il ?',opts:['La disparition des États dans le domaine spatial','La diversification des acteurs de la conquête spatiale','L’interdiction de la coopération internationale'],a:1,why:'Les entreprises privées prennent une place croissante, mais les États demeurent des acteurs majeurs du financement, de la régulation et des stratégies spatiales.'},
 {q:'Quel est l’enjeu central de la gouvernance des océans et de l’espace ?',opts:['Concilier accès, usages, rivalités, coopération et protection','Attribuer tous les espaces à un seul État','Supprimer toute règle internationale'],a:0,why:'Ces espaces sont à la fois stratégiques et partagés ; leur gouvernance cherche à encadrer les usages et à limiter les tensions.'},
 {q:'La Station spatiale internationale illustre principalement…',opts:['Une appropriation nationale exclusive','Une coopération scientifique internationale','Une frontière maritime contestée'],a:1,why:'L’ISS est un programme de coopération entre plusieurs partenaires, dont la construction débute en 1998.'}
);

const atlasTopics = {
  space: {
    title:"La conquête spatiale",
    intro:"L'espace est devenu un domaine de recherche, de services et d'affirmation de puissance. Explore les grandes étapes et les acteurs.",
    layers:[["milestones","Repères chronologiques"],["actors","Acteurs spatiaux"],["uses","Usages des satellites"]],
    facts:{
      milestones:["1957 : l’URSS place Spoutnik 1, premier satellite artificiel, en orbite.","1961 : Youri Gagarine devient le premier humain dans l’espace.","1969 : Apollo 11 permet aux premiers humains de marcher sur la Lune.","1998 : début de l’assemblage de la Station spatiale internationale."],
      actors:["États-Unis et URSS sont les deux grandes puissances de la première course à l’espace.","La Chine et l’Inde développent des programmes spatiaux importants.","Les entreprises privées prennent une place croissante dans le lancement et les services spatiaux."],
      uses:["Télécommunications et diffusion de données.","Géolocalisation et navigation.","Météorologie et observation de la Terre.","Applications scientifiques et militaires."]
    }
  },
  oceans: {
    title:"Les mers et les océans",
    intro:"Les espaces maritimes concentrent les échanges, des ressources et des enjeux de souveraineté. Les filtres permettent d’explorer les principaux thèmes.",
    layers:[["routes","Routes et passages stratégiques"],["resources","Ressources marines"],["law","Droit de la mer"]],
    facts:{
      routes:["Les grandes routes maritimes relient l’Asie orientale, l’Europe et l’Amérique du Nord.","Les détroits de Malacca, d’Ormuz et de Bab el-Mandeb sont des passages stratégiques.","Les canaux de Suez et de Panama raccourcissent certaines routes maritimes."],
      resources:["Les ressources halieutiques proviennent de la pêche et de l’aquaculture.","Les hydrocarbures offshore sont exploités en mer.","Les fonds marins suscitent des intérêts miniers, mais leur exploitation soulève des enjeux environnementaux."],
      law:["La Convention des Nations unies sur le droit de la mer est adoptée en 1982 à Montego Bay.","La zone économique exclusive peut s’étendre jusqu’à 200 milles marins des lignes de base, sous réserve des règles applicables.","La haute mer se situe au-delà des juridictions nationales."]
    }
  },
  china: {
    title:"La Chine, puissance maritime et spatiale",
    intro:"La Chine cherche à renforcer sa présence dans les mers, les océans et l’espace. Cette affirmation a des dimensions économiques, scientifiques et stratégiques.",
    layers:[["maritime","Présence maritime"],["spaceprogram","Programme spatial"],["trade","Échanges et infrastructures"]],
    facts:{
      maritime:["La Chine développe sa marine et affirme ses intérêts en mer de Chine méridionale.","Les revendications maritimes en mer de Chine méridionale suscitent des tensions avec plusieurs États riverains.","Les routes maritimes sont essentielles à son commerce extérieur."],
      spaceprogram:["La Chine a envoyé son premier taïkonaute dans l’espace en 2003.","Elle a développé sa propre station spatiale, Tiangong.","Son programme lunaire et ses capacités satellitaires renforcent son statut de puissance spatiale."],
      trade:["Les ports chinois occupent une place majeure dans les échanges mondiaux.","Les infrastructures portuaires et les routes commerciales s’inscrivent dans la stratégie internationale de la Chine.","La sécurisation des approvisionnements et des routes maritimes constitue un enjeu important."]
    }
  }
};

let currentSubject="hggsp",currentChapter=null,currentTab="course",quizIndex=0,quizScore=0,activeQuestions=[],atlasTopic="space",atlasLayer="milestones";
let state;
try { state=JSON.parse(localStorage.getItem("myBacState")||'{"points":0,"quizzes":0,"review":[],"done":[]}'); }
catch(e){ state={points:0,quizzes:0,review:[],done:[]}; }
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function save(){localStorage.setItem("myBacState",JSON.stringify(state));renderStats()}
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2300)}
function page(name){$$(".page").forEach(p=>p.classList.toggle("active",p.id==="page-"+name));$$(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.page===name));window.scrollTo({top:0,behavior:"smooth"})}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function renderStats(){
 ["top-points","home-points","progress-points"].forEach(id=>$("#"+id).textContent=state.points||0);
 ["home-quizzes","progress-quizzes"].forEach(id=>$("#"+id).textContent=state.quizzes||0);
 ["home-review","progress-review"].forEach(id=>$("#"+id).textContent=(state.review||[]).length);
 const box=$("#review-list");
 box.innerHTML=state.review.length?state.review.map((x,i)=>`<div class="review-item">🔁 ${escapeHtml(x)} <button class="text-btn" data-remove-review="${i}">Retirer</button></div>`).join(""):'<p class="empty-state">Rien à revoir pour le moment. Tu peux commencer par un quiz ! ✨</p>';
}
function showSubject(id){
 currentSubject=id;const s=subjects[id];$("#subject-eyebrow").textContent=s.name;$("#subject-title").textContent=s.name;$("#subject-description").textContent=s.description;
 $("#chapter-list").innerHTML=s.chapters.map((c,i)=>`<button class="chapter-card" data-chapter="${c.id}"><span class="chapter-number">${String(i+1).padStart(2,"0")}</span><div><b>${escapeHtml(c.title)}</b><small>${escapeHtml(c.subtitle)}</small></div><strong>→</strong></button>`).join("");page("chapters");
}
function showChapter(id){
 const c=subjects[currentSubject].chapters.find(x=>x.id===id);if(!c)return;currentChapter=c;$("#chapter-subject").textContent=subjects[currentSubject].name;$("#chapter-title").textContent=c.title;$("#chapter-subtitle").textContent=c.subtitle;
 currentTab="course";$$(".tab").forEach(t=>t.classList.toggle("active",t.dataset.tab==="course"));renderChapterTab();page("chapter");
}
function renderChapterTab(){
 const c=currentChapter,content=$("#chapter-content");
 if(currentSubject==="hggsp"&&c.id==="conquete"){
  if(currentTab==="course"){
   content.innerHTML=`<h3>Introduction — Océan et espace : quelles spécificités ?</h3><p>${chapterOne.intro}</p>${chapterOne.sections.map(s=>`<h3>${s.title}</h3>${s.paragraphs.map(p=>`<p>${p}</p>`).join("")}`).join("")}<h3>Notions essentielles</h3><div class="notion-grid">${chapterOne.notions.map(n=>`<div class="notion-card"><b>${n[0]}</b><p>${n[1]}</p></div>`).join("")}</div><h3>Exemples à mobiliser</h3>${chapterOne.examples.map(e=>`<div class="example-item"><b>${e[0]}</b><p>${e[1]}</p></div>`).join("")}<div class="notice"><b>Problématique à retenir</b><p>Pourquoi les océans et l’espace sont-ils devenus des espaces majeurs de puissance, de rivalités et de coopération ?</p></div><button class="primary-btn" data-tab="sheet">Voir ma fiche de révision →</button>`;
  } else if(currentTab==="sheet"){
   content.innerHTML=`<h3>Fiche de révision — L’essentiel</h3><p class="sheet-lead">Océans et espace sont deux milieux immenses et difficiles d’accès, devenus essentiels aux sociétés et aux stratégies des États.</p>${chapterOne.sheet.map(x=>`<div class="sheet-point"><b>${x[0]}</b><p>${x[1]}</p></div>`).join("")}<h3>Notions à mémoriser</h3><div class="notion-grid">${chapterOne.notions.map(n=>`<div class="notion-card"><b>${n[0]}</b><p>${n[1]}</p></div>`).join("")}</div><h3>Exemples</h3>${chapterOne.examples.map(e=>`<div class="example-item"><b>${e[0]}</b><p>${e[1]}</p></div>`).join("")}<button class="primary-btn" data-tab="quiz">Je m’entraîne →</button>`;
  } else {
   content.innerHTML=`<h3>Quiz — Océan et espace</h3><p>6 questions pour vérifier les notions essentielles. Chaque réponse est suivie d’une explication.</p><div class="quiz-start-card"><span>🎯</span><div><b>Prête à tester tes connaissances ?</b><p>Une bonne réponse rapporte 10 étoiles.</p></div></div><button class="primary-btn" id="start-chapter-quiz">Lancer le quiz →</button>`;
   $("#start-chapter-quiz").addEventListener("click",startQuiz);
  }
 } else {
  content.innerHTML=`<h3>${escapeHtml(c.title)}</h3><p>Le chapitre est prévu dans le programme de My Bac. Son cours détaillé, sa fiche et son quiz seront ajoutés après vérification des ressources du programme officiel.</p><div class="notice"><b>À venir</b><p>Cette partie n’est pas encore un cours de révision complet. Ne l’utilise pas comme substitut à ton cours de terminale.</p></div>`;
 }
}
function startQuiz(){activeQuestions=shuffleQuizQuestions(chapterOne.questions);quizIndex=0;quizScore=0;renderQuestion();page("chapter")}
function renderQuestion(){
 const q=activeQuestions[quizIndex];if(!q){finishQuiz();return}
 $("#chapter-content").innerHTML=`<div class="eyebrow">QUESTION ${quizIndex+1} / ${activeQuestions.length}</div><div class="quiz-progress"><span style="width:${(quizIndex/activeQuestions.length)*100}%"></span></div><h3>${q.q}</h3><div class="quiz-options">${q.opts.map((o,i)=>`<button class="chapter-card quiz-option" data-answer="${i}"><span class="chapter-number">${String.fromCharCode(65+i)}</span><b>${o}</b><strong>›</strong></button>`).join("")}</div><p id="quiz-feedback"></p>`;
}
function answerQuiz(i){
 const q=activeQuestions[quizIndex],correct=i===q.a;
 if(correct){quizScore++;state.points+=10}else if(!state.review.includes(q.q)){state.review.push(q.q)}
 save();
 $("#quiz-feedback").innerHTML=`<div class="notice"><b>${correct?"✨ Bonne réponse !":"On retient la correction !"}</b><p>${q.why}</p><button class="primary-btn" id="next-question">${quizIndex===activeQuestions.length-1?"Voir mon résultat":"Question suivante"} →</button></div>`;
 $$(".quiz-option").forEach(b=>b.disabled=true);
 $("#next-question").addEventListener("click",()=>{quizIndex++;renderQuestion()});
}
function finishQuiz(){
 state.quizzes++;if(quizScore===activeQuestions.length){state.review=state.review.filter(x=>!activeQuestions.some(q=>q.q===x))}
 state.done=state.done||[];if(!state.done.includes("hggsp-conquete-intro"))state.done.push("hggsp-conquete-intro");save();
 $("#chapter-content").innerHTML=`<div style="text-align:center;padding:20px"><div style="font-size:48px">🌟</div><h3>Bravo, quiz terminé !</h3><p>Tu as obtenu <b>${quizScore} / ${activeQuestions.length}</b>.</p><p>${quizScore===activeQuestions.length?"Excellent travail !":"Chaque erreur est une occasion de progresser."}</p><button class="primary-btn" id="replay-quiz">Recommencer</button></div>`;
 $("#replay-quiz").addEventListener("click",startQuiz);
}
function renderAtlasTopic(topic){
 atlasTopic=topic;const d=atlasTopics[topic];atlasLayer=d.layers[0][0];
 $("#atlas-topic-title").textContent=d.title;$("#atlas-topic-description").textContent=d.intro;
 $("#atlas-topic-tabs").innerHTML=Object.entries(atlasTopics).map(([k,v])=>`<button class="atlas-topic-btn ${k===topic?"active":""}" data-atlas-topic="${k}">${v.title}</button>`).join("");
 $("#atlas-layer-list").innerHTML=d.layers.map(l=>`<button class="atlas-layer-btn ${l[0]===atlasLayer?"active":""}" data-atlas-layer="${l[0]}">${l[1]}</button>`).join("");
 renderAtlasLayer();
}
function renderAtlasLayer(){
 const d=atlasTopics[atlasTopic],layer=d.layers.find(x=>x[0]===atlasLayer)||d.layers[0];
 $("#atlas-layer-heading").textContent=layer[1];
 $("#atlas-facts").innerHTML=d.facts[atlasLayer].map((f,i)=>`<button class="atlas-fact" data-atlas-fact="${i}"><span class="fact-number">${String(i+1).padStart(2,"0")}</span><span>${f}</span><span>＋</span></button>`).join("");
 $("#atlas-fact-detail").textContent="Sélectionne un repère pour le mettre en évidence et l’utiliser comme point de départ de ta révision.";
}
function renderAtlas(v){
 const d={
 "1914":["L’Europe en 1914","À la veille de la Première Guerre mondiale, l’Europe est marquée par plusieurs empires, notamment les empires allemand, austro-hongrois, russe et ottoman. Ce visuel reste un schéma de repérage et ne représente pas les frontières exactes."],
 "1919":["L’Europe après les traités de paix","Les traités conclus après la Première Guerre mondiale transforment les frontières européennes. Les empires allemand, austro-hongrois, russe et ottoman sont profondément transformés ou disparaissent sous leur forme impériale."],
 "1945":["L’Europe en 1945","La Seconde Guerre mondiale entraîne de nouvelles modifications territoriales et un déplacement des rapports de force. L’Europe est progressivement divisée en deux grands blocs dominés par les États-Unis et l’URSS."],
 "1991":["La fin de la guerre froide","La disparition de l’URSS en 1991 entraîne l’indépendance de quinze républiques et transforme la carte politique de l’Europe et de l’Asie."],
 "today":["Les frontières aujourd’hui","Les frontières contemporaines résultent de constructions historiques, de rapports de force, de négociations et parfois de conflits. Il faut distinguer les frontières reconnues et les territoires disputés."]
 }[v];
 $("#map-year").textContent=v==="today"?"Aujourd’hui":v;$("#atlas-title").textContent=d[0];$("#atlas-text").textContent=d[1];
 $("#atlas-timeline").innerHTML=Object.keys({"1914":1,"1919":1,"1945":1,"1991":1,"today":1}).map(k=>`<button class="${k===v?"active":""}" data-period="${k}">${k==="today"?"Aujourd’hui":k}</button>`).join("");
}
document.addEventListener("click",e=>{
 const p=e.target.closest("[data-page]");if(p){e.preventDefault();page(p.dataset.page);return}
 const s=e.target.closest("[data-subject]");if(s){showSubject(s.dataset.subject);return}
 const c=e.target.closest("[data-chapter]");if(c){showChapter(c.dataset.chapter);return}
 const t=e.target.closest("[data-tab]");if(t){currentTab=t.dataset.tab;$$(".tab").forEach(x=>x.classList.toggle("active",x.dataset.tab===currentTab));renderChapterTab();return}
 const a=e.target.closest("[data-answer]");if(a){answerQuiz(Number(a.dataset.answer));return}
 const period=e.target.closest("[data-period]");if(period){renderAtlas(period.dataset.period);$("#atlas-period").value=period.dataset.period;return}
 const at=e.target.closest("[data-atlas-topic]");if(at){renderAtlasTopic(at.dataset.atlasTopic);return}
 const al=e.target.closest("[data-atlas-layer]");if(al){atlasLayer=al.dataset.atlasLayer;$$(".atlas-layer-btn").forEach(b=>b.classList.toggle("active",b===al));renderAtlasLayer();return}
 const af=e.target.closest("[data-atlas-fact]");if(af){const fact=atlasTopics[atlasTopic].facts[atlasLayer][Number(af.dataset.atlasFact)];$("#atlas-fact-detail").textContent=fact;$$(".atlas-fact").forEach(b=>b.classList.toggle("active",b===af));return}
 const rm=e.target.closest("[data-remove-review]");if(rm){state.review.splice(Number(rm.dataset.removeReview),1);save();return}
 if(e.target.closest("[data-open-demo-quiz]")){currentSubject="hggsp";currentChapter=subjects.hggsp.chapters[0];$("#chapter-subject").textContent="HGGSP";$("#chapter-title").textContent="Thème 1 — De nouveaux espaces de conquête";$("#chapter-subtitle").textContent="Quiz — Océan et espace";currentTab="quiz";startQuiz();return}
});
$("#back-chapters").addEventListener("click",()=>page("chapters"));
$("#atlas-period").addEventListener("change",e=>renderAtlas(e.target.value));
$("#mascot-button").addEventListener("click",()=>toast("Tu avances à ton rythme : chaque petite révision compte ! ⭐"));
$("#reset-progress").addEventListener("click",()=>{if(confirm("Effacer les points, quiz et notions à revoir sur cet appareil ?")){state.points=0;state.quizzes=0;state.review=[];state.done=[];save();toast("Progression réinitialisée.")}});
renderStats();renderAtlas("1914");renderAtlasTopic("space");
