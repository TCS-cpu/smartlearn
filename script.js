const questions = {
  math: [
    {question:"Solve: 2x + 6 = 16. What is x?",options:["4","5","6","8"],answer:1,explanation:"Subtract 6 from both sides: 2x = 10. Divide by 2, so x = 5."},
    {question:"What is the square root of 144?",options:["10","11","12","14"],answer:2,explanation:"12 × 12 = 144, so the square root is 12."},
    {question:"A triangle has angles of 50° and 60°. What is the third angle?",options:["60°","70°","80°","90°"],answer:1,explanation:"Triangle angles total 180°. Therefore, 180° − 50° − 60° = 70°."}
  ],
  science: [
    {question:"Which organ pumps blood around the human body?",options:["Lungs","Brain","Heart","Kidneys"],answer:2,explanation:"The heart pumps blood through blood vessels to the body."},
    {question:"What is the chemical formula for water?",options:["CO2","H2O","O2","NaCl"],answer:1,explanation:"Water contains two hydrogen atoms and one oxygen atom."},
    {question:"Which process allows plants to make their own food?",options:["Respiration","Digestion","Photosynthesis","Evaporation"],answer:2,explanation:"Photosynthesis uses light energy to make food from water and carbon dioxide."}
  ],
  english: [
    {question:"Choose the correct sentence.",options:["She go to school every day.","She goes to school every day.","She going to school every day.","She gone to school every day."],answer:1,explanation:"In the simple present tense, he, she, and it usually take a verb ending in -s or -es."},
    {question:"What is the past tense of 'write'?",options:["Writed","Written","Wrote","Writing"],answer:2,explanation:"'Wrote' is the simple past tense. 'Written' is the past participle."},
    {question:"Which word is closest in meaning to 'rapid'?",options:["Slow","Fast","Quiet","Weak"],answer:1,explanation:"'Rapid' means fast or happening quickly."}
  ],
  indonesia: [
    {question:"Kalimat manakah yang menggunakan majas personifikasi?",options:["Adik berlari sangat cepat.","Angin berbisik di antara pepohonan.","Ibu membeli sayuran.","Ayah membaca koran."],answer:1,explanation:"Personifikasi memberikan sifat manusia kepada benda atau alam. Angin digambarkan dapat berbisik."},
    {question:"Apa tujuan utama teks eksplanasi?",options:["Menghibur pembaca dengan cerita khayalan","Menjelaskan proses terjadinya suatu fenomena","Mempromosikan sebuah produk","Menggambarkan tokoh fiksi"],answer:1,explanation:"Teks eksplanasi menjelaskan bagaimana atau mengapa suatu fenomena terjadi."},
    {question:"Manakah contoh kalimat efektif?",options:["Para siswa-siswa sedang belajar.","Agar supaya sehat, kita berolahraga.","Para siswa sedang belajar.","Banyak anak-anak sedang bermain."],answer:2,explanation:"'Para siswa sedang belajar' efektif karena tidak menggunakan penanda jamak secara berlebihan."}
  ]
};

const subjectNames = {math:"Mathematics",science:"Science",english:"English",indonesia:"Indonesian"};
const badgeDefinitions = [
  {id:"first",icon:"🌟",name:"First Steps",description:"Complete your first quiz."},
  {id:"perfect",icon:"🎯",name:"Perfect Score",description:"Answer every question correctly in one quiz."},
  {id:"scholar",icon:"📚",name:"Rising Scholar",description:"Earn 100 total XP."},
  {id:"master",icon:"🏆",name:"Quiz Master",description:"Reach Level 5."}
];

