import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: 'AIzaSyDC7hCYOYQSwiagc1_ZZj2jjOms1gZ2Fic',
    authDomain: 'cloud-messages-65d0e.firebaseapp.com',
    projectId: 'cloud-messages-65d0e',
    storageBucket: 'cloud-messages-65d0e.appspot.com',
    messagingSenderId: '388118828928',
    appId: '1:388118828928:web:8e6143076d554313b61365',
}

const app = initializeApp(firebaseConfig);

export { app as default }



