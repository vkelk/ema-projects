/* ============================================================
   УЧИЛИШЕН КВИЗ - Ема's Game Studio - логика
   Прашањата се наоѓаат во questions.js (се вчитува пред овој фајл)
   ============================================================ */

// ============================================================
// СОСТОЈБА НА ИГРАТА
// ============================================================

let playerName = "";
let selectedSubject = "";           // "nauka" или "istorija"
let currentQuestions = [];          // 15 случајно избрани прашања
let currentIndex = 0;
let score = 0;
let fromScreen = "";                // за враќање назад од leaderboard

// ============================================================
// DOM ЕЛЕМЕНТИ
// ============================================================

const screens = {
  start:       document.getElementById("startScreen"),
  subject:     document.getElementById("subjectScreen"),
  quiz:        document.getElementById("quizScreen"),
  result:      document.getElementById("resultScreen"),
  leaderboard: document.getElementById("leaderboardScreen"),
  about:       document.getElementById("aboutScreen")
};

// ============================================================
// ПОМОШНИ ФУНКЦИИ
// ============================================================

// Мешање (Fisher-Yates)
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Прикажи само еден екран
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.add("hidden"));
  screens[name].classList.remove("hidden");
}

// ============================================================
// ПЛОВИ ЅВЕЗДИ
// ============================================================

