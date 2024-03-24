let userScore=0;
let compScore=0;
const userscorepara=document.querySelector("#user-score");
const  compscorepara=document.querySelector("#comp-score");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const gencomputerchoice=()=>
{
    const options=["rock","paper","scissors"];
    const randomindex=Math.floor(Math.random()*3);
    return options[randomindex];

    //rock,paper,sccissors

};
const drawgame=()=>
{
    console.log("game was draw");
    msg.innerText="Game was draw";
    msg.style.backgroundColor="#081b31";

};
const showwinner=(userwin,computerchoice,userchoice)=>
{
    if(userwin)
    {
        userScore+=1;
        console.log("you win");
        msg.innerText=`You win! Your ${userchoice} beats ${computerchoice}`;
        msg.style.backgroundColor="green";
        userscorepara.innerText=userScore;
    }
    else{
        compScore+=1;
        console.log("you lose");
        msg.innerText=`You lose..${computerchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
        compscorepara.innerText=compScore;
    }
};

const playgame=(userchoice)=>
{
    let userwin;
    console.log(userchoice);
    const computerchoice=gencomputerchoice();
    console.log(computerchoice);
    if(userchoice==computerchoice)
    {
         drawgame();
    }
    else{
        userwin=true;
        if(userchoice=="rock")
        {
            userwin=computerchoice==="paper"?false:true;
        }
        else if(userchoice==="paper")
        {
            userwin=computerchoice==="scissors"?false:true;
        }
        else{
            userwin=computerchoice==="rock"?false:true;
        }
    }
    showwinner(userwin,computerchoice,userchoice);

};


choices.forEach((choice)=>
{
    console.log(choice);
    choice.addEventListener("click",()=>
    {
        const userchoice=choice.getAttribute("id");
        console.log("choice is selected");
        console.log(userchoice);
        playgame(userchoice);

    });
     

});

