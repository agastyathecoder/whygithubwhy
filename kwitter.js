var firebaseConfig = {
    apiKey: "AIzaSyAjnqIrSGd8kYlxvFg5UejhPL2Knz8XYsc",
    authDomain: "class93-19653.firebaseapp.com",
    databaseURL: "https://class93-19653-default-rtdb.firebaseio.com",
    projectId: "class93-19653",
    storageBucket: "class93-19653.appspot.com",
    messagingSenderId: "660083278701",
    appId: "1:660083278701:web:bece7479e6c68bf5565064",
    measurementId: "G-LRSCKS5RSV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
function add_user(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("username",user_name);
    window.location="kwitter_room.html";
}