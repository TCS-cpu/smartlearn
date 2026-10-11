/*
 * SmartLearn practice room.
 * Add subjects in subjectCatalog and add real questions in questionBank.
 * answer is the zero-based option index: 0=A, 1=B, 2=C, 3=D.
 * No XP, levels, badges, or saved score system is used in this version.
 */
const subjectCatalog = {
  Theo: {
    grade: 8,
    subjects: [
      {name:"Bahasa Indonesia", icon:"📘", sets:4},
      {name:"Matematika", icon:"📐", sets:2},
      {name:"Biologi", icon:"🧬", sets:0},
      {name:"Fisika", icon:"⚛️", sets:0},
      {name:"Bahasa Inggris", icon:"GB", sets:0},
      {name:"PPKN", icon:"ID", sets:1},
      {name:"IPS", icon:"🌏", sets:0},
      {name:"Prakarya", icon:"🛠️", sets:0},
      {name:"Bahasa Jepang", icon:"JP", sets:2},
      {name:"Bahasa Sunda", icon:"🗣️", sets:0},
      {name:"PJOK", icon:"🏃", sets:1}
    ]
  },
  Timothy: {
    grade: 5,
    subjects: [
      {name:"Bahasa Indonesia", icon:"📘", sets:0},
      {name:"Bahasa Inggris", icon:"GB", sets:0},
      {name:"Bahasa Sunda", icon:"🗣️", sets:0},
      {name:"Mandarin", icon:"文", sets:0},
      {name:"Matematika", icon:"📐", sets:0},
      {name:"IPAS", icon:"🌱", sets:0},
      {name:"PPKN", icon:"🇮🇩", sets:0}
    ]
  }
};

