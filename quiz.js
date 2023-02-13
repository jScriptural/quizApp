
import {$,id} from "./quizModule.js";
import {javascript,html,css,subjects,maths,chem,bio,eng,phy} from "./question.js";
 let duration = 100;
 let selectedCategory;
 let score = 0;
 let correctly = 0;
 let wrongly = 0;
 let comment;
 let tictac = [9,59];
 let k= 0;
 let [mins,secs] = tictac;

 

  
  
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
    let interval = setInterval($.rotateColor(preloader),400);
    $.animateText(text,display);
    globalThis.addEventListener("load",(evt)=>{
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
  //  let mathsquiz = $.quiz(maths,0);
   //let jsquiz = $.quiz(javascript,0);
    
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
              document.querySelector("header div").innerHTML =
              `<h1>${checked} MCQ</h1>`
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
  
   document.body.addEventListener('click',(evt)=>{
     $.slideOut(menuCon,1);
     bars.style.display = "block";
     cancel.style.display = "none";
   })
   /*
  cancel.addEventListener("click",(evt)=>{
      $.slideOut(menuCon,1)
      bars.style.display = "block";
       cancel.style.display = "none";
   });
   */
let categories = document.querySelectorAll(".changeCategory");
   // console.log(categories);
  // progressbar.append(prog)
  
  
    categories.forEach((list)=>{
      list.addEventListener("click",(evt)=>{
           setTimeout(()=>{
             list.style.backgroundColor = "red";
             setTimeout(()=>{
               list.style.backgroundColor ="rgba(105,136,160,50%)"
             },100)
           },0);
      document.querySelector(".questions-answers").innerHTML = "";
let [mathsuiz, jsuiz, chemuiz,htmluiz,cssuiz,biouiz,enguiz,phyuiz] =
[$.quiz(maths,0),$.quiz(javascript,0),$.quiz(chem,0),$.quiz(html,0),$.quiz(css,0),$.quiz(bio,0),$.quiz(eng,0),$.quiz(phy,0)];

 [mathsquiz,jsquiz,chemquiz,htmlquiz,cssquiz,bioquiz,engquiz,phyquiz] =
 [$.quiz(maths,1),$.quiz(javascript,1),$.quiz(chem,1),$.quiz(html,1),
 $.quiz(css,1),$.quiz(bio,1),$.quiz(eng,1),$.quiz(phy,1)];
         let clicked = list.innerText;
          selectedCategory = clicked;
       document.querySelector("header div").innerHTML = `<h1>${selectedCategory}
      MCQ</h1>`;
          [mins, secs] = tictac;
          k=0;
        correctly =0;
        wrongly =0;
         value = 4;
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
              }
      });
    })
   
}
dropMenu()

function count(){
  let progressbar = document.querySelector(".progress");
  let countDown = document.querySelector(".timer");
  countDown.innerText = `${mins}:${secs}`;
  let timer = setInterval(()=>{
    --secs;
    if(secs == 0){
      --mins;
      secs = 59;
    };
    let timeLeft = `${mins}:${secs}`;
    countDown.innerHTML = timeLeft;
    if(mins < 0){
      clearInterval(timer)
    
    let remark = document.querySelector(".remark");
      score = Math.round((correctly/25)*100)
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
  },duration);
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

  submit.addEventListener("click",()=>{
    $.updateProgress(progress,value);
    progressText.textContent = `${value}%`;
    if(value >=100) value = 96;
    value += 4;
    let  startul = document.querySelectorAll(`input[name="options"]`);
    let categories = document.querySelectorAll(".changeCategory");
    let Options = document.querySelectorAll('input[name="answer"]');
   if(!selectedCategory){
    startul.forEach((radbtn)=>{
      if(radbtn.checked){
        selectedCategory = radbtn.value;
      };
     
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
              }
   submit.style.display = "none";
   
   Options.forEach((radbtn)=>{
     if(radbtn.checked){
     let selectedAnswer = radbtn.value;
       let correctAnswer = radbtn.dataset.answer;
       console.log(selectedAnswer === correctAnswer)
       selectedAnswer === correctAnswer?++correctly:++wrongly;
       console.log(`sl=${selectedAnswer}: ca=${correctAnswer}`)
       if(k === 24){
         let remark = document.querySelector(".remark");
         score = Math.round((correctly/25)*100)
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
  correctlyAnswer.innerHTML = correctly;
  wronglyAnswer.innerHTML = wrongly;
   scored.innerHTML = score+'%';
   
     // let correct = [];
      for(let value of id){
       document.querySelectorAll(`input[name="${value}"]`).forEach(radbtn=>{
        if(radbtn.value === radbtn.dataset.answer){
           radbtn.checked = "true";
           radbtn.style.backgroundColor='red'
        }
        radbtn.disabled = "true";
        });
      //  document.querySelectorAll(`input[name="${value}"]`).
      }
      /*
      console.log(correct)
     correct.forEach(radbtn=>{
       radbtn.checked = "true";
     }) ;
   */
  let checker =document.querySelector(".answer-page");
  let checkQuestion = document.querySelector(".questions-answers");
   checker.addEventListener("click",(evt)=>{
     if(checkQuestion.style.display === "none"){
       checkQuestion.style.display ="block";
     }else {
       checkQuestion.style.display = "none";
     };
   })
}

let mathsquiz = $.quiz(maths,0);
let jsquiz = $.quiz(javascript,0);
let chemquiz = $.quiz(chem,0);
let bioquiz = $.quiz(bio,0);
let cssquiz = $.quiz(css,0);
let htmlquiz = $.quiz(html,0);
let engquiz = $.quiz(eng,0);
let phyquiz = $.quiz(phy,0);
/*
  let checker =document.querySelector(".answer-page");
   checker.addEventListener("click",(evt)=>{
    let checkQuestion = document.querySelector(".questions-answers");
    if(checkQuestion.style.display === "none"){
    checkQuestion.style.display = "block";
    }else{
      checkQuestion.style.display = "none"
    };
    let text = checker.innerHTML;
    console.log(text)
    if(text === `Check Your Answers`){
      checker.innerHTML = `Remove`;
    }else {
      checker.innerHTML = `Check Your Answers`
    }
   });
   */