function loadProgress(){
  try {
    const saved=JSON.parse(localStorage.getItem("smartlearnProgress"));
    if(saved&&Number.isFinite(saved.xp)&&saved.xp>=0&&Array.isArray(saved.badges)&&saved.badges.every(id=>badgeDefinitions.some(b=>b.id===id))){
      return {xp:saved.xp,badges:[...new Set(saved.badges)],quizzes:Number.isInteger(saved.quizzes)&&saved.quizzes>=0?saved.quizzes:0};
    }
  } catch(error){console.warn("Could not load saved progress.",error);}
  return {xp:0,badges:[],quizzes:0};
}
let progress=loadProgress(),currentSubject="",currentQuestions=[],currentIndex=0,correctCount=0,answered=false,earnedThisQuiz=0,newlyEarned=[];
function getLevel(xp){return Math.floor(xp/50)+1;}
function saveProgress(){try{localStorage.setItem("smartlearnProgress",JSON.stringify(progress));}catch(error){console.warn("Progress could not be saved.",error);}}
function updateDashboard(){
  const level=getLevel(progress.xp);
  document.getElementById("headerXP").textContent=progress.xp;
  document.getElementById("headerLevel").textContent=level;
  document.getElementById("totalXP").textContent=progress.xp;
  document.getElementById("currentLevel").textContent="Level "+level;
  document.getElementById("badgeCount").textContent=progress.badges.length;
  renderBadges();
}
function renderBadges(){
  const container=document.getElementById("badgesList");container.replaceChildren();
  badgeDefinitions.forEach(badge=>{
    const unlocked=progress.badges.includes(badge.id),card=document.createElement("div");
    card.className="badge-item"+(unlocked?"":" locked");
    const icon=document.createElement("div");icon.className="badge-icon";icon.textContent=badge.icon;
    const name=document.createElement("p");name.textContent=badge.name;
    const description=document.createElement("small");description.textContent=unlocked?"Unlocked!":badge.description;
    card.append(icon,name,description);container.appendChild(card);
  });
}
function awardBadge(id){
  if(progress.badges.includes(id))return;
  progress.badges.push(id);
  const badge=badgeDefinitions.find(item=>item.id===id);
  if(badge)newlyEarned.push(badge);
}
function showHome(){
  document.getElementById("homeScreen").classList.remove("hidden");
  document.getElementById("quizScreen").classList.add("hidden");
  document.getElementById("resultScreen").classList.add("hidden");
  updateDashboard();window.scrollTo({top:0,behavior:"smooth"});
}
function startQuiz(subject){
  if(!questions[subject])return;
  currentSubject=subject;currentQuestions=questions[subject];currentIndex=0;correctCount=0;answered=false;earnedThisQuiz=0;newlyEarned=[];
  document.getElementById("homeScreen").classList.add("hidden");
  document.getElementById("resultScreen").classList.add("hidden");
  document.getElementById("quizScreen").classList.remove("hidden");
  document.getElementById("quizSubject").textContent=subjectNames[subject].toUpperCase();
  renderQuestion();window.scrollTo({top:0,behavior:"smooth"});
}
function renderQuestion(){
  const question=currentQuestions[currentIndex];answered=false;
  document.getElementById("questionNumber").textContent=`Question ${currentIndex+1} of ${currentQuestions.length}`;
  document.getElementById("questionText").textContent=question.question;
  document.getElementById("progressBar").style.width=`${(currentIndex/currentQuestions.length)*100}%`;
  const feedback=document.getElementById("feedback");feedback.className="feedback hidden";feedback.textContent="";
  const next=document.getElementById("nextBtn");next.classList.add("hidden");next.textContent=currentIndex===currentQuestions.length-1?"See results →":"Next question →";
  const optionsContainer=document.getElementById("answerOptions");optionsContainer.replaceChildren();
  question.options.forEach((option,index)=>{
    const button=document.createElement("button");button.className="answer-btn";button.textContent=String.fromCharCode(65+index)+". "+option;
    button.addEventListener("click",()=>checkAnswer(index));optionsContainer.appendChild(button);
  });
}
function checkAnswer(selectedIndex){
  if(answered)return;answered=true;
  const question=currentQuestions[currentIndex],buttons=document.querySelectorAll(".answer-btn"),isCorrect=selectedIndex===question.answer,feedback=document.getElementById("feedback");
  buttons.forEach((button,index)=>{button.disabled=true;if(index===question.answer)button.classList.add("correct");else if(index===selectedIndex)button.classList.add("wrong");});
  if(isCorrect){correctCount++;earnedThisQuiz+=10;feedback.textContent="✓ Correct! "+question.explanation;feedback.className="feedback correct";}
  else{feedback.textContent="✗ Not quite. "+question.explanation;feedback.className="feedback wrong";}
  document.getElementById("progressBar").style.width=`${((currentIndex+1)/currentQuestions.length)*100}%`;
  document.getElementById("nextBtn").classList.remove("hidden");
}
function nextQuestion(){
  if(!answered)return;
  if(currentIndex<currentQuestions.length-1){currentIndex++;renderQuestion();}else{finishQuiz();}
}
function finishQuiz(){
  earnedThisQuiz+=5;progress.xp+=earnedThisQuiz;progress.quizzes++;awardBadge("first");
  if(correctCount===currentQuestions.length)awardBadge("perfect");
  if(progress.xp>=100)awardBadge("scholar");
  if(getLevel(progress.xp)>=5)awardBadge("master");
  saveProgress();updateDashboard();
  document.getElementById("quizScreen").classList.add("hidden");document.getElementById("resultScreen").classList.remove("hidden");
  const percentage=Math.round(correctCount/currentQuestions.length*100);let title="Keep practicing!",message="Every question is a chance to learn something new.";
  if(percentage===100){title="Perfect score!";message="Amazing! You answered every question correctly.";}
  else if(percentage>=70){title="Great work!";message="You are making excellent progress. Keep it up!";}
  else if(percentage>=40){title="Good effort!";message="Review the explanations and try another challenge.";}
  document.getElementById("resultTitle").textContent=title;document.getElementById("resultMessage").textContent=message;
  document.getElementById("finalCorrect").textContent=`${correctCount}/${currentQuestions.length}`;
  document.getElementById("earnedXP").textContent=`+${earnedThisQuiz} XP`;
  const badgeContainer=document.getElementById("newBadges");badgeContainer.replaceChildren();
  if(newlyEarned.length===0){const msg=document.createElement("p");msg.className="muted";msg.textContent="Keep going to unlock new badges!";badgeContainer.appendChild(msg);}
  else newlyEarned.forEach(badge=>{const item=document.createElement("div");item.className="badge-item";const icon=document.createElement("div");icon.className="badge-icon";icon.textContent=badge.icon;const name=document.createElement("p");name.textContent=badge.name;item.append(icon,name);badgeContainer.appendChild(item);});
  window.scrollTo({top:0,behavior:"smooth"});
}
function resetProgress(){
  if(!window.confirm("Reset all XP, levels, and badges? This cannot be undone."))return;
  progress={xp:0,badges:[],quizzes:0};saveProgress();updateDashboard();
}
updateDashboard();
