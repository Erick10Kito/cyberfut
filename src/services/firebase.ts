// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import {signInWithEmailAndPassword, getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk0T_JUQpv0FFwVQIDm0KALvl6IIxJzCg",
  authDomain: "cyberfut-dabae.firebaseapp.com",
  databaseURL: "https://cyberfut-dabae-default-rtdb.firebaseio.com",
  projectId: "cyberfut-dabae",
  storageBucket: "cyberfut-dabae.appspot.com",
  messagingSenderId: "990216373662",
  appId: "1:990216373662:web:adfddaa53c51cd1bb4428f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



async function LoginComEmailESenha(email:string,senha:string) {
try {
    await signInWithEmailAndPassword(auth, email,senha)
} catch(error) {

}
}

async function RegisterFunctionFirebase(name:string,surname:string, email:string, cpf:string, password:string,passwordConfirmation:string,terms:boolean ) {

}

export {app, auth}


