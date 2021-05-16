
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

function addRoom(){
      Room_names=document.getElementById("room_name").value;

      firebase.database().ref("/").child(Room_names).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",Room_names);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name"+Room_names);
      row="<div class='room_name'id="+Room_names+"onclick='redirect_to_room_name(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirect_to_room_name(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}