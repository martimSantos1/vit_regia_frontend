import { initializeApp } from "firebase/app";
import { getMessaging, isSupported } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBywY7bzdz_BsC8me-pdQqMLIlB_cwfwBU",
  authDomain: "vitoria-regia-gecad.firebaseapp.com",
  projectId: "vitoria-regia-gecad",
  storageBucket: "vitoria-regia-gecad.firebasestorage.app",
  messagingSenderId: "166624094379",
  appId: "1:166624094379:web:32288ffbc707dd0dc26fee",
  measurementId: "G-TMQJWLNF35"
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