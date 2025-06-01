let userscore=0;
let computerscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
let uscore=document.querySelector("#userscore");
let cscore=document.querySelector("#computerscore");
const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        uscore.innerText=userscore;
        console.log("you win");
        msg.innerText=`You Win! Your ${userchoice} Beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        computerscore++;
        cscore.innerText=computerscore
        console.log("You lose");
        msg.innerText=`You Lost ${compchoice} Beats Your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const drawgame=()=>{
    console.log("game was draw.");
    msg.innerText="Game Was Draw";
    msg.style.backgroundColor="orange";
}
const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    //generate computer choice
    const compchoice=gencompchoice();
    console.log("computer choice=",compchoice);

    if(userchoice==compchoice){
        //draw
        drawgame();
    }
    else{
        let userwin='true';
        if(userchoice=="rock"){
            //scissor,paper
            userwin=compchoice === "paper" ? false:true;
        } else if(userchoice=="paper"){
            //rock,scissor
            userwin=compchoice ==="rock" ? true:false;
        } else{
            //rock paper
            userwin=compchoice=== "rock" ? false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        playgame(userchoice);
    })
})