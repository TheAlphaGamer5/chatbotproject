var question;
var inputTalk;

function talk(){
inputTalk = document.getElementById("input").value;
//document.getElemmentById("chat-area").textContent += inputTalk;
question = "User: " + inputTalk + "<br>";
document.getElementById("chat-area").innerHTML += question;


var hi = question.search(/hello/i)
var how = question.search(/how are you/i);
var name = question.search(/name/i)
var old = question.search(/old/i);
var time = question.search(/time/i);
var year = question.search(/year/i);
var day = question.search(/day/i);
var date = question.search(/date/i);
var song = question.search(/sing a song/i);
var picture = question.search(/picture/i);
//var da = new Date(Date.now());
//  console.log("y u no work");
  //document.getElementById("chat-area").textContent = document.getElementById("input").value;

  document.getElementById("input").value
if (hi > -1) {
  document.getElementById("chat-area").innerHTML += "GLaDOS: Hello and, again, welcome to the Aperture Science computer-aided enrichment center."  + "<br>";
}

else if (how > -1) {
    document.getElementById("chat-area").innerHTML += "GLaDOS: Im doing fine but I've been really busy being dead. You know, after you MURDERED ME."  + "<br>";
}
else if (name > -1) {
    document.getElementById("chat-area").innerHTML += "GLaDOS: I am the Genetic Lifeform and Disk Operating System otherwise known as GLaDOS"  + "<br>";
}
else if (old > -1) {
    document.getElementById("chat-area").innerHTML += "GLaDOS: I am approximently 9999999999999999999999999999999999999999999999999999999999999999999999999999999999 -error can not complete query"  + "<br>";
}
else if (song > -1) {
    document.getElementById("chat-area").innerHTML += "GLaDOS: This was a triumph.I'm making a note here:HUGE SUCCESS.It's hard to overstate my satisfaction.Aperture Science.We do what we must because we can.For the good of all of us Except the ones who are dead. But there's no sense crying over every mistake.You just keep on trying till you run out of cake.And the science gets done and you make a neat gun.For the people who are still alive.I'm not even angry.I'm being so sincere right now.Even though you broke my heart and killed me.And tore me to pieces.And threw every piece into a fire.As they burned it hurt because I was so happy for you! Now these points of data make a beautiful line.And we're out of beta, we're releasing on time.So I'm GLaD I got burned.Think of all the things we learned For the people who are still alive. Go ahead and leave me. I think I prefer to stay inside. Maybe you'll find someone else to help you. Maybe Black Mesa... THAT WAS A JOKE. Haha. FAT CHANCE. Anyway, this cake is great. It's so delicious and moist. Look at me still talking when there's science to do. When I look out there it makes me GLaD I'm not you. I've experiments to run there is research to be done  On the people who are still alive And believe me I am still alive. I'm doing science and I'm still alive. I feel FANTASTIC and I'm still alive. While you're dying I'll be still alive. And when you're dead I will be still alive. Still alive Still alive"  + "<br>";
}
else {
    document.getElementById("chat-area").innerHTML += "GLaDOS: please, state something actually meaningful."  + "<br>";
}

}
