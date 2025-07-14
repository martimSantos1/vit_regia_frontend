import { initializeApp } from "firebase/app";
import { getMessaging, isSupported } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "fireBaseAPIKey",
  authDomain: "vitoria-regia-gecad.firebaseapp.com",
  projectId: "vitoria-regia-gecad",
  storageBucket: "vitoria-regia-gecad.firebasestorage.app",
  messagingSenderId: "senderID",
  appId: "appID",
  measurementId: "measurementID"
};

// Inicializar Firebase
const firebaseApp = initializeApp(firebaseConfig);

// messaging será undefined se o browser não suportar
let messaging: ReturnType<typeof getMessaging> | undefined = undefined;

// Verifica suporte a Firebase Messaging
isSupported().then((supported) => {
  if (supported) {
    messaging = getMessaging(firebaseApp);
    console.log("Firebase Messaging ativo.");
  } else {
    console.warn("Firebase Messaging não suportado neste navegador.");
  }
});

export { messaging };
