import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCMQYEZjdc6hZtTSMvgK1wkJkHWLmZLdlQ",
    authDomain: "file-upload-b032e.firebaseapp.com",
    databaseURL: "https://file-upload-b032e.firebaseio.com",
    projectId: "file-upload-b032e",
    storageBucket: "file-upload-b032e.appspot.com",
    messagingSenderId: "362361590662",
    appId: "1:362361590662:web:6f04fcd1abbf26fc3ed207",
    measurementId: "G-NPZ2M8JC80"
};

export const fire = () => {
    if ( !firebase.apps.length ) {
        firebase.initializeApp( firebaseConfig );
        firebase.analytics();
    }
};