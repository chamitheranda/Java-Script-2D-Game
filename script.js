function key(event){
    clearInterval(iw);
    is.pause();
    if(event.which==13){//enter
        if(rw==0){
            
            fid = f();             
            rw=setInterval(run,100); 
            if(flyb==0){
                flyb = setInterval(birdFly,200);
            }
            rs.play();
            is.pause();
            bw=setInterval(b,100);  
            sw=setInterval(updateScore,100);
            mw=setInterval(move,100);
        }           
    }
    if(event.which==32){//space
        if(dw == 0){
            if(jw==0){
                clearInterval(rw);
                rs.pause();
                rw=-1;
                
                jw=setInterval(jump,100);
                if(flyb==0){
                    flyb=setInterval(birdFly,200);
                }
                js.play();
                is.pause();
            }
        }
    }
}
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
 var jw=0;
 var j = 1;var mt =380;
 
 //6.Jump animation
 function jump(){
     jimg = document.getElementById("character");
     if(j<= 5){
         mt-=40;
         is.pause();
     }
     if(j>5){
         mt+=40;
         is.pause();
     }
     jimg.style.marginTop=mt+"px";
     j++;
     if(j==11){
         j=1;
         clearInterval(jw);
         jw=0;
         
         rw=setInterval(run,100);
         rs.play();
         is.pause();
         if(bw == 0){
             bw=setInterval(b,100);
         }
         if(fid==0){
             fid=f();
         }
         if(mw==0){
             mw=setInterval(move,100);
         }
         if(sw==0){
             sw=setInterval(updateScore,100);
         }
     }
     jimg.src="images/Jump ("+j+").png";
     
 }

 var mw = 0;
var mlf =15000;
//7.flame move animation
function move(){
    for(var l=0 ; l<10  ;){
        
        var d =document.getElementById("a"+l);
        var z = getComputedStyle(d);// kisiyam tag ekakata compute welaa tiyena css filter kara mema function eken laba de 
        var p = parseInt(z.marginLeft); //parseInt(700px -> 700)
        p-= 40;
        d.style.marginLeft=(p+"px");
        if(p>-80 & p<100){
           if(mt>300){
            clearInterval(rw);rw = -1;
            rs.pause();
            clearInterval(bw);bw =-1;
            clearInterval(mw);mw =-1;
            clearInterval(sw);sw=-1;
            clearInterval(jw);jw=-1;
            clearInterval(flyb);
            dw = setInterval(dead,100);
            is.pause();
            bs.pause();
            ds.play();
            
           }
        }   
        if(l==9){
            for(m=0 ; m<10; m++){
                mlf-= 4 ;
                document.getElementById("finish").style.visibility="visible";
                document.getElementById("finish").style.marginLeft=mlf+"px";

                var d =document.getElementById("finish");
                var z = getComputedStyle(d);// kisiyam tag ekakata compute welaa tiyena css filter kara mema function eken laba de 
                var p = parseInt(z.marginLeft);
                if(p>-80 & p<100){
                    clearInterval(rw);rw = -1;
                    rs.pause();
                    clearInterval(bw);bw =-1;
                    clearInterval(mw);mw =-1;
                    clearInterval(sw);sw=-1;
                    clearInterval(jw);jw=-1;
                    clearInterval(flyb);
                    setTimeout(function(){document.getElementById("win").style.visibility="visible";document.getElementById("b").style.visibility="hidden"},10000);
                    setInterval(startVideo,100);
                    bs.pause();
                    wins.play();
                   
                 }   
            }
        }     l++;   
    }        
}

var sw = 0;
var u = 0;
function updateScore(){
    u+=1;
    document.getElementById("score").innerHTML=u;
}
function re(){
    location.reload();
}

function start(){
    document.getElementById("b").style.visibility="visible";
    setInterval(idle,40);
}

function idleStart(){
    iw=setInterval(idle,50);
 }

 function idleSound(){
    is.play();
 }
 function clickPN(){
    document.getElementById("b").style.visibility="visible";
 }
 function backSound(){
    bs.play();
 }
 // play video
function startVideo(){
    var video =  document.getElementById("vid");
    video.play();
}