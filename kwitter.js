function addUser(){
 user_name=document.getElementById("text_input").value;
 localStorage.setItem("text_input", user_name);
 window.location="kwitter_room.html";
 
}