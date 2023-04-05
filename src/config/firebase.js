import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAth1MqIpcMGtrDSidWSHzZY2Gy7H0ROWk",
  authDomain: "tiktok---jornada-58d6b.firebaseapp.com",
  projectId: "tiktok---jornada-58d6b",
  storageBucket: "tiktok---jornada-58d6b.appspot.com",
  messagingSenderId: "490816693275",
  appId: "1:490816693275:web:e539a5d6dc742528eb84be",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
