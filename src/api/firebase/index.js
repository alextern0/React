import firebase from "firebase";

const firebaseConfig = {
   apiKey: "AIzaSyCugw073izNEEa2FOsTNLWgwkFBdsZpFNA",
   authDomain: "imposing-ratio-305616.firebaseapp.com",
   databaseURL: "https://imposing-ratio-305616-default-rtdb.firebaseio.com",
   projectId: "imposing-ratio-305616",
   storageBucket: "imposing-ratio-305616.appspot.com",
   messagingSenderId: "428901545743",
   appId: "1:428901545743:web:b17e0084bca1148499f07a",
   measurementId: "G-TBVRPTW0CW"
};
 
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();

export const profileRef = db.ref("profile");
export const chatsRef = db.ref("chats");
export const messagesRef = db.ref("messages");