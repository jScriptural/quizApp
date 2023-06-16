export let id = [];
export function $(){}
export function isEmpty(obj){
  return !Object.keys(obj).length;
}


 $.animateText = function(txt,display,duration=100){
	let array = Array.from(txt);
	let char = ""
    let timer = setInterval(()=>{
    char += array.shift();
    display.textContent = char;
   if(isEmpty(array)){
    // proceed.style.display = "block";
   	clearInterval(timer);
    let charset = Array.from(display.textContent);
    
    let timer2 = setInterval(()=>{
    	charset.pop();
    	let reversedAction = charset.join("");
      display.textContent = reversedAction;
        if(isEmpty(charset)){
      	$.animateText("...",display,duration);
      	clearInterval(timer2);
      }
    },duration+200)
   }
    
},duration)

}



$.rotateColor = function(element){
let box1 = document.createElement("div");
let box2= document.createElement("div");
let box3 = document.createElement("div");
let box4 = document.createElement("div");
let container = document.createElement("div");
let boxes = [box1,box2,box4,box3];
element.append(container);

container.style.display = "grid";
container.style.gridTemplateRows= "1fr 1fr";
container.style.gridTemplateColumns= "1fr 1fr";
container.style.gridGap="2px";
container.style.JustifyContent = "center";
container.style.alignItems = "center"
container.style.position= "absolute";
container.style.top= "30vh";
container.style.left= "45vw";
box4.style.gridRow = "2/3";
box4.style.gridColumn = "2/3";
for(let box of boxes){
  container.append(box)
}
for(let box of boxes){
  box.style.border = "1px solid white";
  box.style.height = "5vmin"
  box.style.width = "5vmin";
}
	let i = 0;
	let colors = ["#c80000","#7db607","#f6b408","#04a1e8"]
	return ()=>{
		boxes[i].style.backgroundColor = colors[i];
		++i;
		setTimeout(()=>{
			boxes[i-1].style.backgroundColor =null;
		},200)
		if(i > 3){
			setTimeout(()=>{
				i=0;
			},200)
		}
	}
}


$.slideIn = function(element,endWidth,duration=15){
  let i = 0;
  let width;
  let timer = setInterval(()=>{
    ++i;
  width = `${i}vw`;
    element.style.transform = `translateX(-${width})`;
    element.style.width = width;
    if(width == endWidth){
      clearInterval(timer);
    }
  },duration)
}

$.slideOut = function(element,duration){
  let  i = parseFloat(element.style.width);
  let width;
  let timer = setInterval(()=>{
   --i;
   width = `${i}vw`;
   element.style.width = width;
   element.style.transform = `translateX(-${width})`;
   if(i == 0){
     element.style.display = "none";
     clearInterval(timer);
   }
   
  },duration);
  
}

$.updateProgress = function(progElement,value){
  progElement.style.width = value+"%";
}


$.unRoll = function(txt,display,duration=100){
	let array = Array.from(txt);
	let char = "";
    let timer = setInterval(()=>{
    char += array.shift();
    display.textContent = char;
   if(isEmpty(array)){
   	clearInterval(timer);
   };
    
},duration);

}


$.quiz = function(selectedCategory,i){
  let question = document.querySelector(".question");
  let optionA = document.querySelector(".optionA");
  let optionB = document.querySelector(".optionB");
  let optionC = document.querySelector(".optionC");
  let optionD = document.querySelector("  .optionD");
  let options = [optionA,optionB,optionC,optionD];
  return function(){
    if(i == 20)return;
  question.innerHTML= `<p>${selectedCategory[i].question}</p>`;
      for(let j = 0; j < options.length; ++j){
        options[j].innerHTML = `<p><input type="radio"
        value="${selectedCategory[i].options[j]}"
        name="answer" data-answer="${selectedCategory[i].answer}">&nbsp;&nbsp;${selectedCategory[i].options[j]}</p>`;
      }
      
      function write(){
        let container = document.querySelector(".questions-answers");
        let question = document.createElement("div");
        let optionA = document.createElement("div");
        let optionB = document.createElement("div");
        let optionC = document.createElement("div");
        let optionD = document.createElement("div");
  question.innerHTML= `<p>${selectedCategory[i].question}</p>`;
  question.style.marginTop = "4vmin";
let option = [optionA,optionB,optionC,optionD];

   for(let j = 0; j < option.length; ++j){
        option[j].innerHTML = `<p class="_${i}"><input type="radio"
        value="${selectedCategory[i].options[j]}"
        name="${i}" data-answer="${selectedCategory[i].answer}" disabled>&nbsp;&nbsp;${selectedCategory[i].options[j]}</p>`;
        container.append(question,optionA,optionB,optionC,optionD);
      }
    id.push(i);
  
  }
  write();
       ++i;
/*      document.querySelectorAll('input[name="answer"]').forEach(radbtn=>{
         radbtn.addEventListener("click",evt=>{
           document.querySelector(".btn1").style.display = "block";
         })
       })
       */
	  document.querySelector(".option").addEventListener("click", evt => {
			document.querySelector(".btn1").style.display = "block";
			let target = evt.target;
			if(target.tagName !== "INPUT") {
				let inputElem = target.querySelector("input");
				inputElem.checked = true;
			} else {
				target.checked = true;

			}
			evt.stopPropagation();
		}, true)
  }
}
