var rn1 = Math.floor(Math.random()*6)+1;
var rn2 = Math.floor(Math.random()*6)+1;

if (rn1===1)
{
  document.querySelector(".dice_l").setAttribute("src", "images/dice1.png");
} else if (rn1===2)
{
  document.querySelector(".dice_l").setAttribute("src", "images/dice2.png");
} else if (rn1===3)
{
  document.querySelector(".dice_l").setAttribute("src", "images/dice3.png");
} else if (rn1===4)
{
  document.querySelector(".dice_l").setAttribute("src", "images/dice4.png");
} else if (rn1===5)
{
  document.querySelector(".dice_l").setAttribute("src", "images/dice5.png");
} else
{
  document.querySelector(".dice_l").setAttribute("src", "images/dice6.png");
}


if (rn2===1)
{
  document.querySelector(".dice_r").setAttribute("src", "images/dice1.png");
} else if (rn2===2)
{
  document.querySelector(".dice_r").setAttribute("src", "images/dice2.png");
} else if (rn2===3)
{
  document.querySelector(".dice_r").setAttribute("src", "images/dice3.png");
} else if (rn2===4)
{
  document.querySelector(".dice_r").setAttribute("src", "images/dice4.png");
} else if (rn2===5)
{
  document.querySelector(".dice_r").setAttribute("src", "images/dice5.png");
} else
{
  document.querySelector(".dice_r").setAttribute("src", "images/dice6.png");
}



if (rn1===rn2)
{
  document.querySelector("h1").innerHTML = "Draw! ";
  document.getElementsByClassName("flag_l")[0].style.visibility="visible";
  document.getElementsByClassName("flag_r")[0].style.visibility="visible";
} else if (rn1>rn2)
{
  document.querySelector("h1").innerHTML = "Player1 Win! ";
  document.getElementsByClassName("flag_l")[0].style.visibility="visible";
  document.getElementsByClassName("flag_r")[0].style.visibility="hidden";
} else
{
  document.querySelector("h1").innerHTML = "Player2 Win! ";
  document.getElementsByClassName("flag_l")[0].style.visibility="hidden";
  document.getElementsByClassName("flag_r")[0].style.visibility="visible";
}
