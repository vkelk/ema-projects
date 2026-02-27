// ============================================================
// KATSEYE QUIZ — Ema's Game Studio
// This is the "brain" of the quiz game!
// ============================================================

// --- All quiz questions about Katseye ---
// Each question has: the question text, 4 answers, and the correct one
const allQuestions = [
  {
    question: "How many members are in Katseye?",
    answers: ["4", "5", "6", "7"],
    correct: "6"
  },
  {
    question: "What gemstone inspired the name 'Katseye'?",
    answers: ["Ruby", "Cat's Eye (Chrysoberyl)", "Sapphire", "Diamond"],
    correct: "Cat's Eye (Chrysoberyl)"
  },
  {
    question: "Which member suggested changing the spelling from 'Catseye' to 'Katseye'?",
    answers: ["Sophia", "Manon", "Yoonchae", "Lara"],
    correct: "Lara"
  },
  {
    question: "What was Katseye's very first debut single?",
    answers: ["Touch", "Flame", "Debut", "Gnarly"],
    correct: "Debut"
  },
  {
    question: "What is the name of Katseye's first EP (album)?",
    answers: ["Beautiful Chaos", "Dream Academy", "SIS (Soft Is Strong)", "Gnarly"],
    correct: "SIS (Soft Is Strong)"
  },
  {
    question: "Which music label collaborated with Geffen Records to create Katseye?",
    answers: ["SM Entertainment", "HYBE", "YG Entertainment", "JYP Entertainment"],
    correct: "HYBE"
  },
  {
    question: "Where is Katseye based?",
    answers: ["New York City", "Seoul, South Korea", "Tokyo, Japan", "Los Angeles, California"],
    correct: "Los Angeles, California"
  },
  {
    question: "Which Katseye member is the youngest and is from South Korea?",
    answers: ["Sophia", "Daniela", "Manon", "Yoonchae"],
    correct: "Yoonchae"
  },
  {
    question: "Which member became famous on TikTok and Instagram before joining Katseye?",
    answers: ["Megan", "Lara", "Manon", "Sophia"],
    correct: "Manon"
  },
  {
    question: "What Netflix documentary series tells the story of how Katseye was formed?",
    answers: ["K-pop Star", "Popstar Academy: Katseye", "Dream Girls", "Girl Group Story"],
    correct: "Popstar Academy: Katseye"
  },
  {
    question: "Which Katseye song went SUPER viral as a TikTok dance challenge?",
    answers: ["Debut", "Flame", "Touch", "Gnarly"],
    correct: "Touch"
  },
  {
    question: "What song did Katseye release for the Netflix cartoon 'Jentry Chau vs. The Underworld'?",
    answers: ["Gnarly", "Touch", "Debut", "Flame"],
    correct: "Flame"
  },
  {
    question: "What was the name of the reality TV show that picked the Katseye members?",
    answers: ["K-pop Idol", "The Debut: Dream Academy", "Girl Group Academy", "Idol School"],
    correct: "The Debut: Dream Academy"
  },
  {
    question: "Which Katseye member appeared on America's Got Talent as a kid?",
    answers: ["Megan", "Sophia", "Daniela", "Lara"],
    correct: "Daniela"
  },
  {
    question: "Roughly how many people applied to join Katseye through Dream Academy?",
    answers: ["Over 10,000", "Over 50,000", "Over 120,000", "Over 1,000,000"],
    correct: "Over 120,000"
  },
  {
    question: "Which fashion style inspires Katseye's cool look and outfits?",
    answers: ["80s Grunge", "Y2K Fashion", "Victorian Style", "Punk Rock"],
    correct: "Y2K Fashion"
  },
  {
    question: "What is the name of Katseye's second EP?",
    answers: ["Soft Is Strong", "Dream Academy", "Gnarly", "Beautiful Chaos"],
    correct: "Beautiful Chaos"
  },
  {
    question: "Which fancy fashion brand did Katseye do a campaign with for their famous bag?",
    answers: ["Gucci", "Louis Vuitton", "Chanel", "Fendi"],
    correct: "Fendi"
  },
  {
    question: "Sophia is originally from which country?",
    answers: ["South Korea", "Japan", "Philippines", "Thailand"],
    correct: "Philippines"
  },
  {
    question: "Katseye was nominated for Best New Artist at which Grammy Awards?",
    answers: ["66th Grammy Awards", "67th Grammy Awards", "68th Grammy Awards", "65th Grammy Awards"],
    correct: "68th Grammy Awards"
  },

  // --- New questions! ---

  {
    question: "Who is the official leader of Katseye?",
    answers: ["Lara", "Megan", "Sophia", "Daniela"],
    correct: "Sophia"
  },
  {
    question: "Which rapper featured on the 'Gnarly' remix?",
    answers: ["Cardi B", "Ice Spice", "Nicki Minaj", "Doja Cat"],
    correct: "Ice Spice"
  },
  {
    question: "Which song was Katseye's FIRST ever entry on the Billboard Hot 100?",
    answers: ["Touch", "Debut", "Gabriela", "Gnarly"],
    correct: "Gnarly"
  },
  {
    question: "Which famous pop star co-wrote the song 'Gabriela'?",
    answers: ["Taylor Swift", "Charli XCX", "Billie Eilish", "Ariana Grande"],
    correct: "Charli XCX"
  },
  {
    question: "Which actress made a cameo in the 'Gabriela' music video?",
    answers: ["Salma Hayek", "Zendaya", "Jessica Alba", "Jennifer Lopez"],
    correct: "Jessica Alba"
  },
  {
    question: "'Gabriela' was described as a modern twist on which classic song?",
    answers: ["Whitney Houston's 'I Will Always Love You'", "Dolly Parton's 'Jolene'", "Madonna's 'Material Girl'", "Mariah Carey's 'Hero'"],
    correct: "Dolly Parton's 'Jolene'"
  },
  {
    question: "At what position did 'Beautiful Chaos' debut on the Billboard 200?",
    answers: ["#10", "#7", "#1", "#4"],
    correct: "#4"
  },
  {
    question: "In which city was the 'Debut' music video filmed?",
    answers: ["Seoul, South Korea", "Manila, Philippines", "Medellín, Colombia", "Los Angeles, USA"],
    correct: "Medellín, Colombia"
  },
  {
    question: "What was the name of Katseye's first ever concert tour?",
    answers: ["SIS World Tour", "Dream Academy Tour", "Touch Tour", "Beautiful Chaos Tour"],
    correct: "Beautiful Chaos Tour"
  },
  {
    question: "Which platform named Katseye 'Global Artist of the Year' in 2025?",
    answers: ["YouTube", "Instagram", "Spotify", "TikTok"],
    correct: "TikTok"
  },
  {
    question: "The Gap 'Better in Denim' campaign featured a new version of which song?",
    answers: ["Destiny's Child's 'Bootylicious'", "Britney Spears' 'Toxic'", "Kelis' 'Milkshake'", "Beyoncé's 'Crazy in Love'"],
    correct: "Kelis' 'Milkshake'"
  },
  {
    question: "Which insurance company featured Katseye in their Super Bowl LX commercial?",
    answers: ["Geico", "Progressive", "State Farm", "Allstate"],
    correct: "State Farm"
  },
  {
    question: "Which video game world featured Katseye as guest characters in 2025?",
    answers: ["Roblox", "Animal Crossing", "Fortnite", "Toca Boca World"],
    correct: "Toca Boca World"
  },
  {
    question: "Katseye partnered with Glossier to launch a lip product called what?",
    answers: ["Lip Gloss Collection", "Lip Glaze", "Lip Oil Drops", "Purr Lips"],
    correct: "Lip Glaze"
  },
  {
    question: "Who was announced as the FIRST member at the Dream Academy finale?",
    answers: ["Lara", "Yoonchae", "Megan", "Sophia"],
    correct: "Sophia"
  },
  {
    question: "Which member is the first Black artist ever to be signed under HYBE?",
    answers: ["Lara", "Daniela", "Yoonchae", "Manon"],
    correct: "Manon"
  },
  {
    question: "Which member is the first Indian-origin artist to sign under a HYBE label?",
    answers: ["Sophia", "Manon", "Lara", "Megan"],
    correct: "Lara"
  },
  {
    question: "Where in the world was Sophia actually born?",
    answers: ["Manila, Philippines", "Los Angeles, USA", "New York City, USA", "Tokyo, Japan"],
    correct: "New York City, USA"
  },
  {
    question: "What language, besides English, is Sophia fluent in?",
    answers: ["Korean", "Spanish", "Tagalog", "French"],
    correct: "Tagalog"
  },
  {
    question: "Katseye won 'Push Performance of the Year' at which awards show?",
    answers: ["iHeartRadio Music Awards", "2025 MTV Video Music Awards", "2024 MAMA Awards", "Billboard Music Awards"],
    correct: "2025 MTV Video Music Awards"
  },
  {
    question: "How many tracks are on Katseye's first EP, SIS (Soft Is Strong)?",
    answers: ["3", "4", "6", "5"],
    correct: "5"
  },
  {
    question: "Lara placed what position at the end of the Dream Academy competition?",
    answers: ["First", "Third", "Fourth", "Second"],
    correct: "Second"
  },
  {
    question: "In 2019, Lara appeared in a campaign for which former US First Lady?",
    answers: ["Hillary Clinton", "Laura Bush", "Michelle Obama", "Melania Trump"],
    correct: "Michelle Obama"
  },
  {
    question: "Which famous performing arts high school did Lara attend in New York City?",
    answers: ["Juilliard Pre-College", "School of Visual Arts", "LaGuardia High School", "Professional Children's School"],
    correct: "LaGuardia High School"
  },
  {
    question: "Where did Sophia grow up, even though she was born in New York?",
    answers: ["Los Angeles", "Manila, Philippines", "Seoul, South Korea", "Sydney, Australia"],
    correct: "Manila, Philippines"
  },
  {
    question: "Katseye performed at which famous Chicago music festival in August 2025?",
    answers: ["Coachella", "Glastonbury", "Bonnaroo", "Lollapalooza"],
    correct: "Lollapalooza"
  },
  {
    question: "What is the name of the third single from 'Beautiful Chaos'?",
    answers: ["Mean Girls", "M.I.A.", "Gameboy", "Internet Girl"],
    correct: "Gameboy"
  },
  {
    question: "Which K-pop group's member Yeonjun featured on a 'Touch' remix?",
    answers: ["BTS", "SEVENTEEN", "TXT (Tomorrow X Together)", "Stray Kids"],
    correct: "TXT (Tomorrow X Together)"
  },
  {
    question: "Katseye collaborated with which British soap company?",
    answers: ["The Body Shop", "Soap & Glory", "Lush", "L'Occitane"],
    correct: "Lush"
  },
  {
    question: "Katseye partnered with which Filipino fast food chain in August 2025?",
    answers: ["Chowking", "Mang Inasal", "Jollibee", "Greenwich"],
    correct: "Jollibee"
  },
  {
    question: "Which award did Katseye WIN (not just get nominated for) at the Gold Derby Music Awards?",
    answers: ["New Artist of the Year", "Group of the Year", "Best Pop Artist", "Best New Artist"],
    correct: "Group of the Year"
  },

  // --- Even more questions from the web! ---

  {
    question: "Which member of Katseye is the oldest?",
    answers: ["Sophia", "Daniela", "Lara", "Manon"],
    correct: "Manon"
  },
  {
    question: "What is Katseye's official group greeting?",
    answers: ["Hi, we're Katseye!", "Hello, we are KATSEYE!", "Hey, it's Katseye!", "Welcome to Katseye!"],
    correct: "Hello, we are KATSEYE!"
  },
  {
    question: "What does the fan club name 'EYEKONS' mean?",
    answers: ["It means 'shining eyes' in Korean", "It means 'cat icons'", "It's a mix of 'eye' (from KATSEYE) and 'icon'", "It comes from the word 'falcon'"],
    correct: "It's a mix of 'eye' (from KATSEYE) and 'icon'"
  },
  {
    question: "Who is the TALLEST member of Katseye?",
    answers: ["Sophia", "Megan", "Lara", "Yoonchae"],
    correct: "Yoonchae"
  },
  {
    question: "Who is the SHORTEST member of Katseye?",
    answers: ["Yoonchae", "Manon", "Sophia", "Daniela"],
    correct: "Daniela"
  },
  {
    question: "What is Sophia's MBTI personality type?",
    answers: ["INTJ", "ISTP", "INFP", "ENFP"],
    correct: "ENFP"
  },
  {
    question: "Which position did Daniela finish at the Dream Academy finale?",
    answers: ["1st", "2nd", "3rd", "4th"],
    correct: "3rd"
  },
  {
    question: "Which position did Manon finish at the Dream Academy finale?",
    answers: ["3rd", "4th", "5th", "6th"],
    correct: "6th"
  },
  {
    question: "Which position did Megan finish at the Dream Academy finale?",
    answers: ["2nd", "3rd", "4th", "5th"],
    correct: "5th"
  },
  {
    question: "In the Katseye dorm, who does Lara share a room with?",
    answers: ["Sophia", "Manon", "Daniela", "Megan"],
    correct: "Megan"
  },
  {
    question: "What nationality is Manon?",
    answers: ["German", "French", "Belgian", "Swiss"],
    correct: "Swiss"
  },
  {
    question: "Megan grew up in which US state?",
    answers: ["California", "New York", "Texas", "Hawaii"],
    correct: "Hawaii"
  },
  {
    question: "What is Yoonchae's zodiac sign?",
    answers: ["Capricorn", "Aquarius", "Scorpio", "Sagittarius"],
    correct: "Sagittarius"
  },
  {
    question: "Which Katseye member was born on December 31?",
    answers: ["Yoonchae", "Manon", "Daniela", "Sophia"],
    correct: "Sophia"
  },
  {
    question: "What is Lara's last name?",
    answers: ["Llorente", "Laforteza", "Skiendiel", "Rajagopalan"],
    correct: "Rajagopalan"
  },
  {
    question: "What is Manon's full birth name?",
    answers: ["Marie Manon Laurent", "Manon Isabella Becker", "Manon Sophie Dubois", "Meret Manon Sarpong Bannerman"],
    correct: "Meret Manon Sarpong Bannerman"
  },
  {
    question: "Which Katseye member was born on July 1, 2004?",
    answers: ["Sophia", "Lara", "Megan", "Daniela"],
    correct: "Daniela"
  },
  {
    question: "Who was the LAST member announced at the Dream Academy finale?",
    answers: ["Daniela", "Yoonchae", "Megan", "Manon"],
    correct: "Manon"
  },
  {
    question: "Which member of Katseye has dual Filipino and American nationality?",
    answers: ["Daniela", "Megan", "Lara", "Sophia"],
    correct: "Sophia"
  },
  {
    question: "Daniela grew up in which US city?",
    answers: ["New York City", "Los Angeles", "Atlanta", "Chicago"],
    correct: "Atlanta"
  }
];

