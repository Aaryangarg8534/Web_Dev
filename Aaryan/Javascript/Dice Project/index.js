// for dice for 1
var n1=Math.floor(Math.random()*6)+1; //1 to 6

var randomImagesource1="Images/dice" + n1 + ".png";//Image of dice from 1 to 6

var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImagesource1);

//for second dice

var n2=Math.floor(Math.random()*6)+1; //1 to 6

var randomImagesource2="Images/dice" + n2+".png" ;

var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImagesource2);

if(n1>n2){
    document.querySelector("h1").innerHTML= "🚩Player 1 Wins!";
}else if(n1<n2){
    document.querySelector("h1").innerHTML= "Player 2 Wins! 🚩";
}else{
    document.querySelector("h1").innerHTML="Draw!";
}