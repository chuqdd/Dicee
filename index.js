var rn1 = Math.floor(Math.random()*6)+1;
var rn2 = Math.floor(Math.random()*6)+1;

var dice_l = document.querySelector(".dice_l");
var dice_r = document.querySelector(".dice_r");

var flag_l = document.querySelector(".flag_l");
var flag_r = document.querySelector(".flag_r");


dice_l.setAttribute("src", "images/dice"+rn1+".png");
dice_r.setAttribute("src", "images/dice"+rn2+".png");


if (rn1===rn2)
{
  document.querySelector("h1").innerHTML = "Draw! ";
  flag_l.style.visibility="visible";
  flag_r.style.visibility="visible";
} else if (rn1>rn2)
{
  document.querySelector("h1").innerHTML = "Player 1 Win! ";
  flag_l.style.visibility="visible";
  flag_r.style.visibility="hidden";
} else
{
  document.querySelector("h1").innerHTML = "Player 2 Win! ";
  flag_l.style.visibility="hidden";
  flag_r.style.visibility="visible";
}
