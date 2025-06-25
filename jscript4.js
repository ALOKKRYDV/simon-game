let game=[];
let user=[];
let btn=["red","green","blue","orange"];

let started=false;
let level=0;
let h3=document.querySelector("h3");
let body=document.querySelector("body");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelup();
    }     
})

function gameflash(btn){
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 150);
}
function userflash(btn){
  btn.classList.add("userflash");
  setTimeout(() => {
    btn.classList.remove("userflash");
  }, 150);
}
function bodyflash(){
  body.classList.add("bodyflash");
  setTimeout(() => {
    body.classList.remove("bodyflash");
  }, 300);
}

function levelup(){
    user=[];
    level++;
    h3.innerText=`level ${level}`;
    let randomno=Math.floor(Math.random()*4);
    let randomcol=btn[randomno];
    game.push(randomcol); 
    let randombtn= document.querySelector(`.${randomcol}`)
    gameflash(randombtn);
}

function check(idx){
    if(user[idx-1]===game[idx-1]){
    if(game.length===idx){
        setTimeout(levelup,500);
    }
    } else{
        bodyflash();
        h3.innerHTML=`Game over! your score was ${level-1}<br> Press any key to start.`;
        level=0;
        started=false;
        user=[];
        game=[];
       
    }
}

function click (){
  if(started==true){
    userflash(this);
    let usercolor=this.getAttribute("id");
    user.push(usercolor);
    check(user.length);
}
}

let allbtn=document.querySelectorAll(".btn");
for(btnn of allbtn){
    btnn.addEventListener("click",click);
}