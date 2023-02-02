
import {$} from "./quizModule.js";
import {javascript,css,html,subjects,maths} from "./question.js";
 let selectedCategory;
 function loader(){
    let preloader = document.getElementById("preloader");
    let proceed = document.createElement("div");
    proceed.style.position="absolute";
    proceed.style.top="80vh";
    proceed.style.border="1px solid blue";
    proceed.style.color="#fff";
    proceed.style.textAlign="center";
    proceed.style.fontFamily="courier";
    proceed.style.fontSize="5vmin";
    proceed.innerHTML = "PROCEED&#8680;";
    proceed.style.left = "35vw";
    proceed.style.right = "35vw"
    proceed.style.backgroundColor ="blue";
    proceed.style.boxShadow="1px 2px 0px rgba(175,175,175)";
    proceed.style.display="none";
    let logoCon = document.createElement("div");
    let logo = document.createElement("h1");
    logo.style.color = "#fff";
    logo.style.marginLeft = "3px";
    logo.innerHTML =
     `<h1>&#9439;&#9432;&#9434;&#9432;&#9437;<sup>&trade;</sup></h1>`;
     logoCon.append(logo);
   let text = "WELCOME TO PIKIN QUIZ ";
   //let miniText = "...widening your horizon"
   let display = document.createElement("h1");
   let animation = document.createElement("div");
   animation.append(display);
   animation.classList.add("animation");
   preloader.append(animation,logoCon,proceed);
  // preloader.append(logo);
    let interval = setInterval($.rotateColor(preloader),400);
    $.animateText(text,display);
    globalThis.addEventListener("load",(evt)=>{
      proceed.style.display = "block";
      proceed.addEventListener("click",(evt)=>{
        preloader.style.display = "none";
      });
    });
    
 }
loader();
 function category(){
    let categoryPage = document.getElementById("category");
    let logoCon = document.querySelector(".logon");
    let logo = document.createElement("h1");
    logo.style.color = "#fff";
    logo.style.fontSize = "22px";
    logo.style.marginLeft = "3px";
    logo.innerHTML =
     `<h1>&#9439;&#9432;&#9434;&#9432;&#9437;<sup>&trade;</sup></h1>`;
     logoCon.append(logo);
    let selector = document.querySelector(".select");
    let heading = document.createElement("h1");
    let list = document.createElement("ul");
    heading.textContent = 'Categories';
    heading.style.fontSize= "1.3rem";
    selector.append(heading);
    for(let subject of subjects){
      let li = document.createElement("li");
      li.classList.add("startul");
      li.innerHTML = `<input type="radio" name="options" value=${subject}>
      ${subject}`;
      list.append(li);

    }
    list.style.marginTop = '10px'
    list.style.listStyleType= "none"
    selector.append(list)
    let value = document.querySelectorAll('input[name="options"]');
    let proceed = document.createElement("div");
    proceed.style.position="absolute";
    proceed.style.top="80vh";
    proceed.style.border="1px solid blue";
    proceed.style.color="#fff";
    proceed.style.textAlign="center";
    proceed.style.fontFamily="courier";
    proceed.style.fontSize="5vmin";
    proceed.innerHTML = 'START&#8680;';
    proceed.style.left = "35vw";
    proceed.style.right = "35vw"
    proceed.style.backgroundColor ="blue";
    proceed.style.boxShadow="1px 2px 0px rgba(175,175,175)";
    proceed.style.display="none";
    categoryPage.append(proceed);
    let mathsquiz = mathsQuiz(0);
    let jsquiz = jsQuiz(0);
    value.forEach((radbutton)=>{
      radbutton.addEventListener('click',(evt)=>{
        directive.style.display = 'none';
        proceed.style.display = "block";
        
        proceed.addEventListener('click',(evt)=>{
            count();
          categoryPage.style.display = "none";
          value.forEach((radbtn)=>{
            if(radbtn.checked){
              let checked = radbtn.value;
              console.log(checked)
              switch(checked){
                case "JavaScript":
                  jsquiz();
                  break;
                case "CSS":
                  cssQuiz();
                  break;
                case "HTML":
                  htmlQuiz();
                  break;
                case "Maths": 
                  mathsquiz();
                  break;
              }
            }
          })
              });
          
      
      })
    });
    let directive = document.createElement('h2');
    directive.innerHTML= `Please&nbsp;select&nbsp;a&nbsp;category...`;
    categoryPage.append(directive);
    directive.style.position = "absolute";
    directive.style.top  = "68vh"
    directive.style.color = "#fff";
    directive.style.left = "25vw";
    directive.style.right = "25vw";
    directive.style.fontSize = "1rem";
    
    
 }