// --- How the quiz works ---
let currentQuestions = [];  // The 15 questions we'll use this round
let currentIndex = 0;       // Which question we're on right now
let score = 0;              // How many points the player has
let playerName = '';        // The name they typed in

// --- Grab all the page elements we need ---
const startScreen       = document.getElementById('startScreen');
const quizScreen        = document.getElementById('quizScreen');
const resultScreen      = document.getElementById('resultScreen');
const leaderboardScreen = document.getElementById('leaderboardScreen');

const startBtn    = document.getElementById('startBtn');
const playAgainBtn = document.getElementById('playAgainBtn');
const lbOpenBtn   = document.getElementById('lbOpenBtn');
const lbOpenBtn2  = document.getElementById('lbOpenBtn2');
const lbBackBtn   = document.getElementById('lbBackBtn');
const nameInput   = document.getElementById('nameInput');
const nameError   = document.getElementById('nameError');

const questionCounter = document.getElementById('questionCounter');
const liveScore       = document.getElementById('liveScore');
const progressBar     = document.getElementById('progressBar');
const questionText    = document.getElementById('questionText');
const answersGrid     = document.getElementById('answersGrid');
const feedbackBox     = document.getElementById('feedbackBox');
const feedbackText    = document.getElementById('feedbackText');
const nextBtn         = document.getElementById('nextBtn');

