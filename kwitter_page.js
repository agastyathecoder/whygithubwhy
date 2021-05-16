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
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      user_name=localStorage.getItem("user_name");
      room_name=localStorage.getItem("room_name");
      function send(){
         msg=document.getElementById("msg").value; 
         firebase.database().ref(room_name).push({
               name:user_name,
               message :msg,like:0
         });
         document.getElementById("msg").value="";
      }   
      firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();
