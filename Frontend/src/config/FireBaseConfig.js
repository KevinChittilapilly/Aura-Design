import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBZtiu_kQrrTfHLhOWgXvopb0sVXIyf4j8",
  authDomain: "aura-design.firebaseapp.com",
  projectId: "aura-design",
  storageBucket: "aura-design.appspot.com",
  messagingSenderId: "853709371765",
  appId: "1:853709371765:web:ce218e7a2768acee59bb3c",
  measurementId: "G-7R7BV0NNSM",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
