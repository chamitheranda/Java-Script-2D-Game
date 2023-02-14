// set up sounds
rs = new Audio("sound/run.mp3");
rs.loop=true;

js = new Audio("sound/jump.mp3");

is = new Audio("sound/idle.mp3");
is.loop=true;

ds = new Audio("sound/dead.mp3");

bs = new Audio("sound/background.mp3");
bs.loop=true;
var fid = 0;

wins = new Audio("sound/win.mp3");

var rw = 0 ;
var n=1;
//1. Run animation 
function run(){
   
    if(n==9){
        n=1;
    }
    var rimg = document.getElementById("character");
    rimg.src="images/Run ("+n+").png";
    n++;   
}
//2. background move
var t = 0;
var bw = 0 ;
function b(){
    var bimg= document.getElementById("b").style.backgroundPositionX=t+"px";
    t -= 20;
}