const resultEmoji   = document.getElementById('resultEmoji');
const resultTitle   = document.getElementById('resultTitle');
const resultScore   = document.getElementById('resultScore');
const resultMessage = document.getElementById('resultMessage');
const scoreBar      = document.getElementById('scoreBar');

// --- Firebase setup ---
// Firebase is a free online database made by Google.
// It stores our scores in the cloud so everyone can see them!
// The firebaseConfig variable is loaded from firebase-config.js (that file is gitignored)
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// --- Save a score to Firebase ---
// db.ref('scores') means "go to the 'scores' folder in the database"
// .push() adds a new entry without overwriting old ones
function saveScore(name, score) {
  db.ref('scores').push({ name: name, score: score });
}

// --- Show the leaderboard by loading scores from Firebase ---
function showLeaderboard(fromScreen) {
  // Remember which screen opened the leaderboard so we can go back
  leaderboardScreen.dataset.from = fromScreen;

  // Hide all screens and show leaderboard
  startScreen.classList.add('hidden');
  resultScreen.classList.add('hidden');
  leaderboardScreen.classList.remove('hidden');

  // Show a loading message while we wait for Firebase to respond
  const lbList = document.getElementById('lbList');
  lbList.innerHTML = '<p class="lb-empty">Loading scores... ✨</p>';

  // Ask Firebase for the top 10 scores, ordered from lowest to highest
  db.ref('scores').orderByChild('score').limitToLast(10).once('value', (snapshot) => {
    const scores = [];

    // snapshot.forEach loops through all the scores Firebase sent back
    snapshot.forEach((child) => {
      scores.push(child.val());
    });

    // Firebase gives them lowest-first, so we flip the order
    scores.reverse();

    lbList.innerHTML = '';

    if (scores.length === 0) {
      lbList.innerHTML = '<p class="lb-empty">No scores yet! Be the first to play 🐱</p>';
    } else {
      const medals = ['🥇', '🥈', '🥉'];
      scores.forEach((entry, i) => {
        const row = document.createElement('div');
        row.className = 'lb-row' + (i < 3 ? ` rank-${i + 1}` : '');

        const rankEmoji = i < 3 ? medals[i] : `#${i + 1}`;

        // Use textContent (not innerHTML) so names from the database
        // can never run as HTML or JavaScript — this blocks XSS attacks
        const rankSpan = document.createElement('span');
        rankSpan.className = 'lb-rank';
        rankSpan.textContent = rankEmoji;

        const nameSpan = document.createElement('span');
        nameSpan.className = 'lb-name';
        nameSpan.textContent = entry.name;

        const scoreSpan = document.createElement('span');
        scoreSpan.className = 'lb-score';
        scoreSpan.textContent = `${entry.score} / 15`;

        row.appendChild(rankSpan);
        row.appendChild(nameSpan);
        row.appendChild(scoreSpan);
        lbList.appendChild(row);
      });
    }
  });
}

