"use strict"
export let subjects =
["HTML","CSS","JavaScript","Maths","Physics","Chemistry","English","Biology"];
subjects.sort((a,b)=>a.localeCompare(b));

export let javascript = [
  {
    question: "Inside which HTML element do we put the Javascript code?",
    options: [`"<javaScript>"`,"Js","<script>","<scripting>"],
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
export let html = [
  {
    question: `For canvas graphics, which of the following HTML element is
    used?`,
    options:["&#60;css&#62;","&#60;paint&#62;","&#60;canvas&#62;","&#60;graphic&#62;"],
    answer: "&#60;canvas&#62;"
  },
  {
    question:`Which of the following is an HTML specification for extending HTML
    tags with additional information?`,
    options:["Modifydata","Minidata","Macrodata","Microdata"],
    answer: 'Microdata',
  },
  {
    question:`Which of the following tags do not require a terminator?`,
    options:["&#60;u&#62;","&#60;br&#62;","&#60;b&#62;","None of the above"],
    answer: "&#60;br&#62;",
  },
  {
    question:`To get the ordered list we used `,
    options:["&#60;ul&#62;","&#60;ol&#62;","&#60;ml&#62;","&#60;h1&#62;"],
    answer: "&#60;ol&#62;"
  },
  {
    question:`There are ___ levels of hrading in HTML `,
    options:["two","three","five","six"],
    answer:"six",
  },
  {
    question:`Which of the following tags is used to insert graphics in a web
    page?`,
    options:["&#60;images&#62;","&#60;img&#62;","&#60;graphics&#62;","&#60;image&#62;"],
    answer: "&#60;img&#62;",
  },
  {
    question:`The following HTML tag is used to display the content as a moving
    text `,
    options:["&#60;marquee&#62;","&#60;/img&#62;","&#60;a href&#62;",`None of
    the above`],
    answer: "&#60;marquee&#62;",
  }
  ];
  html.sort(()=>Math.random()-0.5);
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
      f(x) = x<sup>3</sup> -2x<sup>2</sup> + x - 7 is divided by (x-3)`,
      options: ["3","4","5","6"],
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
      answer: "2/3",
    },
    {
      question: `solve for x if 4<sup>(x-1)</sup> = 2 x 8<sup>(x-2)</sup>.`,
      options: ["1","2","3","4"],
      answer: "3",
    },
    {
      question: `A man lost 25% by selling a transistor radio for $450. Find the
      cost price of the radio.`,
      options: ["$112","$337.5","$600","$525.5"],
      answer:"$600",
    },
    {
      question: `convert 101101<sub>2</sub> to base 10`,
      options: ["15","4","45","32","90"],
      answer: "45",
    },
    {
      question: `Calculate the area of the finite region bounded by
      y = 4x-x<sup>2</sup> and
      the x-axis.`,
      options: ["32 sq. units", "16 sq. units","32/3 sq. units","8 sq. units"],
      answer: "32/3 sq. units" 
    },
    {
      question: `If p:q = 4:3 and q:r = 5:7, find p:q:r.`,
      options: ["21:3:7","5:2:7","4:30:5","20:15:21"],
      answer: "20:15:21",
    },
    {
      question:`Solve for x in log<sub>x</sub>64 = 2`,
      options: ["5","1","8","7"],
      answer: "8",
      
    },
    {
      question: `A chord of a circle is 12cm long. The radius of the circle is
      10cm. Calculate the distance of the mid-point of the chord from the center
      of the circle.`,
      options:["5cm","8cm","12cm", "64cm"],
      answer: "8cm",
    },
    {
      question: `The perimeter of a rectangular football pitch is 300m. Its
      length is one and half times its breadth. What is the dimension of the football pitch?`,
      options: ["70x80","90x60","20x120","95x55"],
      answer: "90x60",
      
    },
    {
      question: `The mean of three numbers is 9. The mode is 11. The lowest of
      the three numbers is`,
      options: ["3","5","8","9",],
      answer: "5",
    },
    {
      question: `Solve 2x - 3 < 5`,
      options:["x<1","x>1","x>4","x<4"],
      answer: "x<4",
    },
    {
      question: `If x + 2y = 0 and 4x -3y = 11, find the value of x+y.`,
      options: ["-3","-1","1","3"],
      answer: "1",
    },
    {
      question: `A Geometric Progression has 6 terms. If the 3rd and 4th terms
      are 28 and -56 respectively, find the first term.`,
      options: ["5","6","7","8"],
      answer: "7",
      
    },
    {
      question: `If sinx = 3/4, find the value of 4cos<sup>2</sup>x + 1/4`,
      options: ["4","3","2","1"],
      answer: "2",
    },
    {
      question: `Find the greatest common divisor of 12378 and 3054`,
      options:["7","6","3","2"],
      answer:"6",
    },
    {
      question:`Solve x<sup>2</sup> + 7x + 10 ≡ 0(modulo 11).`,
      options: ["(3,5)","(7,4)","(9,6)","(1,9)"],
      answer: "(9,6)" 
      
    },
    {
      question: ` What is the distance of the point (3,4) from the origin?`,
      options:["5 unit","4 unit","2 unit","1 unit"],
      answer: "5 unit",
    },
    {
      question: `The equation of a circle is x<sup>2</sup> + y<sup>2</sup> + 8x
      - 6y = -21. Find the length of its radius.`,
      options:["4","6","2","21"],
      answer:"2",
    },
    {
      question: `How many sides has a polygon whose interior angle is 108
      degrees`,
      options: ["13","11","5","9"],
      answer: "5",
    },
    {
      question: `Find the number of ways of arranging 4 ladies and 4 gentleman so
     that no two ladies may sit together.`,
      options: ["5!4!","4!4!","4!3!","5!3!"],
      answer: "4!4!",
    },
    {
      question: `Find the area of the curve y = sinx from 0 to π`,
      options:["1","2","-1","0.5"],
      answer: "2",
    },
    {
      question: `A sector of a circle is bounded by two radii 6cm long and an
      arc of length 5cm. Calculate the area of the sector.`,
      options:["15cm<sup>2</sup>","20cm<sup>2</sup>","45cm<sup>2</sup>","16cm<sup>2</sup>"],
      answer: "15cm<sup>2</sup>",
    },
    {
      question: `Find the differential coefficient, with respect to x, of the
      function 5x<sup>2</sup> - 3x + 2.`,
      options:["10x - 1","10x - 4","5x - 3","10x - 3"],
      answer: "10x - 3",
    },
    {
      question: `Find the maximum value of the function
      2x<sup>3</sup>-3x<sup>2</sup>-12x+8.`,
      options: ["45","15","35","20"],
      answer: "15",
    },
    {
      question: `Find all x which satisfies the inequality 6/x > 3.`,
      options:["0&#60;x&#62;2","0&#60;x&#62;1","0&#60;x&#62;5","1&#60;x&#62;6"],
      answer: "0&#60;x&#62;2",
    },
    {
      question: `Find the remainder when 2x<sup>3</sup> - 9x<sup>2</sup> + 16x - 18 is
      divided by 2x - 3.`,
      options: ["-3","-2","2","1"],
      answer: "-3",
    },
    {
      question: `x is directly proportional to the square of y. How much in
      percentage is the increment in x if  y  increases by 20%?`,
      options:["44%","41%","43%","20%"],
      answer: "44%",
    },
    {
      question:`Find the value of <i>k</i> such that x<sup>2</sup> + 5x +
      <i>k</i> is a perfect square. `,
      options:["5/2","17/4","25/4","25"],
      answer: "25/4",
    },
    {
      question:`A rectangle is 12 cm long and 8 cm broad. The length and  breadth
      of the rectangle are both increased by the same amount, d cm. If the area
      of the rectangle is now 221 cm<sup>2</sup>, find the value of d.`,
      options: ["3","5","1","10"],
      answer: "5",
    },
    {
      question: `Solve the equations 2x - 3y +2 = x + 2y - 5 = 3x + y.`,
      options: ["x=-2,y=1","x=3,y=-1","x=2,y=1","x=0,y=1"],
      answer: "x=-2,y=1",
    },
    {
      question: `Resolve into partial fraction (x+1)/(x<sup>2</sup> - 3x +
      2);.`,
      options: [`3/(x-2) - 2/(x-1)`,`3/(x+1) - 2/(x-1)`,`4/(x-2) -
      2/(x+1)`, `2/(x-2) - 3/(x-1)`],
      answer: `3/(x-2) - 2/(x-1)`
    },
    {
      question:`Find the square root of (6 + &radic;32).`,
      options:[`2 + &radic;3`,`1 + &radic;2`,`2 + &radic;2`, `3 + &radic;3`],
      answer: `2 + &radic;2`,
    },
    {
      question: `In a survey of 290 people who read newspapers, 181 of them read
      the Daily Times, 142 read the Guardian, 117 read the Punch and each read
      at least one of the three papers. If 75 read the Daily Times and the
      Guardian, 60 read Daily Times and the Punch, 54 read the Guardian and the
      Punch. How many read all three papers?`,
      options:["39","40","29","41"],
      answer: "39",
    },
    {
      question: `If an executive council consists of 7 Commissioners, 3
      Directors-general and the Governor. In how many ways can a committee be
      formed with the Governor, 3 Commissioners and 2 Directors-general?`,
      options:["100 ways","105 ways", "20 ways", "101 ways"],
      answer: "105 ways",
    },
    {
      question: `What is the coefficient of x<sup>2</sup>y<sup>2</sup> in the
      expansion of (2x +3y)<sup>4</sup> ?`,
      options:["96","16","216","201"],
      answer: "216",
    },
    {
      question: `Find the magnitude of the complex number (3 + 4i).
      where i = &radic;-1`,
      options: ["1","3","4","5"],
      answer: "5",
    },
    {
      question: `Compute (1 + i)<sup>8</sup>; `,
      options:["11","13","22","16"],
      answer: "16",
    },
    {
      question: `Find the equation of a line passing through the point (-3,2)
      and parallel to the line 3x + 6y + 7 = 0.`,
      options:["2y = 7 - x", "3y = x - 7","23x = y - 4", "2x = 7 - y"],
      answer: "2y = 7 - x",
    },
    {
      question: `Find the rate of change of the volume V of a sphere with
      respect to its radius r when r =1.`,
      options:["4π","8π","12π","24π"],
      answer: "4π",
    },
    {
      question: `Find the value of <i>p</i> if the line 2y - <i>p</i>x + 4 = 0
      is perpendicular to the line y + &frac14;x - 7 = 0`,
      options:["-8","-4","4","8"],
      answer: "8",
    },
    {
      question: `The locus of a point P which is equidistant from two given
      points S and T is `,
      options:[`A perpendicular to ST`,`A line parallel to ST`,`The angle
      bisector of PS and ST`,`The perpendicular bisector of ST`],
      answer: `The perpendicular bisector of ST`,
    },
    {
      question: `A hunter 1.6m tall, views a bird on top of a tree at an angle
      of 45 degrees. If the distance between the hunter and the tree is 10.4m.
      Find the height of the tree.`,
      options: ["8.8m","9.0m","10.4m","12.0m"],
      answer: "10.4m",
    },
    {
      question: `Evaluate &#8747; sin3xdx`,
      options:[`-&frac23;cos3x + c`,`-&frac13;cos3x + c`,`&frac13;cos3x +
      c`,`&frac23;cos3x + c`],
      answer: `-&frac13;cos3x + c`,
    },
    {
      question:`Find the derivative of y = sin<sup>2</sup>(5x) with respect to
      x.`,
      options:["2sin5xcos5x","5sin5xcos5x","10sin5xcos5x","15sin5xcos5x"],
      answer:"10sin5xcos5x" 
    },
    {
      question:`Three teachers shared a packet of chalk. The first teacher got 2/5 of
      the chalk and the second teacher got 2/15 of the remainder. What fraction
      did the third teacher receive?`,
      options:["11/25","12/25","13/25","8/25"],
      answer: "13/25",
    },
    {
      question:`Factorise completely ac - 2bc - a<sup>2</sup> + 4b<sup>2</sup>
      `,
      options:["(a-2b)(c+a-2b)","(a-2b)(c-a-2b)","(a-2b)(c+a+2b)","(a-2b)(c-a+2b)"],
      answer:"(a-2b)(c+a-2b)",
    },
    {
      question:`An arc of a circle of length 22cm subtends an angle of 3x
      degrees at the centre of the circle. Find the value of x if the diameter
      of the circle is 14cm.
      (π = 22/7 )`,
      options:["30","60","120","180"],
      answer:"60",
    },
    ];
