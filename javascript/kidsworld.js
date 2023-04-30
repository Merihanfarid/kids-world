// button of links

var link=document.getElementById("links");
var display=0;
function hideshow4(){
    if (display == 1){
        link.style.display="block";
        display=0;
    }else{
    link.style.display='none';
    display=1;
    }
}

//stories
var div = document.getElementById("EOS1");
var display=0;
function hideshow1(){
if (display == 1){
    div.style.display="block";
    display=0;
}else{
div.style.display='none';
display=1;
}
}
//games
var games = document.getElementById("EOS2");
var display=0;
function hideshow2(){
if (display == 1){
    games.style.display="block";
    display=0;
}else{
games.style.display='none';
display=1;
}
}
//cartoons
var cartoon = document.getElementById("EOS3");
var display=0;
function hideshow3(){
if (display == 1){
    cartoon.style.display="block";
    display=0;
}else{
cartoon.style.display='none';
display=1;
}
}