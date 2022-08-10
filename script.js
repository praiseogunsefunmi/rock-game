
//var computerChoice=a[Math.floor(Math.random()*a.length)];
const userChoiceD= document.getElementById("user-choice");
const  computerChoiceD = document.getElementById("computer-choice");
const  resultD = document.getElementById("result")
const scoreD= document.getElementById("scores")
let userchoice;
let computerchoice;
let result;
let tito;


//var computerChoice=a[Math.floor(Math.random()*a.length)];

const  clicked = function (event) { 
      userchoice = event.target.id;
      userChoiceD.innerHTML=userchoice;
      computerfunction();
      getUser();
      xec();
      
      
      
   ;
    
}
 
     
     const buttons=document.querySelectorAll("button")
     buttons.forEach(button => { addEventListener("click",clicked)
          
     });

          
     function computerfunction(){ const random= Math.floor(Math.random()*3);
          if( random===0 ){computerchoice="rock";}
          if(random ===1){ computerchoice="paper";}
          if(random===2) {computerchoice="scissors";}
          computerChoiceD.innerHTML=computerchoice;
          

     }function getUser(){
          if (userchoice===computerchoice){result = "its a draw";
     }
      if (userchoice === "rock" && computerchoice === "paper"){
          result = "you lose";}
        {  if( userchoice === "paper" && computerchoice === "rock"){
               result = "you  win";
        }
        if(userchoice === "scissors" && computerchoice === "rock"){
          result = "you lose";}
          if(
               userchoice === "scissors" && computerchoice === "paper"){
                    result = "you win";}
          if(userchoice === "rock" && computerchoice === "scissors"){
               result = "you win";}
               if(userchoice === "paper" && computerchoice === "scissors"){
                    result = "you lose";}

               

          

        
     }
      resultD.innerHTML= result;}
      
function xec (){ let tito=0;
     tito+=1
     if (userchoice===computerchoice) { alert(tito)
          
     }
}

    
    


  

