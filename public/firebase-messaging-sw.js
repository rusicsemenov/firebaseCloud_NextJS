importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: 'AIzaSyDC7hCYOYQSwiagc1_ZZj2jjOms1gZ2Fic',
    authDomain: 'cloud-messages-65d0e.firebaseapp.com',
    projectId: 'cloud-messages-65d0e',
    storageBucket: 'cloud-messages-65d0e.appspot.com',
    messagingSenderId: '388118828928',
    appId: '1:388118828928:web:8e6143076d554313b61365',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

console.log('Hello from firebase messaging')



messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});
