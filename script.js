// ######Making bubbles change automatically######
function makeBubble(){
    var cluttter="";
for(var i=0;i<=150;i++){
    var randomNumber=Math.floor(Math.random()*10);
    cluttter +=` <div class="bubble"> ${randomNumber} </div>`;
}
document.querySelector("#pbtm").innerHTML=cluttter;
}
makeBubble();
// ###### makeBubble End #########

// ####### HIT VALUE CHANGE #######
var rn=Math.floor(Math.random()*10);
function getNewHit(){    
    document.getElementById("hitval").textContent=rn;
}
getNewHit();
// ########## HIT VALUE CHANGE END ##############


// ########### TIMER START ##############
 var timer=60;
 function runTimer(){
    var time=setInterval(function(){
        if(timer>0){
            timer--;           
            document.querySelector("#timerval").textContent=timer;
            
        }
        else{
            
            clearInterval(time);
            // document.querySelector("#pbtm").innerText="";
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over <br/>Total Score ${score}</h1>`;
            }
       
    },1000);
 }
 runTimer();

//  ############ TIMER END AND GAME OVER ###############

// ########### SCORE VALUE CHANGE ##############
 var score=0;
 function increaseScore(){
    score +=10;
    document.getElementById("scoreval").innerText=score;
 }
//  ########## SCORE VALUE END LOGIC ##########
 
// ########### EVENT CLICK USING EVENT BUBBLER ############
 document.querySelector("#pbtm").addEventListener("click",function(details){
    // alert("clicked");
    // console.log(details.target.textContent/innerText);
    var clickedNum=Number(details.target.innerText);
    if(clickedNum===rn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
 })

 