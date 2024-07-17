let h1=document.querySelector("h1");
let h2=document.querySelector("h2");
let flash=document.querySelector(".flash");
let greenFlash=document.querySelector(".greenFlash");
let allBtn=document.querySelectorAll(".btn");

let colors=["red","green","blue","yellow"];
let gameSeq=[];
let userSeq=[];

//starting the game
let started=0;
let level =0;
addEventListener("keypress",()=>{
    if (started==0) {
        started=1;
        levelUp();
    }
});

function levelUp(){
    userSeq=[];
    level++;
    if (started==0) {
        started=1;
        h2.innerText="Game Starting...";
    }

    setTimeout(()=>{
        h2.innerText=`level ${level}`;
    },200);

    let rdmIdx=Math.floor(Math.random()*4);
    let rdmColor=colors[rdmIdx];
    let rdmBox=document.querySelector(`.${rdmColor}`);

    gameSeq.push(rdmColor);

    setTimeout(()=>{
        gameFlash(rdmBox);
    },500)
    //gameFlash(rdmBox);

}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },200);
}

function green_Flash(){
    this.classList.add("greenFlash");
    setTimeout(()=>{
        this.classList.remove("greenFlash");
    },200);

    userChoice=this.getAttribute("id");
    userSeq.push(userChoice);

    checkAns(userSeq.length-1);
    
}
for (btn of allBtn) {
    btn.addEventListener("click",green_Flash);
}

function checkAns(idx){

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }  
    }
    else{
        h2.innerHTML=` Game Over!!!Your score was <b>${level-1}.</b><br>Press any key to restart the game. `;
        h2.style.color="yellowgreen";
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor="white";
        },200)
        reset();
        
    }
}

function reset(){
    started=0;
    gameSeq=[];
    userSeq=[];
    level=0;
}