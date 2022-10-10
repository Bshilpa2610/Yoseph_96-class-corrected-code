
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxpHFxpZ4lD7miZpdpUpEMOpKzyiRL3PU",
  authDomain: "kwitter-dda2e.firebaseapp.com",
  databaseURL: "https://kwitter-dda2e-default-rtdb.firebaseio.com",
  projectId: "kwitter-dda2e",
  storageBucket: "kwitter-dda2e.appspot.com",
  messagingSenderId: "827058051831",
  appId: "1:827058051831:web:09a60bb81e4081f8c811f2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("username");
document.getElementById("username").innerHTML="Welcome" + user_name + "!";


function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
Purpose:"Adding room_name"
})
localStorage.setItem("roomName",room_name)
window.location="Kwitter_page.html";
}


function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}
 getData();

      //Start code
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name");
          window.location = "index.html";
    }
      //End code
    