// Question sets are intentionally empty until the user's real materials/questions are supplied.
// Example structure is shown below in the commented sample.
const questionBank = {
  Theo: {
    "PPKN": {
      1: [
        {question:"Kata “konstitusi” berasal dari bahasa Latin yang artinya ...", options:["Menetapkan","Mengembalikan","Menghimpun","Menutup"], answer:0, explanation:"Konstitusi berasal dari kata yang bermakna menetapkan atau membentuk."},
        {question:"Secara keseluruhan, pengertian konstitusi adalah ...", options:["Kumpulan norma sosial masyarakat yang berlaku","Peraturan yang berlaku di waktu tertentu dan tidak dibatasi","Aturan yang dibuat pejabat pemerintah daerah yang berwenang","Kumpulan dokumen (tertulis/tidak tertulis) yang membentuk sistem pemerintahan"], answer:3, explanation:"Konstitusi mencakup aturan dasar tertulis maupun tidak tertulis yang mengatur penyelenggaraan negara."},
        {question:"Tujuan pembentukan konstitusi adalah ...", options:["Menegaskan aturan yang melindungi hak negara saja","Memberikan kebebasan tanpa batas bagi warga negara","Mengatur semua aturan penyelenggara negara secara terperinci","Membatasi tindakan sewenang-wenang pemerintah"], answer:3, explanation:"Konstitusi membatasi kekuasaan agar pemerintah tidak bertindak sewenang-wenang."},
        {question:"Perhatikan data berikut: (1) Hukum adat, (2) UUD NRI Tahun 1945, (3) Peraturan Pemerintah, (4) Sopan santun, (5) Kebiasaan, (6) Ketetapan MPR. Contoh konstitusi tertulis ditunjukkan oleh nomor ...", options:["(1) dan (2)","(2) dan (3)","(4) dan (5)","(5) dan (6)"], answer:1, explanation:"UUD NRI Tahun 1945 dan Peraturan Pemerintah merupakan aturan tertulis. Dalam pilihan yang tersedia, pasangan tertulis yang tepat adalah (2) dan (3)."},
        {question:"Contoh konstitusi tidak tertulis di Indonesia adalah ...", options:["Peraturan lalu lintas","Tata tertib SMPK Penabur","Upacara Kemerdekaan RI","Peraturan Daerah Provinsi"], answer:2, explanation:"Konstitusi tidak tertulis dapat berupa kebiasaan atau konvensi ketatanegaraan yang dilakukan berulang."},
        {question:"Sifat fleksibel UUD NRI Tahun 1945 ditunjukkan oleh kemampuan UUD untuk ...", options:["Tidak bisa diubah sama sekali sejak ditetapkan","Menjadi satu-satunya sumber hukum tertinggi di Indonesia","Mengatur semua aspek kehidupan bernegara secara detail","Dapat diubah sesuai perkembangan zaman dan kebutuhan masyarakat"], answer:3, explanation:"Fleksibel berarti dapat menyesuaikan diri melalui perubahan sesuai mekanisme yang berlaku."},
        {question:"Urutan hierarki peraturan perundang-undangan berdasarkan UU No. 12 Tahun 2011 yang benar dari daftar (1) UUD NRI Tahun 1945, (2) Perda Provinsi, (3) Peraturan Presiden, (4) Ketetapan MPR, (5) Perda Kab/Kota, (6) UU/Perppu, (7) Peraturan Pemerintah adalah ...", options:["(1)-(2)-(3)-(4)-(5)-(6)-(7)","(1)-(4)-(5)-(7)-(3)-(2)-(6)","(1)-(6)-(4)-(7)-(2)-(3)-(5)","(1)-(4)-(6)-(7)-(3)-(2)-(5)"], answer:3, explanation:"Urutan yang benar: UUD 1945, Ketetapan MPR, UU/Perppu, PP, Perpres, Perda Provinsi, lalu Perda Kabupaten/Kota."},
        {question:"Amandemen atau perubahan UUD NRI Tahun 1945 dilakukan sebanyak ...", options:["5 kali","4 kali","3 kali","2 kali"], answer:1, explanation:"UUD NRI Tahun 1945 mengalami empat kali perubahan pada 1999–2002."},
        {question:"Tujuan dari amandemen UUD NRI Tahun 1945 adalah ...", options:["Memperjelas kewajiban warga negara saja","Memperkuat wewenang pemerintah","Membatasi kebijakan pemerintah sehari-hari","Menyempurnakan aturan dalam UUD"], answer:3, explanation:"Amandemen dilakukan untuk menyempurnakan aturan konstitusi dan memperbaiki sistem ketatanegaraan."},
        {question:"UUD NRI Tahun 1945 memiliki sifat singkat dan supel karena ...", options:["Setiap pasal hanya terdiri dari satu kalimat","Hanya berisi 37 pasal yang mudah dihafalkan","Isinya sangat terperinci dan sulit dipahami","Hanya memuat aturan-aturan pokok dan bersifat garis besar"], answer:3, explanation:"UUD memuat pokok-pokok aturan, sedangkan pengaturan lebih rinci dijabarkan dalam peraturan di bawahnya."},
        {question:"Memuat norma-norma hukum yang menjadi pedoman bagi penyelenggara negara serta landasan hubungan antara negara dan lembaga negara adalah sifat UUD NRI Tahun 1945 yaitu ...", options:["Fleksibel","Supel","Tertulis","Normatif"], answer:3, explanation:"Sifat normatif berarti konstitusi memuat norma hukum yang menjadi pedoman penyelenggaraan negara dan hubungan antarlembaga negara."},
        {question:"Seluruh peraturan perundang-undangan yang berlaku di Indonesia harus sesuai dan selaras dengan UUD NRI Tahun 1945. Ini adalah fungsi UUD sebagai ...", options:["Alat pengontrol","Alat pengatur","Alat pengikat","Alat pelengkap"], answer:0, explanation:"Sebagai alat pengontrol, UUD menjadi tolok ukur kesesuaian peraturan di bawahnya."},
        {question:"Judicial review undang-undang terhadap UUD NRI Tahun 1945 merupakan fungsi pengontrol yang dilakukan oleh ...", options:["Mahkamah Agung","Mahkamah Konstitusi","Pengadilan Militer","Komisi Yudisial"], answer:1, explanation:"Mahkamah Konstitusi berwenang menguji undang-undang terhadap UUD 1945."},
        {question:"Fungsi UUD NRI Tahun 1945 yang menyatukan seluruh komponen bangsa, termasuk pemerintah, lembaga negara, dan masyarakat adalah sebagai ...", options:["Alat pengontrol","Alat pengatur","Alat pengikat","Alat pelengkap"], answer:2, explanation:"Sebagai alat pengikat, UUD menjadi dasar bersama yang mempersatukan unsur-unsur kehidupan bernegara."},
        {question:"Perhatikan pernyataan berikut: (1) Hukum tertinggi, (2) Sumber dari sumber hukum, (3) Sumber legitimasi, (4) Landasan ideal bangsa Indonesia, (5) Pedoman penyelenggaraan negara. Kedudukan UUD NRI Tahun 1945 ditunjukkan oleh ...", options:["(1), (2), dan (3)","(1), (3), dan (5)","(2), (3), dan (4)","(3), (4), dan (5)"], answer:1, explanation:"UUD 1945 berkedudukan sebagai hukum tertinggi, sumber legitimasi, dan pedoman penyelenggaraan negara. Pancasila merupakan sumber dari segala sumber hukum dan landasan ideal bangsa."}
      ]
    }
  },
  Timothy: {}
};
/*
Example for adding a set:
questionBank.Theo["Bahasa Indonesia"] = {
  1: [
    {
      question: "Tuliskan pertanyaan di sini.",
      options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
      answer: 1,
      explanation: "Tuliskan penjelasan jawaban di sini."
    }
  ]
};
Set number 1 above corresponds to Set 1. Add 2, 3, and so on in sequence.
*/

