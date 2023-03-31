import {$,id} from "./module.js";
/*import {javascript,html,css,subjects,maths,chem,bio,eng,phy,python} from "./question.js";*/
import {default as javascript, subjects} from "./Question/javascript.js";
import html from "./Question/html.js";
import css from "./Question/css.js";
import maths from "./Question/maths.js";
import chem from "./Question/chemistry.js";
import bio from "./Question/biology.js";
import eng from "./Question/english.js";
import phy from "./Question/physics.js";
import python from "./Question/python.js";
import general from "./Question/general.js";
let [interval,score,numOfCorrectAnswers,numOfWrongAnswers,k,selections] = [300,0,0,0,0,[]];
 let selectedCategory,comment;
 let duration = [9,59];
 let [mins,secs] = duration;
 

  
  
 function loader(){
    let preloader = document.getElementById("preloader");
    let proceed = document.createElement("div");
    
    proceed.style.cssText = `
    position: absolute;
    top: 80vh;
    border: 1px solid blue;
    color: #fff;
    text-align: center;
    font-family: courier;
    font-size: 5vmin;
    left: 35vw;
    right: 35vw;
    background-color: blue;
    box-shadow: 1px 2px 0 rgba(175,175,175);
    display: none`;
    proceed.innerHTML = "PROCEED&#8680;";

    let logoCon = document.createElement("div");
    let logo = document.createElement("h1");
    logo.style.color = "#fff";
    logo.style.marginLeft = "3px";
    logo.innerHTML =
     `<h1>&#9439;&#9432;&#9434;&#9432;&#9437;<sup>&trade;</sup></h1>`;
     logoCon.append(logo);
   let text = "WELCOME TO PIKIN QUIZ           ";
   let display = document.createElement("h1");
   let animation = document.createElement("div");
   animation.append(display);
   animation.classList.add("animation");
   preloader.append(animation,logoCon,proceed);
    let interval = setInterval($.rotateColor(preloader),400);
    $.animateText(text,display);
    globalThis.addEventListener("DOMContentLoaded",(evt)=>{
      proceed.style.display = "block";
      proceed.addEventListener("click",(evt)=>{
        preloader.style.display = "none";
        clearInterval(interval)
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
      li.innerHTML = `<input type="radio" name="options" value=${subject}>&nbsp;${subject}`;
      list.append(li);
    }
    list.style.marginTop = '10px';
    list.style.listStyleType= "none";
    selector.append(list);
    let radiobuttons = document.querySelectorAll('input[name="options"]');
    let startBtn = document.createElement("div");
    startBtn.style.cssText = `
    position: absolute;
    top: 80vh;
    border: 1px solid blue;
    color: #fff;
    text-align: center;
    font-family: courier;
    font-size: 5vmin;
    left: 35vw;
    right: 35vw;
    background-color: blue;
    box-shadow: 1px 2px 0 rgba(175,175,175);
    display: none`;
    startBtn.innerHTML = 'START&#8680;';
    categoryPage.append(startBtn);
    
    radiobuttons.forEach((radbutton)=>{
      radbutton.addEventListener('click',(evt)=>{
        directive.style.display = 'none';
        startBtn.style.display = "block";
        
        startBtn.addEventListener('click',(evt)=>{
            count();
          categoryPage.style.display = "none";
          radiobuttons.forEach((radbtn)=>{
            if(radbtn.checked){
              let checked = radbtn.value;
              document.querySelector("header div").innerHTML =
              `<h1>${checked} Quiz</h1>`
              switch(checked){
                case "JavaScript":
                  jsquiz();
                  break;
                case "CSS":
                  cssquiz();
                  break;
                case "HTML":
                  htmlquiz();
                  break;
                case "Maths": 
                  mathsquiz();
                  break;
                case "Chemistry":
                  chemquiz();
                  break;
                case "Biology":
                  bioquiz();
                  break;
                case "English":
                  engquiz();
                  break;
                case "Physics":
                  phyquiz();
                  break;
		case "Python":
	          pythonquiz();
	          break;
	        case "General-Knowledge":
	          generalquiz();
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
    directive.style.top  = "70vh"
    directive.style.color = "#fff";
    directive.style.left = "25vw";
    directive.style.right = "25vw";
    directive.style.fontSize = "1rem";
    
    
 }
category();
 
 function dropMenu(){
 let progressbar = document.querySelector(".progress");
  let ul = document.createElement("ul");
  let menuCon = document.createElement("div");
  for(let item of subjects){
    let li = document.createElement("li");
    li.classList.add("changeCategory");
    li.innerText = item;
    ul.append(li);
  };
  
  menuCon.classList.add("drop-down");
  menuCon.append(ul);
  document.body.append(menuCon);

  let menuBars = document.querySelector(".bars");
  let cancel = document.querySelector(".cancel");
  
   menuBars.addEventListener('click',(evt)=>{
     menuCon.style.display = "block";
     $.slideIn(menuCon,"50vw",1);
     menuBars.style.display = "none";
     cancel.style.display = "block";
   });
  
   document.body.addEventListener('click',(evt)=>{
     $.slideOut(menuCon,1);
     menuBars.style.display = "block";
     cancel.style.display = "none";
   })
   /*
  cancel.addEventListener("click",(evt)=>{
      $.slideOut(menuCon,1)
      menuBars.style.display = "block";
       cancel.style.display = "none";
   });
   */
let categories = document.querySelectorAll(".changeCategory");
    categories.forEach((list)=>{
      list.addEventListener("click",(evt)=>{
           setTimeout(()=>{
             list.style.backgroundColor = "red";
             setTimeout(()=>{
               list.style.backgroundColor ="rgba(105,136,160,50%)";
             },100);
           },0);
      document.querySelector(".questions-answers").innerHTML = "";
let [mathsuiz, jsuiz, chemuiz,htmluiz,cssuiz,biouiz,enguiz,phyuiz,pythonuiz,generaluiz] =
[$.quiz(maths,0),$.quiz(javascript,0),$.quiz(chem,0),$.quiz(html,0),$.quiz(css,0),$.quiz(bio,0),$.quiz(eng,0),$.quiz(phy,0),$.quiz(python,0),$.quiz(general,0)];

 [mathsquiz,jsquiz,chemquiz,htmlquiz,cssquiz,bioquiz,engquiz,phyquiz,pythonquiz,generalquiz] =
 [$.quiz(maths,1),$.quiz(javascript,1),$.quiz(chem,1),$.quiz(html,1),
 $.quiz(css,1),$.quiz(bio,1),$.quiz(eng,1),$.quiz(phy,1),$.quiz(python,1),$.quiz(general,1)];
         let clicked = list.innerText;
          selectedCategory = clicked;
       document.querySelector("header div").innerHTML = `<h1>${selectedCategory}</h1>`;
          [mins, secs] = duration;
          k=0;
        numOfCorrectAnswers =0;
        numOfWrongAnswers =0;
         value = 5;
        progressText.textContent = "";
         progress.style.width = "0px";
        switch(clicked){
                case "JavaScript":
                  jsuiz();
                  break;
                case "CSS":
                  cssuiz();
                  break;
                case "HTML":
                  htmluiz();
                  break;
                case "Maths": 
                  mathsuiz();
                  break;
                case "Chemistry":
                  chemuiz();
                  break;
                case "Biology":
                  biouiz();
                  break;
                case "English":
                  enguiz();
                  break;
                case "Physics":
                  phyuiz();
                  break;
                case "Python":
		  pythonuiz();
		  break;
		case "General-Knowledge":
		  generaluiz();
		  break;

              }
      });
    })
   
}
dropMenu();

function count(){
  let progressbar = document.querySelector(".progress");
  let countDown = document.querySelector(".timer");
  countDown.innerText = `0${mins}:${secs}`;
  let timer = setInterval(()=>{
    --secs;
    if(secs == 0){
      --mins;
      secs = 59;
    };
    let timeLeft = `0${mins}:${secs}`;
	  if(secs < 10)timeLeft = `0${mins}:0${secs}`;
    countDown.innerHTML = timeLeft;
    if(mins < 0){
      clearInterval(timer)
    
    let remark = document.querySelector(".remark");
      score = Math.round((numOfCorrectAnswers/20)*100)
    if(score <= 20){
      comment = "Poor performance!";
      remark.style.color = "red";
    }else if(score >20 && score <= 40){
      comment = "Fair performance!";
      remark.style.color = "yellow"
    }else if(score >40 && score <= 60){
      comment = "Good performance!";
     remark.style.color = "yellow"
    }else if(score > 60 && score <= 80){
      comment = "Very good performance!";
     remark.style.color = "yellow"
    }else {
      comment = "Excellence performance!";
     remark.style.color = "green"
    };
      scorePage();
      document.querySelector("#score-page").style.display = "block";
    }
  },interval);
   globalThis.progress = document.createElement("div");
  progress.style.height = "99%";
  progress.style.borderRadius = "10px";
  progress.style.width = "0%";
  progress.style.backgroundColor= "#03a9f4";
  progressbar.append(progress);
   globalThis.progressText = document.createElement("span");
  progressText.style.position = "absolute";
  let submit = document.querySelector(".btn1")
   globalThis.value = 5;

  submit.addEventListener("click",()=>{
    $.updateProgress(progress,value);
    progressText.textContent = `${value}%`;
    //if(value >=100) value = 95;
    value += 5;
    let  startul = document.querySelectorAll(`input[name="options"]`);
    let categories = document.querySelectorAll(".changeCategory");
    let Options = document.querySelectorAll('input[name="answer"]');
   if(!selectedCategory){
    startul.forEach((radbtn)=>{
      if(radbtn.checked) selectedCategory = radbtn.value;
    })
   }
   
   switch(selectedCategory){
                case "JavaScript":
                  jsquiz();
                  break;
                case "CSS":
                  cssquiz();
                  break;
                case "HTML":
                  htmlquiz();
                  break;
                case "Maths": 
                  mathsquiz();
                  break;
                case "Chemistry":
                  chemquiz();
                  break;
                case "Biology":
                  bioquiz();
                  break;
                case "English":
                  engquiz();
                  break;
                case "Physics":
                  phyquiz();
                  break;
		case "Python":
		   pythonquiz();
		   break;
		case "General-Knowledge":
		   generalquiz();
		   break;

              }
   submit.style.display = "none";
   
   Options.forEach((radbtn)=>{
     if(radbtn.checked){
     let selectedAnswer = radbtn.value;
      selections.push(radbtn.value);
       let correctAnswer = radbtn.dataset.answer;
       selectedAnswer === correctAnswer?++numOfCorrectAnswers:++numOfWrongAnswers;
       if(k === 19){
         let remark = document.querySelector(".remark");
         score = Math.round((numOfCorrectAnswers/20)*100)
  if(score <= 20){
      comment = "Poor performance!";
      remark.style.color = "red";
    }else if(score >20 && score <= 40){
      comment = "Fair performance!";
      remark.style.color = "yellow";
    }else if(score >40 && score <= 60){
      comment = "Good performance!";
      remark.style.color = "yellow";
    }else if(score > 60 && score <= 80){
      comment = "Very good performance!";
      remark.style.color = "yellow";
    }else {
      comment = "Excellence performance!";
      remark.style.color = "green";
    };
         scorePage();
         document.querySelector("#score-page").style.display = "block";
       }
       ++k;
     }
  })
  });
  
  progressbar.append(progressText);
}


function scorePage(){
  let correctlyAnswer = document.querySelector(".answered-correctly");
  let wronglyAnswer = document.querySelector(".answered-wrongly");
  let scored = document.querySelector(".score-board");
  let remark= document.querySelector(`.remark`);
  remark.innerHTML = comment;
  correctlyAnswer.innerHTML = numOfCorrectAnswers;
  wronglyAnswer.innerHTML = numOfWrongAnswers;
   scored.innerHTML = score+'%';
   
      for(let i of id){
       document.querySelectorAll(`input[name="${i}"]`).forEach(radbtn=>{
         if(radbtn.value === radbtn.dataset.answer){
           let p = radbtn.closest("p");
           try{
             p.style.color = "green";
           } catch(err){
             console.log(err);
           }
         }else if(radbtn.value === selections[i]){
           let p = radbtn.closest("p");
           try{
             p.style.color = "red";
           }catch(err){
             console.log(err);
           }
         }
       });
       
      };
      
  let checker =document.querySelector(".answer-page");
  let checkQuestion = document.querySelector(".questions-answers");
   checker.addEventListener("click",(evt)=>{
     if(getComputedStyle(checkQuestion).display == "none"){
       checkQuestion.style.display = "block";
       checker.innerHTML = "Close"
     }else {
       checkQuestion.style.display = "none";
       checker.innerHTML = "View Answers"
     };
   });
}

let [mathsquiz,jsquiz,chemquiz,bioquiz,cssquiz,htmlquiz,engquiz,phyquiz,pythonquiz,generalquiz] = [$.quiz(maths,0),$.quiz(javascript,0),$.quiz(chem,0),$.quiz(bio,0),$.quiz(css,0),$.quiz(html,0),$.quiz(eng,0),$.quiz(phy,0),$.quiz(python,0),$.quiz(general,0)];
