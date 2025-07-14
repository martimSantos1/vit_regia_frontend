// Firebase SDKs para service workers (versão compatível)
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js');

// Configuração igual à usada no firebase.ts
firebase.initializeApp({
    apiKey: "AIzaSyBywY7bzdz_BsC8me-pdQqMLIlB_cwfwBU",
    authDomain: "vitoria-regia-gecad.firebaseapp.com",
    projectId: "vitoria-regia-gecad",
    storageBucket: "vitoria-regia-gecad.firebasestorage.app",
    messagingSenderId: "166624094379",
    appId: "1:166624094379:web:32288ffbc707dd0dc26fee",
    measurementId: "G-TMQJWLNF35"
});

// Inicializar messaging no SW
const messaging = firebase.messaging();

// Lidar com mensagens recebidas em background
messaging.onBackgroundMessage(payload => {
    const notificationTitle = payload.notification?.title || "Notificação";
    const notificationOptions = {
        body: payload.notification?.body || "",
        icon: "/icon.png" // opcional
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});