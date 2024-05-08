
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
  import {getDatabase} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js"
  // TODO: Add SDKs for Firebase products that you want to useday
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAoXELnDmuA2vLcjlqfV-WpmR_eU1DSbQA",
    authDomain: "project-f27ef.firebaseapp.com",
    projectId: "project-f27ef",
    storageBucket: "project-f27ef.appspot.com",
    messagingSenderId: "738016055002",
    appId: "1:738016055002:web:e8ea4875a3e01e6468dfe3",
    measurementId: "G-YXHGJZJHLV",
    databaseURL:"https://project-f27ef-default-rtdb.firebaseio.com/"

  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase(app);
  
export const DB = db;