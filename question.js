"use strict"
export let subjects =
["HTML","CSS","JavaScript","Maths","Physics"];
subjects.sort((a,b)=>a.localeCompare(b));

export let javascript = [
  {
    question: "Inside which HTML element do we put the Javascript code?",
    options: ["<javaScript>","Js","<script>","<scripting>"],
    answer: "<script>",
  },
   {
    question: `What is the correct syntax for referring to an external script
    called "xxx.js" ?`,
    options: [`<script src="xxx.js">`,`script name="xxx.js"`,`<script
    href="xxx.js">`,`<js  src="xxx.js>`],
    answer: `<script src="xxx.js">`,
  },
  {
    question: "How do you create a function in JavaScript?",
    options: ["func: myFunction()", `function = myFunction()`, `function
    myFunction()`,`myFunction()`],
    answer: `function myFunction()`,
  },
  {
    question: "How do you call a function named \"myFunction\" ?",
    options: ["myFunction()","call Function myFunction", `callmyFunction()`,"myFunction"],
    answer: `myFunction()`,
  },
  
  ];
  javascript.sort(()=>Math.random()-0.5);
export let html = [];
  
  export let css  = [];
  
  export let maths = [
    {
      question:`How many terms has an Arithmetic Progression whose sum is 1340
      with first term 3 and nth term 131?`,
      options:["15","20","25","35"],
      answer: "20",
    },
    {
      question: `find the remainder when: 
      f(x) = x^3 -2x^2 + x - 7 is divided by (x-3)`,
      options: ["3","4","5","6"],
      answer: "4",
    },
    {
      question: `Find the number of ways of arranging 4 ladies and 4 gentleman
      so that no two ladies may sit together.`,
      options: ["5!4!","4!4!","4!3!","5!3!"],
      answer: "5!4!",
    },
    {
      question: `Find the area of the curve y = sinx from 0 to pi`,
      options:["1","2","-1","0.5"],
      answer: "-1",
    },
    {
      question: `How many sides has a polygon whose interior angle is 108
      degrees`,
      options: ["13","11","5","9"],
      answer: "5",
    },
    {
      question: `When two dice are thrown, find the probability of the total
      score being a prime number.`,
      options: [ "11/12","7/12","1/12","5/12"],
      answer: "5/12",
    },
    {
      question: `A bag contains 2 black balls, 3 green balls and 4 red balls,
      find the probability of picking either black or red.`,
      options: ["2/3","1/3","2/9","4/9"],
      answer: "4/9",
    },
    {
      question: `solve for x if 4^(x-1) = 2*8^(x-2).`,
      options: ["1","2","3","4"],
      answer: "1",
    },
    {
      question: `A man lost 25% by selling a transistor radio for $450. Find the
      cost price of the radio.`,
      options: ["$112","$337.5","$600","$525.5"],
      answer:"$600",
    },
    {
      question: `convert 101101(base 2) to base 10`,
      options: ["15","4","45","32","90"],
      answer: "45",
    },
    {
      question: `Calculate the area of the finite region bounded by (4x-x^2) and
      the x-axis.`,
      options: ["32 sq. units", "16 sq. units","32/3 sq. units","8 sq. units"],
      answer: "32/3 sq. units" 
    },
    
    ];
  