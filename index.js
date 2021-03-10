
var numberGenerator= Math.floor(Math.random()*6) + 1 ;

var randomDice= "dice"+ numberGenerator + ".png";

var randomSource= "images/" + randomDice;

var img1= document.querySelectorAll("img")[0].setAttribute("src" , randomSource);

var noGenerator=Math.floor(Math.random()*6) + 1;

var randomdice="dice" + noGenerator + ".png";

var randomImage = "images/" + randomdice;

var img2=document.querySelectorAll("img")[1].setAttribute("src", randomImage);


if (numberGenerator > noGenerator){
  document.querySelector(".honeX").innerHTML= " 🚩Player 1 wins.";
}
else if (noGenerator > numberGenerator) {
  document.querySelector(".honeX").innerHTML= " Player 2 wins 🚩. ";
}
else{
    document.querySelector(".honeX").innerHTML= " Draw, Roll it Again .🏁 ";
}