function createStars() {
  const container = document.getElementById("starsContainer");
  for (let i = 0; i < 60; i++) {
    const star = document.createElement("div");
    star.className = "star";
    const size = Math.random() * 3 + 1;
    star.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      animation-delay: ${Math.random() * 3}s;
      animation-duration: ${2 + Math.random() * 3}s;
    `;
    container.appendChild(star);
  }
}

// ============================================================
// ПОЧЕТЕН ЕКРАН → ИЗБОР НА ПРЕДМЕТ
// ============================================================

document.getElementById("startBtn").addEventListener("click", () => {
  const nameInput = document.getElementById("nameInput");
  const nameError = document.getElementById("nameError");
  playerName = nameInput.value.trim();

  if (!playerName) {
    nameError.classList.remove("hidden");
    nameInput.focus();
    return;
  }
  nameError.classList.add("hidden");
  showScreen("subject");
});

// Enter во полето за ime
document.getElementById("nameInput").addEventListener("keydown", e => {
  if (e.key === "Enter") document.getElementById("startBtn").click();
});

// Назад од избор на предмет
document.getElementById("subjectBackBtn").addEventListener("click", () => {
  showScreen("start");
});

// ============================================================
// ИЗБОР НА ПРЕДМЕТ → СТАРТ НА КВИЗ
// ============================================================

document.getElementById("btnNaturalScience").addEventListener("click", () => {
  selectedSubject = "nauka";
  startQuiz();
});

document.getElementById("btnHistory").addEventListener("click", () => {
  selectedSubject = "istorija";
  startQuiz();
});

function startQuiz() {
  currentQuestions = shuffle(questions[selectedSubject]).slice(0, 15);
  currentIndex = 0;
  score = 0;
  document.getElementById("liveScore").textContent = "0";

  // Постави значка за предмет
  const badge = document.getElementById("subjectBadge");
  badge.textContent = selectedSubject === "nauka"
    ? "🔬 Природни науки"
    : "🌍 Историја и општество";

  showScreen("quiz");
  showQuestion();
}

// ============================================================
// ПРИКАЖИ ПРАШАЊЕ
// ============================================================

function showQuestion() {
  const q = currentQuestions[currentIndex];

  // Бројач и progress bar
  document.getElementById("questionCounter").textContent =
    `Прашање ${currentIndex + 1} од ${currentQuestions.length}`;
  document.getElementById("progressBar").style.width =
    `${((currentIndex) / currentQuestions.length) * 100}%`;

  // Текст на прашањето
  document.getElementById("questionText").textContent = q.question;

  // Замешај ги одговорите
  const shuffledAnswers = shuffle(q.answers);
  const btns = [0, 1, 2, 3].map(i => document.getElementById(`ans${i}`));
  btns.forEach((btn, i) => {
    btn.textContent = shuffledAnswers[i];
    btn.className = "answer-btn";
    btn.disabled = false;
    btn.onclick = () => checkAnswer(btn, shuffledAnswers[i], q.correct);
  });

  // Скриј feedback
  document.getElementById("feedbackBox").classList.add("hidden");
}

// ============================================================
// ПРОВЕРИ ОДГОВОР
// ============================================================

function checkAnswer(clickedBtn, chosen, correct) {
  // Оневозможи сите копчиња
  [0, 1, 2, 3].forEach(i => {
    document.getElementById(`ans${i}`).disabled = true;
  });

  const isCorrect = (chosen === correct);

  if (isCorrect) {
    clickedBtn.classList.add("correct");
    score++;
    document.getElementById("liveScore").textContent = score;
  } else {
    clickedBtn.classList.add("wrong");
    // Покажи го точниот одговор
    [0, 1, 2, 3].forEach(i => {
      const btn = document.getElementById(`ans${i}`);
      if (btn.textContent === correct) btn.classList.add("correct");
    });
  }

  // Feedback порака
  const feedbackBox = document.getElementById("feedbackBox");
  const feedbackText = document.getElementById("feedbackText");
  feedbackBox.classList.remove("hidden");

  if (isCorrect) {
    const msgs = [
      "Точно! Одлично! 🎉",
      "Браво! Супер си! ⭐",
      "Точно! Ти си ѕвезда! 🌟",
      "Правилно! Фантастично! 🏆",
      "Точно! Продолжи така! 🔥"
    ];
    feedbackText.textContent = msgs[Math.floor(Math.random() * msgs.length)];
  } else {
    feedbackText.textContent = `Точниот одговор е: ${correct} 📖`;
  }
}

// ============================================================
// СЛЕДНО ПРАШАЊЕ
// ============================================================

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < currentQuestions.length) {
    showQuestion();
  } else {
    showResults();
  }
});

// ============================================================
// РЕЗУЛТАТИ
// ============================================================

function showResults() {
  document.getElementById("progressBar").style.width = "100%";

  const total = currentQuestions.length;
  const pct = score / total;

  let emoji, title, message;

  if (pct === 1) {
    emoji = "🏆"; title = "Совршено!";
    message = `${playerName}, ги знаеш сите одговори! Ти си вистински шампион! 🌟`;
  } else if (pct >= 0.8) {
    emoji = "🎉"; title = "Одличен резултат!";
    message = `${playerName}, браво! Многу добро го знаеш материјалот! ⭐`;
  } else if (pct >= 0.6) {
    emoji = "😊"; title = "Добар резултат!";
    message = `${playerName}, добра работа! Со малку повеќе учење ќе бидеш одличен! 📚`;
  } else if (pct >= 0.4) {
    emoji = "📖"; title = "Продолжи да учиш!";
    message = `${playerName}, не се откажувај! Прочитај ги лекциите уште еднаш и обиди се повторно! 💪`;
  } else {
    emoji = "🌱"; title = "Уште малку!";
    message = `${playerName}, сè е во ред! Учењето трае. Обиди се повторно — ќе биде подобро! 🌈`;
  }

  document.getElementById("resultEmoji").textContent = emoji;
  document.getElementById("resultTitle").textContent = title;
  document.getElementById("resultScore").textContent = `Точни ${score} од ${total}!`;
  document.getElementById("resultMessage").textContent = message;

  setTimeout(() => {
    document.getElementById("scoreBar").style.width = `${(score / total) * 100}%`;
  }, 100);

  saveScore(playerName, score, total, selectedSubject);
  showScreen("result");
}

// ============================================================
// LEADERBOARD (Realtime Database)
// ============================================================

function saveScore(name, s, total, subject) {
  db.ref("scores/" + subject).push({
    name,
    score: s,
    total,
    date: new Date().toLocaleDateString("mk-MK")
  }).catch(err => {
    console.error("Грешка при зачувување на резултат:", err);
  });
}

function renderLeaderboard(subject) {
  const list = document.getElementById("lbList");
  list.innerHTML = `<p class="lb-empty">Се вчитува... ⏳</p>`;

  db.ref("scores/" + subject)
    .orderByChild("score")
    .limitToLast(10)
    .once("value", snapshot => {
      list.innerHTML = "";

      if (!snapshot.exists()) {
        list.innerHTML = `<p class="lb-empty">Сè уште нема резултати. Биди прв! 🌟</p>`;
        return;
      }

      const medals = ["🥇", "🥈", "🥉"];
      const data = Object.values(snapshot.val())
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);

      data.forEach((entry, i) => {
        const row = document.createElement("div");
        row.className = `lb-row${i < 3 ? ` rank-${i + 1}` : ""}`;

        const rank = document.createElement("span");
        rank.className = "lb-rank";
        rank.textContent = i < 3 ? medals[i] : `${i + 1}.`;

        const nameEl = document.createElement("span");
        nameEl.className = "lb-name";
        nameEl.textContent = entry.name;

        const scoreEl = document.createElement("span");
        scoreEl.className = "lb-score";
        scoreEl.textContent = `${entry.score}/${entry.total} • ${entry.date}`;

        row.append(rank, nameEl, scoreEl);
        list.appendChild(row);
      });
    }, err => {
      list.innerHTML = `<p class="lb-empty">Грешка при вчитување. Провери интернет конекција. ⚠️</p>`;
      console.error("Грешка при вчитување на табелата:", err);
    });
}

function showLeaderboard(origin) {
  fromScreen = origin;
  const activeTab = selectedSubject || "nauka";
  showScreen("leaderboard");
  document.querySelectorAll(".lb-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.subject === activeTab);
  });
  renderLeaderboard(activeTab);
}

// Tab копчиња
document.querySelectorAll(".lb-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".lb-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderLeaderboard(tab.dataset.subject);
  });
});

// ============================================================
// НАВИГАЦИЈА
// ============================================================

document.getElementById("lbOpenBtn").addEventListener("click", () => {
  showLeaderboard("start");
});

document.getElementById("lbOpenBtn2").addEventListener("click", () => {
  showLeaderboard("result");
});

document.getElementById("lbBackBtn").addEventListener("click", () => {
  showScreen(fromScreen || "start");
});

document.getElementById("playAgainBtn").addEventListener("click", () => {
  startQuiz();
});

document.getElementById("changSubjectBtn").addEventListener("click", () => {
  showScreen("subject");
});

document.getElementById("aboutBtn").addEventListener("click", () => {
  document.getElementById("naukaCount").textContent =
    `${questions.nauka.length} прашања`;
  document.getElementById("istorijaCount").textContent =
    `${questions.istorija.length} прашања`;
  showScreen("about");
});

document.getElementById("aboutBackBtn").addEventListener("click", () => {
  showScreen("start");
});

// ============================================================
// СТАРТ
// ============================================================

createStars();
