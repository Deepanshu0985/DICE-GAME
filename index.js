var randomnumber = Math.random();
randomnumber= Math.floor(randomnumber*6) + 1;
console.log(randomnumber);
var n = randomnumber;

var random2= Math.floor(Math.random()*6) + 1;
console.log(random2);

var imgarray = new Array(6);
imgarray[0]=new Image();
imgarray[0].src = 'images/dice1.png';
imgarray[1]=new Image();
imgarray[1].src = 'images/dice2.png';
imgarray[2]=new Image();
imgarray[2].src = 'images/dice3.png';
imgarray[3]=new Image();
imgarray[3].src = 'images/dice4.png';
imgarray[4]=new Image();
imgarray[4].src = 'images/dice5.png';
imgarray[5]=new Image();
imgarray[5].src = 'images/dice6.png';

document.getElementById("firstimg").setAttribute("src" ,imgarray[n-1].src);
document.getElementById("secondimg").setAttribute("src" ,imgarray[random2-1].src);

if (randomnumber>random2){
    document.getElementById("heading").innerHTML = "<em>PLAYER 1 WINS</em>";
}
else if(randomnumber<random2){
    document.getElementById("heading").innerHTML = "<em>PLAYER 2 WINS</em>";
}
else{
    document.getElementById("heading").innerHTML = "<em>DRAW TRY AGAIN</em>";
}