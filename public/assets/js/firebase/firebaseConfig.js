import { initializeApp } from "firebase-admin";

const firebaseConfig = {
    apiKey: "AIzaSyCPCor1PS8VlXb4PD_0IY7d7pIcFSdsnGM",
    authDomain: "cardapiosootz2.firebaseapp.com",
    projectId: "cardapiosootz2",
    storageBucket: "cardapiosootz2.appspot.com",
    messagingSenderId: "753465755580",
    appId: "1:753465755580:web:66f730e426eaf27cd4cdb9"
};

export const app = initializeApp(firebaseConfig);