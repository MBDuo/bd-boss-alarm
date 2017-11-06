import * as firebase from 'firebase';

export let database;

// Initialize Firebase
export function init() {
  const config = {
    apiKey: "AIzaSyAn30Vj0PuDXglefhH6UvZRKPqK1Cin7Fk",
    authDomain: "bdtimer.firebaseapp.com",
    databaseURL: "https://bdtimer.firebaseio.com",
    projectId: "bdtimer",
    storageBucket: "bdtimer.appspot.com",
    messagingSenderId: "498957914217"
  };
  firebase.initializeApp(config);
  database = firebase.database();
}