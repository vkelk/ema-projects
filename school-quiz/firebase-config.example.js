// ============================================================
// FIREBASE КОНФИГУРАЦИЈА - ПРИМЕР
// ============================================================
// Копирај го овој фајл во firebase-config.js и пополни ги
// вредностите од Firebase Console → Project Settings → Web App

const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL:       "https://YOUR_PROJECT_ID-default-rtdb.europe-west1.firebasedatabase.app",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
