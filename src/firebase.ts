import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB-g71DF-292NaaQRBjWWQJCD9gL4ZkgEQ",
  authDomain: "porag-2e42a.firebaseapp.com",
  projectId: "porag-2e42a",
  storageBucket: "porag-2e42a.firebasestorage.app",
  messagingSenderId: "46906801791",
  appId: "1:46906801791:web:c39910449b6c8aa01b094a",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