// --- Create the floating stars in the background ---
function createStars() {
  const container = document.getElementById('starsContainer');
  for (let i = 0; i < 60; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Random size between 1px and 3px
    const size = Math.random() * 2.5 + 0.5;
    star.style.width  = size + 'px';
    star.style.height = size + 'px';

    // Random position anywhere on screen
    star.style.left = Math.random() * 100 + '%';
    star.style.top  = Math.random() * 100 + '%';

    // Random twinkle timing so they don't all flash at once
    star.style.animationDelay    = Math.random() * 3 + 's';
    star.style.animationDuration = (Math.random() * 2 + 2) + 's';

    container.appendChild(star);
  }
}

// --- Shuffle an array (mix things up randomly) ---
// This makes sure answers are in a different order every time!
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// --- Pick 15 random questions from our big list ---
function pickQuestions() {
  const shuffled = shuffle(allQuestions);
  return shuffled.slice(0, 15);
}

// --- Start the quiz! ---
function startQuiz() {
  // Check that the player typed their name
  playerName = nameInput.value.trim();
  if (!playerName || playerName.length > 20) {
    nameError.classList.remove('hidden');
    nameInput.focus();
    return;
  }
  nameError.classList.add('hidden');

  currentQuestions = pickQuestions();
  currentIndex = 0;
  score = 0;
  liveScore.textContent = '0';

  // Switch from start screen to quiz screen
  startScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');

  showQuestion();
}

