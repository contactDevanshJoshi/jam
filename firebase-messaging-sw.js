importScripts('https://www.gstatic.com/firebasejs/12.11.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.11.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAdPWpNEMvjVrrGgn4MNeuq8X-QpyuSon0",
  authDomain: "water-3a73e.firebaseapp.com",
  projectId: "water-3a73e",
  messagingSenderId: "779564094485",
  appId: "1:779564094485:web:10124db8aa9a798d172a1c"
});

const messaging = firebase.messaging();

// 🔔 BACKGROUND NOTIFICATION
messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "https://cdn-icons-png.flaticon.com/512/728/728093.png"
  });
});
