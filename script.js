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
var ml = 1000;
//display flame
function f(){
    for(var y=0 ; y<10 ; y++){
    var i = document.createElement("img");
    i.src="images/flame.gif";   
    i.style.marginLeft=ml+"px";
    i.className="i";
    i.id="a"+y;
    ml +=1500;
    document.getElementById("b").appendChild(i);
   }
} 

function finishGif(){  
   
    var finish = document.createElement("img");
    i.src="images/finish.gif";   
    i.style.marginLeft="300px";
    i.className="finish";
    i.id="finish";
    document.getElementById("b").appendChild(i);  
} 
var d=1;
var dw = 0;
//3. dead animation
function dead(){
    var dimg = document.getElementById("character");
    d++;
    if(d==11){
        d=10;
        dimg.style.marginTop="400px";
        document.getElementById("end").style.visibility="visible";
        document.getElementById("endscore").innerHTML=u;
    }
    dimg.src="images/Dead ("+d+").png";
    
}
var idl = 1;
var iw=0;
// 4. Idle animation
function idle(){
    var idleimg = document.getElementById("character");
    idleimg.src="images/Idle ("+idl+").png";
    idl++;
    if(idl==11){
        idl = 1;
    }
  
}

var flyb = 0;
 var bird=1;
 //5. bird fly animation
 function birdFly(){
    birdimg= document.getElementById("bird1");
    birdimg.src="images/Bird "+bird+".png";
    birdimg= document.getElementById("bird2");
    birdimg.src="images/Bird "+bird+".png";
    birdimg= document.getElementById("bird3");
    birdimg.src="images/Bird "+bird+".png";
    bird++;
    if(bird==7){
        bird=1;
    }
 }