// --- Show the current question ---
function showQuestion() {
  const q = currentQuestions[currentIndex];

  // Update the "Question X of 15" counter
  questionCounter.textContent = `Question ${currentIndex + 1} of 15`;

  // Update the progress bar width
  const progressPercent = ((currentIndex) / 15) * 100;
  progressBar.style.width = progressPercent + '%';

  // Show the question
  questionText.textContent = q.question;

  // Shuffle the 4 answers so the correct one isn't always in the same spot
  const shuffledAnswers = shuffle(q.answers);

  // Put the shuffled answers on the buttons
  const buttons = answersGrid.querySelectorAll('.answer-btn');
  buttons.forEach((btn, i) => {
    btn.textContent = shuffledAnswers[i];
    btn.disabled = false;
    btn.className = 'answer-btn'; // Reset any color classes
    btn.onclick = () => checkAnswer(btn, shuffledAnswers[i], q.correct);
  });

  // Hide the feedback box between questions
  feedbackBox.classList.add('hidden');
}

// --- Check if the answer is correct ---
function checkAnswer(clickedBtn, chosen, correct) {
  // Disable all buttons so you can't click twice
  const buttons = answersGrid.querySelectorAll('.answer-btn');
  buttons.forEach(btn => {
    btn.disabled = true;
    // Highlight the correct answer in green
    if (btn.textContent === correct) {
      btn.classList.add('correct');
    }
  });

  let message = '';

  if (chosen === correct) {
    // Right answer!
    score++;
    liveScore.textContent = score;
    clickedBtn.classList.add('correct');
    message = getCorrectMessage();
  } else {
    // Wrong answer
    clickedBtn.classList.add('wrong');
    message = `Not quite! ❌ The answer was: <strong>${correct}</strong>`;
  }

  // Show the feedback box
  feedbackText.innerHTML = message;
  feedbackBox.classList.remove('hidden');
}