maths.sort(()=>Math.random()-0.5);

  console.log(maths.length)
export  let chem  = [
  {
    question: `Mendelev periodic table was arranged in order of their __`,
    options:["Atomic numbers","Molecular shapes", "Atomic mass", `Orbital
    structire`],
    answer: "Atomic mass",
  },
  {
    question: `Which of the following decreases across the period of the
    periodic table?`,
    options: ["Atomic size","Electron affinity", `Electronegativity`, `Inert
    tendencies`],
    answer: "Electron affinity",
  },
  {
    question: `Which of the following compounf is insoluble in water?`,
    options:
    [`MgO`,`P<sub>4</sub>O<sub>10</sub>`,`K<sub>2</sub>O`,`N<sub>2</sub>O<sub>3</sub>`],
    answer: `MgO`,
  },
  {
    question: `From the balanced equation, what is the value of X
    Pb(NO<sub>3</sub>)<sub>2</sub>(aq) + XNaCl(aq) ➞  PbCl<sub>2</sub>(s) +
    2NaNO<sub>3</sub>(aq) ?`,
    options: ["1","2","3","4"],
    answer: "2",
  },
  {
    question:`What mass of anhydrous sodium trioxocarbonate IV,
    Na<sub>2</sub>CO<sub>3</sub>,present in 500 cm<sup>3</sup> of 0.1 mol
    dm<sup>-3</sup> ? 
    (Na = 23, C = 12, O = 16)
    `,
    options:["10.6 g","212 g", "5.3 g", "106 g"],
    answer: "5.3 g",
  },
  {
    question: `Flow of current in electrolytes is due to the movement of `,
    options:["electrons","holes","ions","charges"],
    answer: "ions",
  },
  {
    question: ` What quantity of electricity is consumed when 10 Amperes was
    consumed in 1 hour during electrolysis?`,
    options: ["36 KC", "3600 C","7200 C", "72 KC"],
    answer: "36 KC",
  },
  {
    question: `Electrode potential value of pure hydrogen at all temperatures is
    `,
    options: ["1","2","0","0.5"],
    answer: "0",
  },
  {
    question: `The minimum or critical amount of energy required before a
    chemical could occur is called `,
    options:["Reaction energy", "Effective collision", `Activation
    energy`,`activated complex`],
    answer: `Activation energy`,
  },
  {
    question:`Which is the most abundant noble gas in nature?`,
    options:["Neon","Radon","Helium","Argon"],
    answer: "Argon",
  },
  {
    question:`What chemical process is represented by the following equation? 
     4Fe(s) + 3O<sub>2</sub>(g) +2xH<sub>2</sub>(l)
     ➞2Fe<sub>2</sub>O<sub>3</sub>.xH<sub>2</sub>O(s)`,
     options:["Combustion","Oxidation",'Hydration',"Rusting"],
     answer: "Rusting",
  },
  {
    question:`Basic nuclear radiation was discovered by `,
    options:["Becquerel","Marie Curie","Geiger Muller","Marsden"],
    answer: "Becquerel",
  },
  {
    question: `Which isotope of Hydrogen is commonly referred to as heavy
    hydrogen?`,
    options:["Protium","Deuterium","Tritium","Basic water"],
    answer: "Deuterium",
  },
  {
    question: `Which of the following is an alkaline gas?`,
    options:[`NO<sub>2</sub>`,`NH<sub>3</sub>`,`N<sub>2</sub>O`,
    `N<sub>2</sub>O<sub>4</sub>`],
    answer: `NH<sub>3</sub>`,
  },
  {
    question:`The partial pressure of oxygen in a sample of air is 452mm Hg and
    the total pressure is 780mm Hg. What is the mole fraction of oxygen?`,
    options: [`0.203`,"0.579","2.030","5.790"],
    answer: '' 
  },
  ];
  chem.sort(()=>Math.random() - 0.5);
  console.log(chem.length)
  export let bio = [];
  export let eng = [];
  //console.log(html[0].options[2] === html[0].answer)