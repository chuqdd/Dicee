var rn1 = Math.floor(Math.random()*6)+1;
var rn2 = Math.floor(Math.random()*6)+1;

var dice_l = document.querySelector(".dice_l");
var dice_r = document.querySelector(".dice_r");

var flag_l = document.querySelector(".flag_l");
var flag_r = document.querySelector(".flag_r");


if (rn1===1)
{
  dice_l.setAttribute("src", "images/dice1.png");
} else if (rn1===2)
{
  dice_l.setAttribute("src", "images/dice2.png");
} else if (rn1===3)
{
  dice_l.setAttribute("src", "images/dice3.png");
} else if (rn1===4)
{
  dice_l.setAttribute("src", "images/dice4.png");
} else if (rn1===5)
{
  dice_l.setAttribute("src", "images/dice5.png");
} else
{
  dice_l.setAttribute("src", "images/dice6.png");
}


if (rn2===1)
{
  dice_r.setAttribute("src", "images/dice1.png");
} else if (rn2===2)
{
  dice_r.setAttribute("src", "images/dice2.png");
} else if (rn2===3)
{
  dice_r.setAttribute("src", "images/dice3.png");
} else if (rn2===4)
{
  dice_r.setAttribute("src", "images/dice4.png");
} else if (rn2===5)
{
  dice_r.setAttribute("src", "images/dice5.png");
} else
{
  dice_r.setAttribute("src", "images/dice6.png");
}



if (rn1===rn2)
{
  document.querySelector("h1").innerHTML = "Draw! ";
  flag_l.style.visibility="visible";
  flag_r.style.visibility="visible";
} else if (rn1>rn2)
{
  document.querySelector("h1").innerHTML = "Player1 Win! ";
  flag_l.style.visibility="visible";
  flag_r.style.visibility="hidden";
} else
{
  document.querySelector("h1").innerHTML = "Player2 Win! ";
  flag_l.style.visibility="hidden";
  flag_r.style.visibility="visible";
}