// --- Fun messages for when you get it right ---
function getCorrectMessage() {
  const messages = [
    "Yes! 🎉 You're a true Katseye fan!",
    "Correct! 💜 The girls would be proud!",
    "Amazing! ✨ Keep it up!",
    "That's right! 🐱 Purr-fect answer!",
    "Nailed it! 🌟 You're on fire!",
    "Correct! 💎 Shining like a cat's eye!",
    "YES! 🎤 You know your stuff!",
    "Brilliant! 🩷 Katseye stan detected!",
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

// --- Move to the next question ---
function nextQuestion() {
  currentIndex++;

  if (currentIndex >= 15) {
    // All questions done! Show results
    showResults();
  } else {
    showQuestion();
  }
}

// --- Show the final results ---
function showResults() {
  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');

  const total = 15;
  const percent = Math.round((score / total) * 100);

  // Save this score to the leaderboard!
  saveScore(playerName, score);

  // Set the score text — use their name!
  resultScore.textContent = `${playerName} got ${score} out of ${total}!`;

  // Animate the score bar
  setTimeout(() => {
    scoreBar.style.width = percent + '%';
  }, 100);

  // Pick a message based on the score
  if (score === 15) {
    resultEmoji.textContent   = '👑';
    resultTitle.textContent   = 'PERFECT SCORE!';
    resultMessage.textContent = "Wow, you are the ULTIMATE Katseye fan! The girls would absolutely love you! You got every single question right. Incredible! 💜";
  } else if (score >= 12) {
    resultEmoji.textContent   = '🌟';
    resultTitle.textContent   = 'Super Katseye Fan!';
    resultMessage.textContent = "Amazing job! You really know your Katseye facts. You're practically an honorary member of the group! 🐱✨";
  } else if (score >= 9) {
    resultEmoji.textContent   = '💜';
    resultTitle.textContent   = 'True Katseye Fan!';
    resultMessage.textContent = "Great work! You know lots about the girls. Keep streaming their music and you'll get a perfect score next time! 🎶";
  } else if (score >= 6) {
    resultEmoji.textContent   = '🎤';
    resultTitle.textContent   = 'Katseye Learner!';
    resultMessage.textContent = "Nice try! You're still learning about Katseye. Watch Popstar Academy: Katseye on Netflix and then try again! 🎬";
  } else {
    resultEmoji.textContent   = '🐱';
    resultTitle.textContent   = 'New Katseye Fan!';
    resultMessage.textContent = "Everyone starts somewhere! Now you know more about Katseye than before. Go listen to 'Touch' and 'Debut' and try again! 🎵";
  }
}

// --- Button events ---
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);

// Press Enter in the name box to start too!
nameInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') startQuiz();
});

// Hide the error message as soon as they start typing
nameInput.addEventListener('input', () => {
  if (nameInput.value.trim()) nameError.classList.add('hidden');
});

playAgainBtn.addEventListener('click', () => {
  // Go back to the start screen and clear the name
  resultScreen.classList.add('hidden');
  nameInput.value = '';
  startScreen.classList.remove('hidden');
});

// Leaderboard buttons
lbOpenBtn.addEventListener('click', () => showLeaderboard('start'));
lbOpenBtn2.addEventListener('click', () => showLeaderboard('result'));

lbBackBtn.addEventListener('click', () => {
  leaderboardScreen.classList.add('hidden');
  // Go back to whichever screen opened it
  if (leaderboardScreen.dataset.from === 'result') {
    resultScreen.classList.remove('hidden');
  } else {
    startScreen.classList.remove('hidden');
  }
});

// --- Create stars when the page loads ---
createStars();
