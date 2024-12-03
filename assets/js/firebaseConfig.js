import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBXpXqAY7BSkCYzsCDDtNCve255BwrjnZk",
  authDomain: "internal-project-8163e.firebaseapp.com",
  projectId: "internal-project-8163e",
  storageBucket: "internal-project-8163e.firebasestorage.app",
  messagingSenderId: "16645092059",
  appId: "1:16645092059:web:c1a0c7aecaaf5d6122d2fe",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
