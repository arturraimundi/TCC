// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgwFZD6dngE9P538_9qUlFQGOmEFeoI-M",
  authDomain: "cadastroteste-25ebe.firebaseapp.com",
  projectId: "cadastroteste-25ebe",
  storageBucket: "cadastroteste-25ebe.appspot.com",
  messagingSenderId: "162462046613",
  appId: "1:162462046613:web:a8366d3826bbd3542c3e9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//submit button

const submit = document.getElementById("entrar");

submit.addEventListener("click", function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      // Signed in
      alert("você está logado!")
      window.location.href = "/index.html";
      const user = userCredential.user;
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Login ou Senha incorretos");
      // ..
    });
  
});
