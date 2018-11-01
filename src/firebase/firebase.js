import Firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCbIHF6AK4Kc1HK0Z9wELL7BEI3qst7-bg",
    authDomain: "basketball-9e231.firebaseapp.com",
    databaseURL: "https://basketball-9e231.firebaseio.com",
    projectId: "basketball-9e231",
    storageBucket: "basketball-9e231.appspot.com",
    messagingSenderId: "223402913199"
  };

let app = Firebase.initializeApp(config);


  export const firebase = app;