category()
 
function dropMenu(){
 let progressbar = document.querySelector(".progress");
  let ul = document.createElement("ul");
  let menuCon = document.createElement("div");
  for(let item of subjects){
    let li = document.createElement("li");
    li.classList.add("changeCategory");
    li.innerText = item;
    ul.append(li);
  }
    
  menuCon.classList.add("drop-down");
  menuCon.append(ul);
  document.body.append(menuCon);

  let bars = document.querySelector(".bars");
  let cancel = document.querySelector(".cancel");
  
   bars.addEventListener('click',(evt)=>{
     menuCon.style.display = "block";
     $.slideIn(menuCon,"50vw",1);
     bars.style.display = "none";
     cancel.style.display = "block";
   });
   
  cancel.addEventListener("click",(evt)=>{
      $.slideOut(menuCon,1)
      bars.style.display = "block";
       cancel.style.display = "none";
   });
let categories = document.querySelectorAll(".changeCategory");
  let mathsquiz = mathsQuiz(0);
  let jsquiz = jsQuiz(0);
  
    categories.forEach((list)=>{
      list.addEventListener("click",(evt)=>{
         let clicked = list.innerText;
          selectedCategory = clicked;
          progress.style.width = "0px";
          progressText.textContent = "" ;
          value = 4;
        switch(clicked){
                case "JavaScript":
                  jsquiz();
                  break;
                case "CSS":
                  cssQuiz();
                  break;
                case "HTML":
                  htmlQuiz();
                  break;
                case "Maths": 
                  mathsquiz();
                  break;
              }
      });
    })
   
}
dropMenu()

function count(){
  let progressbar = document.querySelector(".progress");
  let countDown = document.querySelector(".timer");
  let mins= 14;
  let secs = 59;
  countDown.innerText = `${mins}:${secs}`;
  let timer = setInterval(()=>{
    --secs;
    if(secs == 0){
      --mins;
      secs = 60;
    };
    if(mins == 0){
      clearInterval(timer);
    }
    let timeLeft = `${mins}:${secs}`;
    countDown.innerHTML = timeLeft;
  },1000);
   globalThis.progress = document.createElement("div");
  progress.style.height = "99%";
  progress.style.borderRadius = "10px";
  progress.style.width = "0%";
  progress.style.backgroundColor= "#03a9f4";
  progressbar.append(progress);
   globalThis.progressText = document.createElement("span");
  progressText.style.position = "absolute";
  let submit = document.querySelector(".btn1")
   globalThis.value = 4;
   let mathsquiz =  mathsQuiz(1);
   let jsquiz = jsQuiz(1);
  submit.addEventListener("click",()=>{
    $.updateProgress(progress,value);
    progressText.textContent = `${value}%`;
    if(value >=100) value = 96;
    value += 4;
  //  let selectedCategory;
    let  startul = document.querySelectorAll(`input[name="options"]`);
    let categories = document.querySelectorAll(".changeCategory");
    
   if(!selectedCategory){
    startul.forEach((radbtn)=>{
      if(radbtn.checked){
        selectedCategory = radbtn.value;
      };
     
      //console.log(radbtn.checked);
    })
   }
   
   switch(selectedCategory){
                case "JavaScript":
                  jsquiz();
                  break;
                case "CSS":
                  cssQuiz();
                  break;
                case "HTML":
                  htmlQuiz();
                  break;
                case "Maths": 
                  mathsquiz();
                  break;
              }
   //console.log(selectedCategory)
  });
  
  progressbar.append(progressText);
}


function jsQuiz(i){
 //  let i = 0;
  let question = document.querySelector(".question");
  let optionA = document.querySelector(".optionA");
  let optionB = document.querySelector(".optionB");
  let optionC = document.querySelector(".optionC");
  let optionD = document.querySelector("  .optionD");
  let options = [optionA,optionB,optionC,optionD];
   return function insert(){
  question.innerHTML= `<p>${javascript[i].question}</p>`;
       ++i;
       console.log(i)
  };
  //console.log("here");
}
//let jsquiz = jsQuiz(0);



function mathsQuiz(i){
 //let i = 0;
  let question = document.querySelector(".question");
  let optionA = document.querySelector(".optionA");
  let optionB = document.querySelector(".optionB");
  let optionC = document.querySelector(".optionC");
  let optionD = document.querySelector("  .optionD");
  let options = [optionA,optionB,optionC,optionD];
   return function insert(){
  question.innerHTML= `<p>${maths[i].question}</p>`;
       ++i;
       console.log(i)
  };
}
//let mathsquiz = mathsQuiz(0);
function htmlQuiz(){};
function cssQuiz(){};

