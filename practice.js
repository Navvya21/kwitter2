
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA0u44DvEaCNcnNTF3JMdOPal-pk8vm5hQ",
    authDomain: "kwitter-914c7.firebaseapp.com",
    databaseURL: "https://kwitter-914c7-default-rtdb.firebaseio.com",
    projectId: "kwitter-914c7",
    storageBucket: "kwitter-914c7.appspot.com",
    messagingSenderId: "780520726518",
    appId: "1:780520726518:web:5d7c5c74efa070da3b31d7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({ 
          purpose : "adding user" 
        });
  }