var question;
var inputTalk;

function talk(){
inputTalk = document.getElementById("input").value;
//document.getElemmentById("chat-area").textContent += inputTalk;
question = "User: " + inputTalk + "<br>";
document.getElementById("chat-area").innerHTML += question;

var how = question.search(/how are you/i);
var old = question.search(/old/i);
var time = question.search(/time/i);
var year = question.search(/year/i);
var day = question.search(/day/i);
var date = question.search(/date/i);
var picture = question.search(/picture/i);
//var da = new Date(Date.now());




/*
  console.log("y u no work");
  //document.getElementById("chat-area").textContent = document.getElementById("input").value;
  document.getElementById("input").value
if ($('#input').val()=="hello" ) {
  document.getElementById("chat-area").innerHTML = "Hello and, again, welcome to the Aperture Science computer-aided enrichment center.";
}
else if ($('#input').val()=="hey" ) {
  document.getElementById("chat-area").innerHTML = "Hello and, again, welcome to the Aperture Science computer-aided enrichment center.";
}
else if ($('#input').val()=="sup" ) {
  document.getElementById("chat-area").innerHTML = "Hello and, again, welcome to the Aperture Science computer-aided enrichment center.";
}
else if ($('#input').val()=="whats up" ) {
  document.getElementById("chat-area").innerHTML = "Hello and, again, welcome to the Aperture Science computer-aided enrichment center.";
}
else if ($('#input').val()=="howdy" ) {
  document.getElementById("chat-area").innerHTML = "Hello and, again, welcome to the Aperture Science computer-aided enrichment center.";
}
else if ($('#input').val()=="hola" ) {
  document.getElementById("chat-area").innerHTML = "Hello and, again, welcome to the Aperture Science computer-aided enrichment center.";
}
else if ($('#input').val()=="hi" ) {
  document.getElementById("chat-area").innerHTML = "Hello and, again, welcome to the Aperture Science computer-aided enrichment center.";
}
else if ($('#input').val()=="how are you" ) {
    document.getElementById("chat-area").innerHTML = "Im doing fine but I've been really busy being dead. You know, after you MURDERED ME.";
}
else if ($('#input').val()=="how you doing" ) {
    document.getElementById("chat-area").innerHTML = "Im doing fine but I've been really busy being dead. You know, after you MURDERED ME.";
}
else if ($('#input').val()=="hows life" ) {
    document.getElementById("chat-area").innerHTML = "Im doing fine but I've been really busy being dead. You know, after you MURDERED ME.";
}
else if ($('#input').val()=="how's life" ) {
    document.getElementById("chat-area").innerHTML = "Im doing fine but I've been really busy being dead. You know, after you MURDERED ME.";
}
else if ($('#input').val()=="how is life" ) {
    document.getElementById("chat-area").innerHTML = "Im doing fine but I've been really busy being dead. You know, after you MURDERED ME.";
}
else if ($('#input').val()=="what is your name" ) {
    document.getElementById("chat-area").innerHTML = "I am the Genetic Lifeform and Disk Operating System otherwise known as GLaDOS";
}
else if ($('#input').val()=="what's your name" ) {
    document.getElementById("chat-area").innerHTML = "I am the Genetic Lifeform and Disk Operating System otherwise known as GLaDOS";
}
else if ($('#input').val()=="whats your name" ) {
    document.getElementById("chat-area").innerHTML = "I am the Genetic Lifeform and Disk Operating System otherwise known as GLaDOS";
}
else if ($('#input').val()=="how old are you" ) {
    document.getElementById("chat-area").innerHTML = "I am approximently 9999999999999999999999999999999999999999999999999999999999999999999999999999999999S-error can not complete question";
}
else {
    document.getElementById("chat-area").innerHTML = "please, state something actually meaningful.";
}
*/








}
