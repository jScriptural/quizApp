
export let subjects =
["HTML","CSS","JavaScript","Maths","Physics","Chemistry","English","Biology","Python","General-Knowledge"];
subjects.sort((a,b)=>a.localeCompare(b));

let javascript =  [
  {
    question: "Inside which HTML element do we put the Javascript code?",
    options:
    [`&#60;javaScript&#62;`,"Js","&#60;script&#62;","&#60;scripting&#62;"],
    answer: "&#60;script&#62",
  },
   {
    question: `What is the correct syntax for referring to an external script
    called "xxx.js" ?`,
    options: [`&#60;script src="xxx.js"&#62;&#60;/script&#62;`,
    `"script name="xxx.js"`,
    `&#60;script href="xxx.js"&#62;&#60;/script&#62;`,
	    `&#60;js src="xxx.js"&#62;&#60;/js&#62;`],
    answer: `&#60;script src="xxx.js"&#62;&#60;/script&#62;`,
  },
  {
    question: "How do you create a function in JavaScript?",
    options: ["func: myFunction(){}", 
	    `function = myFunction(){}`,
	    `function myFunction(){}`,
	    `myFunction(){}`],
    answer: `function myFunction(){}`,
  },
  {
    question: `How do you call a function named "myFunction" ?`,
    options: ["myFunction()","call Function myFunction", `callmyFunction()`,"myFunction"],
    answer: "myFunction()",
  },
  {
    question:`Among the given statements, which statement defines closures in
    JavaScript?`,
    options:[`A function that is enclosed with references to its inner function
    scope`,
    `A function that is enclosed with references to its lexical environment`,
    `A function that is enclosed with the object to its inner function scope`,
    `None of the above`],
    answer:`A function that is enclosed with references to its lexical environment`
  },
  {
    question: `What will be the output of the following javaScript code snippet?
     <div><img src="./Assets/Images/code_snippet1.jpg" width="100%"></div>`,
     options:["Error","Pikin_javascript_mcq",`undefined`,`NaN`],
     answer:"Pikin_javascript_mcq",
  },
  {
    question:`Which of the following is not javascript data types?`,
    options:["Null type","Undefined type","Number type","Integer type"],
    answer:"Integer type",
  },
  {
    question:`Which of the following object is the main entry point to all
    client-side JavaScript features and APIs?`,
    options:["position","window","standard","location"],
    answer:"window",
  },
  {
  question: `What will be the output of the following JavaScript code snippet?
  <div><img src="./Assets/Images/code_snippet2.jpg" width="100%"></div>`,
  options:["1,2,3,4","Empty Array","4,3,2,1","Error"],
  answer:"1,2,3,4",
  },
  {
    question:`Which of the following scoping type does JavaScript use?`,
    options:["sequential","Segmental","Lexical","Literal"],
    answer:'Lexical',
  },
  {
    question:`What will be the output of the following JavaScript code?<br><code> let js = [1,2,3,4];<br>
	  let quiz = [5,6,7,8];<br> let result = js.concat(quiz);<br> console.log(result);<code>`,
    options:["[1,2,3,4,5,6,7,8]",' Type error("concat is not a function")',
    "12345678","[5,6,7,8,1,2,3,4]",],
    answer:"[1,2,3,4,5,6,7,8]",
  },
  {
    question:`Which attribute is used to specify that the script is executed
    when the page has finished parsing? (only for external scripts)`,
    options:["async","defer","parse","later"],
    answer:"defer",
  },
  {
    question: `What will be the output of the following JavaScript code snippet?
   <div><img src="./Assets/Images/code_snippet4.jpg" width="100%"></div>`,
    options:["1","2","error","12"],
    answer:"1",
  },
  {
    question:`What will be written on the console?
    <div><img src="./Assets/Images/code_snippet5.jpg" width="100%"></div>`,
    options:["Reference error","Type error","1","2"],
    answer:"Reference error",
  },
  {
    question:`Which property helps to initiate the HTTP requests?`,
    options:[`request`,"location","send","write"],
    answer:"location",
  },
  {
    question:`Which of the following uses scripted HTTP`,
    options:["XML","HTML","Ajax","CSS"],
    answer:"Ajax",
  },
  {
    question:`Which Window object method is used to display a message in a
    dialog box?`,
    options:["alert()","prompt()","message()","console.log()"],
    answer:"alert()",
  },
  {
    question: `Which of the following is a global object?`,
    options:["Register","location","window","position"],
    answer: "window",
  },
  {
    question:`How to pick a document element with id attribute set to "demo"?`,
    options:[`document.getElementById("demo")`,
    `document.getId("demo")`,
    `document.getElementsById("demo")`,
    `document.querySelector(".demo")`],
    answer:`document.getElementById("demo")`
  },
  {
    question:`Which handler is triggered when the content of the document in the
    window is stable and ready for manipulation?`,
    options:["onload","onerror","oncreate","manipulate"],
    answer:"onload"
  },
  {
    question:`The <i>style</i> property belongs to which of the following object?`,
    options:["element","window","location",'navigation'],
    answer:"element"
  },
  {
    question:`Where are memory leaks found?`,
    options:[`Client side objects`,
    `Server side objects`,
    `Both client side and server side objects`,
    `Under side objects`],
    answer:`Client side objects`,
  },
  {
    question:`Where should JavaScript code appear inline within an HTML file?`,
    options:[`Between the "script" tag`,
    `Outside the "script" tag`,
    `Between or outside the "script" tag`,
    `Between the header tag`],
    answer:`Between the "script" tag`,
  },
  {
    question: `Which is the root element in a HTML document?`,
    options:["&#60;html&#62;","&#60;head&#62;","&#60;script&#62;","&#60;body&#62;"],
    answer:"&#60;html&#62;",
  },
  {
    question: `What is the code for getting the current time?`,
    options:[`now = new Date()`,`let now = new Date()`,`let now = Date()`,`let
    now = new Date(current)`],
    answer:"let now = new Date()",
  },
  {
    question: `What is the purpose of using the <i>async</i> attribute in the
    script tag?`,
    options:[`Load the script asynchronously`,
    `Load the script synchronously`,
    `Load the page asynchronously`,
    `Load the page synchronously`],
    answer:`Load the script asynchronously`,
  },
  {
    question: `Why do we need to use the <b>onload</b> in the script tag after
    using the <b>async</b> attribute?`,
    options:[`Invoke the code during page loading`,
    `Invoke code during script loading`,
    `Invoke code during downloading`,
    `Invoke code during reloading`],
    answer:`Invoke code during downloading`
  },
  {
    question:`Which of the following keywords is used to declare a variable in
    JavaScript `,
    options:["var","let","const","All of the above"],
    answer:"All of the above" 
  },
  {
    question: `What is the used of the &#60;noscript&#62; tag in javascript?`,
    options:["The contents are displayed by non-JavaScript-based browsers",
    "Clears all cookies and cache",
    `Both of the above`,
    "Non of the above"],
    answer:"The contents are displayed by non-JavaScript-based browsers",
  },
  {
    question:`Which of the following is not a javascript operator`,
    options:["new","delete","typeof","this"],
    answer:"this",
  },
	{
		question:`Which of the following array method is guaranteed to iterate through each element of an array,if there is no exception?`,
		options:["every","forEach","find","some"],
		answer:"forEach",
	},
	{
		question:`What will be the output of this code?<br>
		<div><img src="./Assets/Images/code_snippet6.jpg" width="100%"></div>`,
		options:["Undefined","2","3","NaN"],
		answer:"3",
	},
	{
		question:`What will be the output of this code?<br>
		<div><img src="./Assets/Images/code_snippet7.jpg" width="100%"></div>`,
		options:[`1,undefined,2`,
			`error,1,2`,
			`error`,
			`1,undefined,undefined`],
		answer:`1,undefined,2`,
	},
  
  ];
  console.log(`js=${javascript.length}`);
javascript.sort((a,b)=>Math.random() - 0.5);
    for(let item of javascript){
      if(!(item.options.includes("All of the above") ||
      item.options.includes("None of the above")))item.options.sort((a,b)=>Math.random()-0.5);
    };
export {javascript as default};
