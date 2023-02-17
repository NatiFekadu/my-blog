import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1qzc5-E0AkJPRO3HFr7bTRMvk8_sVXOA",
  authDomain: "my-react-blog-48a7a.firebaseapp.com",
  projectId: "my-react-blog-48a7a",
  storageBucket: "my-react-blog-48a7a.appspot.com",
  messagingSenderId: "413730949735",
  appId: "1:413730949735:web:d2246e2c65e2b611eb62c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
