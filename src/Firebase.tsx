import { getAnalytics, isSupported } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDe3tU-xjm3pXt6MXaRSUqqUDDxGYPV2mM",
  authDomain: "mockyhub.firebaseapp.com",
  projectId: "mockyhub",
  storageBucket: "mockyhub.firebasestorage.app",
  messagingSenderId: "736234189179",
  appId: "1:736234189179:web:15d74e9314909f2501cdde",
  measurementId: "G-QG3BK050GS",
};

const app = initializeApp(firebaseConfig);

let analytics = null;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  } else {
    console.log("Analytics não suportado nesse ambiente.");
  }
});

const db = getFirestore(app);
const auth = getAuth(app);

export { analytics, auth, db };
