const Fruits_and_Vegetables = [
  "apple",
  "orange",
  "strawberry",
  "banana",
  "cucumber",
  "tomato",
  "beetroot",
  "parsley",
  "carrot",
  "lemon",
  "apricot",
  "onion",
  "mango",
  "watermelon",
  "melon",
  "pineapple",
  "peach",
  "olive",
  "fennel",
  "lettuce",
];

const Animals = [
  "lion",
  "fox",
  "cat",
  "dog",
  "bird",
  "pigeon",
  "snake",
  "squirrel",
  "monkey",
  "whale",
  "rabbit",
  "grasshopper",
  "moose",
  "butterfly",
  "snail",
  "owl",
  "spider",
  "turtle",
  "bear",
  "hedgehog",
];

var Name=[ "omer", "hila, rebecca", 
  "tamar", "ariela", "dina", "abigail", "ruthi", 
  "noa", "sarah", "adi", "hodia", 
  "merav", "moriah", "michal", "talia", 
  "avital", "shira", "efrat", "yael" 
]
 let guessed =[];
let answer;
let wordStatus ;
let errors = 6;
let mistakes = 0;
//A function that checks what the game is about
function getSubject() {
  let subject = document.getElementById("subject");
  if (subject.value === "Animals") RandWord(Animals);
  else if (subject.value === "Name") RandWord(Name);
  else if (subject.value === "Fruits and Vegetables") RandWord(Fruits_and_Vegetables);
  else 
  {
  alert("Please choose a subject for the game");
  subject.value = " ";
}

}

//A function that extracts a word from the selected array
function RandWord(arr) {
  answer = arr[Math.floor(Math.random() * arr.length)];
  linesOfTheWord(answer);
  //alert(answer);
}

//A function that creates a bar as the number of letters
function linesOfTheWord(answer) {//debugger;
  wordStatus = answer
    .split("")
    .map((letter) => (guessed.indexOf(letter) >= 0 ? letter : "_"))
    .join("");
  document.getElementById("wordSpotLight").innerHTML = wordStatus;
  document.getElementById("wordSpotLight").style.letterSpacing = "8px";
}

//A function that compares the selected letter to a string
 function handleGuess(answer , letID) {  
  let flag =false;
  let str=wordStatus;
  for (let i = 0; i <answer.length; i++) {  
        if(answer[i]===letID){
          str=str.substring(0,i);
          str=str+letID;
          //debugger;
          str=str+wordStatus.substring((i+1),wordStatus.length);
          flag=true;
        }
      }
      if(!flag){
        mistakes+=1; 
        img();
        document.getElementById("mistakesNow").innerHTML =mistakes;
     }
     wordStatus=str; 
     document.getElementById("wordSpotLight").innerHTML = wordStatus;
     if(answer===wordStatus){
       document.getElementById("keyword").innerHTML ='yesss you won!';
       document.getElementById("wordSpotLight").innerHTML ='the answer is:'+answer;
    }
     if(mistakes===errors){
          mistakes=0;
          document.getElementById("wordSpotLight").innerHTML='The answer was: '+answer;
          document.getElementById("keyword").innerHTML='You lost this game. Maybe try again';
         }
  }
 function img(){
  document.getElementById('HangManImg').src='F:/לימודים שנה ב/מיישר פין-javascripe/work/img/'+(1+mistakes)+ '.png';
 }

 //const btnNo=document.querySelector('#no');
 //btnNo.addEventListener("mouseover",()=>{
  //const top=Math.random()*
  //document.body.clientHeight-btnNo.clientHeight;
 // const right=Math.random()*
 // document.body.clientWidth-btnNo.clientWidth;
  //btnNo.style.transfrom='translate(-${right}px,${top}px)' })








