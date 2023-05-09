import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDFlADuW1YAVDAwE94Ij7_c1aXr8iIqstE",
  authDomain: "ecommerce-59f82.firebaseapp.com",
  projectId: "ecommerce-59f82",
  storageBucket: "ecommerce-59f82.appspot.com",
  messagingSenderId: "920526644948",
  appId: "1:920526644948:web:f4b342e1cd68db20d2fd41",
  measurementId: "G-PV7NYSDVYE"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export default app;