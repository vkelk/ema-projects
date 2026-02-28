# Ema's Game Studio

A collection of fun web games built for and with Ema (age 10). Each game is a standalone HTML/CSS/JS app — no build tools, no frameworks, just files you can open in a browser.

## Projects

### [school-quiz/](school-quiz/) — Училишен Квиз (School Quiz)

A multiple-choice quiz game for 4th grade students, fully in Macedonian. Players choose a subject, answer 15 randomly selected questions, and their score is saved to a shared online leaderboard.

**Subjects:**

- 🔬 **Природни науки** (Natural Sciences) — Electricity and Magnetism (55+ questions)
- 🌍 **Историја и општество** (History and Society) — The Environment Where I Live (60+ questions)

**Total questions: 117** drawn from official 4th grade textbooks:

- [Природни науки 4](https://www.e-ucebnici.mon.gov.mk/pdf/Prirodni_nauki_4_mak.pdf) — pages 120–146
- [Историја и општество 4](https://www.e-ucebnici.mon.gov.mk/pdf/Istorija_opstestvo_4_mak.pdf) — pages 109–124

**How it works:**

1. Player enters their name
2. Selects a subject
3. Answers 15 randomly shuffled questions (4 answer choices each)
4. Gets a score and encouraging message
5. Score is saved to the online leaderboard (top 10 per subject)

**Tech stack:**

- Pure HTML + CSS + JavaScript (no frameworks)
- Firebase Realtime Database for the shared leaderboard
- Compat CDN SDK (`firebase-app-compat.js` + `firebase-database-compat.js` v10.12.0)
- Content Security Policy header for XSS protection

**Firebase setup** (required to run the leaderboard):

1. Create a project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Realtime Database (Europe region)
3. Copy `school-quiz/firebase-config.example.js` → `school-quiz/firebase-config.js`
4. Fill in your project credentials from Project Settings → Web App
5. Set Realtime Database rules (paste in Firebase Console):

```json
{
  "rules": {
    "scores": {
      "$subject": {
        ".read": true,
        "$scoreId": {
          ".write": true,
          ".validate": "newData.hasChildren(['name','score','total','date'])
            && newData.child('name').isString()
            && newData.child('name').val().length <= 20
            && newData.child('score').isNumber()
            && newData.child('score').val() >= 0
            && newData.child('score').val() <= 15
            && newData.child('total').isNumber()
            && newData.child('total').val() == 15
            && newData.child('date').isString()
            && ($subject == 'nauka' || $subject == 'istorija')"
        }
      }
    }
  }
}
```

> `firebase-config.js` is gitignored and must never be committed — it contains real credentials.

---

### [katseye-quiz/](katseye-quiz/) — KATSEYE Fan Quiz

A fan trivia quiz about the K-pop group KATSEYE. Same technical stack as school-quiz (Firebase Realtime Database for leaderboard).

---

## Project structure

```text
ema-projects/
  school-quiz/
    index.html                  — game UI (all screens)
    style.css                   — visual design
    script.js                   — game logic + Firebase leaderboard
    questions.js                — question bank (nauka + istorija)
    firebase-config.js          — real credentials (gitignored)
    firebase-config.example.js  — template for setup
  katseye-quiz/
    index.html
    style.css
    script.js
    questions.js
    firebase-config.js          — real credentials (gitignored)
    firebase-config.example.js
```

## Running locally

Open `school-quiz/index.html` directly in a browser — no server needed. The leaderboard requires a valid `firebase-config.js` with real credentials. Without it the quiz still works, but scores won't be saved.