const profileScreen = document.getElementById("profileScreen");
const homeScreen = document.getElementById("homeScreen");
const setsScreen = document.getElementById("setsScreen");
const quizScreen = document.getElementById("quizScreen");
const resultsScreen = document.getElementById("resultsScreen");
const byId = id => document.getElementById(id);
let activeProfile = null;
let activeSubject = null;
let activeSetNumber = null;
let questionIndex = 0;
let correctCount = 0;
let answered = false;
let lastSetScore = {correct:0,total:0};

function showScreen(screen) {
  [profileScreen, homeScreen, setsScreen, quizScreen, resultsScreen].forEach(item => item.classList.add("hidden"));
  screen.classList.remove("hidden");
  window.scrollTo({top:0, behavior:"smooth"});
}
function subjectRecord(name) {
  return subjectCatalog[activeProfile].subjects.find(subject => subject.name === name);
}
function getSetQuestions(profile, subject, setNumber) {
  return questionBank[profile]?.[subject]?.[setNumber] || [];
}
function chooseProfile(name) {
  activeProfile = name;
  byId("activeUserLabel").textContent = `${name} · Kelas ${subjectCatalog[name].grade}`;
  byId("activeUserLabel").classList.remove("hidden");
  byId("switchUserBtn").classList.remove("hidden");
  renderHome();
  showScreen(homeScreen);
}
function renderHome() {
  const person = subjectCatalog[activeProfile];
  byId("welcomeTitle").textContent = `Halo, ${activeProfile}!`;
  byId("welcomeSubtitle").textContent = `Pilih mata pelajaran kelas ${person.grade} yang ingin kamu latih.`;
  byId("gradePill").textContent = `Kelas ${person.grade}`;
  byId("homeAvatar").textContent = activeProfile[0];
  byId("homeAvatar").className = `avatar large-avatar ${activeProfile === "Theo" ? "avatar-blue" : "avatar-green"}`;
  byId("subjectCountPill").textContent = `${person.subjects.length} pelajaran`;
  const grid = byId("subjectGrid");
  grid.innerHTML = "";
  person.subjects.forEach(subject => {
    const subjectKeys = Object.keys(questionBank[activeProfile]?.[subject.name] || {});
    const totalSets = Math.max(subject.sets, ...subjectKeys.map(Number), 0);
    const hasAnyQuestions = subjectKeys.some(key => getSetQuestions(activeProfile, subject.name, Number(key)).length > 0);
    const card = document.createElement("button");
    card.type = "button";
    card.className = "subject-card";
    card.innerHTML = `<span class="subject-icon"></span><span class="subject-name"></span><span class="subject-desc"></span><span class="subject-action"></span>`;
    const icon = card.querySelector(".subject-icon");
    // Use textContent for labels to avoid treating course names as HTML.
    icon.textContent = subject.icon;
    card.querySelector(".subject-name").textContent = subject.name;
    card.querySelector(".subject-desc").textContent = "Latihan " + subject.name;
    const action = card.querySelector(".subject-action");
    if (totalSets > 0) {
      action.textContent = `${totalSets} set soal →`;
      if (!hasAnyQuestions) action.classList.add("empty");
      card.addEventListener("click", () => openSets(subject.name));
    } else {
      action.textContent = "Set soal akan ditambahkan";
      action.classList.add("empty");
      card.addEventListener("click", () => openSets(subject.name));
    }
    grid.appendChild(card);
  });
}
function openSets(subjectName) {
  activeSubject = subjectName;
  const record = subjectRecord(subjectName);
  const actualSetNumbers = Object.keys(questionBank[activeProfile]?.[subjectName] || {}).map(Number).filter(n => Number.isInteger(n) && n > 0);
  const lastDefined = actualSetNumbers.length ? Math.max(...actualSetNumbers) : 0;
  const totalSets = Math.max(record?.sets || 0, lastDefined);
  byId("setsProfileEyebrow").textContent = `${activeProfile.toUpperCase()} · KELAS ${subjectCatalog[activeProfile].grade}`;
  byId("setsTitle").textContent = subjectName;
  byId("setsSubtitle").textContent = totalSets ? "Set ditampilkan sesuai urutan. Set baru dapat ditambahkan setelah materi soal tersedia." : "Belum ada set latihan untuk mata pelajaran ini.";
  byId("setsSubjectIcon").textContent = record?.icon || "📚";
  byId("setsGrid").innerHTML = "";
  byId("emptySubjectMessage").classList.toggle("hidden", totalSets > 0);
  for (let number = 1; number <= totalSets; number++) {
    const questions = getSetQuestions(activeProfile, subjectName, number);
    const card = document.createElement("button");
    card.type = "button";
    card.className = `set-card ${questions.length ? "available" : "unavailable"}`;
    card.innerHTML = `<span class="set-number">${number}</span><span class="set-copy"><span class="set-title"></span><span class="set-status"></span></span><span class="set-arrow">${questions.length ? "→" : "· · ·"}</span>`;
    card.querySelector(".set-title").textContent = `Set ${number}`;
    card.querySelector(".set-status").textContent = questions.length ? `${questions.length} soal · Mulai latihan` : "Soal belum ditambahkan";
    card.disabled = questions.length === 0;
    if (questions.length) card.addEventListener("click", () => startSet(number));
    byId("setsGrid").appendChild(card);
  }
  showScreen(setsScreen);
}
function startSet(setNumber) {
  activeSetNumber = setNumber;
  questionIndex = 0;
  correctCount = 0;
  answered = false;
  byId("quizProfileLabel").textContent = `${activeProfile.toUpperCase()} · KELAS ${subjectCatalog[activeProfile].grade}`;
  byId("quizTitle").textContent = activeSubject;
  byId("quizSetTitle").textContent = `Set ${setNumber}`;
  showScreen(quizScreen);
  renderQuestion();
}
function renderQuestion() {
  const questions = getSetQuestions(activeProfile, activeSubject, activeSetNumber);
  const q = questions[questionIndex];
  answered = false;
  byId("questionCounter").textContent = `Soal ${questionIndex + 1} dari ${questions.length}`;
  byId("progressBar").style.width = `${((questionIndex) / questions.length) * 100}%`;
  byId("questionSubjectPill").textContent = activeSubject;
  byId("questionPointLabel").textContent = "Baca soal dengan teliti.";
  byId("questionText").textContent = q.question;
  byId("answerOptions").innerHTML = "";
  byId("feedbackBox").className = "feedback hidden";
  byId("feedbackBox").textContent = "";
  byId("nextQuestionBtn").classList.add("hidden");
  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.textContent = String.fromCharCode(65 + index);
    const label = document.createElement("span");
    label.textContent = option;
    button.append(letter, label);
    button.addEventListener("click", () => selectAnswer(index));
    byId("answerOptions").appendChild(button);
  });
}
function selectAnswer(selected) {
  if (answered) return;
  answered = true;
  const q = getSetQuestions(activeProfile, activeSubject, activeSetNumber)[questionIndex];
  const buttons = [...byId("answerOptions").querySelectorAll("button")];
  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === q.answer) button.classList.add("correct");
    else if (index === selected) button.classList.add("incorrect");
  });
  const correct = selected === q.answer;
  if (correct) correctCount++;
  const feedback = byId("feedbackBox");
  feedback.className = `feedback ${correct ? "good" : "bad"}`;
  const title = document.createElement("strong");
  title.textContent = correct ? "Benar!" : "Belum tepat.";
  const explanation = document.createElement("span");
  explanation.textContent = q.explanation || (correct ? "Jawabanmu benar." : "Perhatikan pilihan yang ditandai hijau sebagai jawaban benar.");
  feedback.replaceChildren(title, explanation);
  byId("nextQuestionBtn").textContent = questionIndex === getSetQuestions(activeProfile, activeSubject, activeSetNumber).length - 1 ? "Lihat hasil latihan →" : "Soal berikutnya →";
  byId("nextQuestionBtn").classList.remove("hidden");
}
function nextQuestion() {
  questionIndex++;
  const questions = getSetQuestions(activeProfile, activeSubject, activeSetNumber);
  if (questionIndex < questions.length) renderQuestion();
  else finishSet();
}
function finishSet() {
  const total = getSetQuestions(activeProfile, activeSubject, activeSetNumber).length;
  lastSetScore = {correct:correctCount, total};
  byId("progressBar").style.width = "100%";
  byId("resultEmoji").textContent = correctCount === total ? "🎉" : "📝";
  byId("resultTitle").textContent = correctCount === total ? "Semua benar!" : "Latihan selesai!";
  byId("resultSummary").textContent = `${activeProfile}, kamu telah menyelesaikan ${activeSubject} — Set ${activeSetNumber}.`;
  byId("resultScore").textContent = `${correctCount}/${total}`;
  showScreen(resultsScreen);
}
function returnToSets() { openSets(activeSubject); }

document.querySelectorAll("[data-profile]").forEach(button => button.addEventListener("click", () => chooseProfile(button.dataset.profile)));
byId("switchUserBtn").addEventListener("click", () => {
  activeProfile = null;
  byId("activeUserLabel").classList.add("hidden");
  byId("switchUserBtn").classList.add("hidden");
  showScreen(profileScreen);
});
byId("brandHome").addEventListener("click", event => { event.preventDefault(); if (activeProfile) { renderHome(); showScreen(homeScreen); } else showScreen(profileScreen); });
byId("setsBackBtn").addEventListener("click", () => { renderHome(); showScreen(homeScreen); });
byId("quizBackBtn").addEventListener("click", returnToSets);
byId("nextQuestionBtn").addEventListener("click", nextQuestion);
byId("resultsSetsBtn").addEventListener("click", returnToSets);
byId("resultsHomeBtn").addEventListener("click", () => { renderHome(); showScreen(homeScreen); });
showScreen(profileScreen);
