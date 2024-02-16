const firebaseConfig = {
    apiKey: "AIzaSyA7xrZugVk_xzGWUIAB5HhxS6QzlyOoEB4",
    authDomain: "authlog-1d81e.firebaseapp.com",
    projectId: "authlog-1d81e",
    storageBucket: "authlog-1d81e.appspot.com",
    messagingSenderId: "941746369517",
    appId: "1:941746369517:web:29deba2f840019520b6de4"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();