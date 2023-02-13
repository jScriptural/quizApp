"use strict"
export let subjects =
["HTML","CSS","JavaScript","Maths","Physics","Chemistry","English","Biology"];
subjects.sort((a,b)=>a.localeCompare(b));

export let javascript = [
  {
    question: "Inside which HTML element do we put the Javascript code?",
    options:
    [`&#60;javaScript&#62;`,"Js","&#60;script&#62;","&#60;scripting&#62;"],
    answer: "&#60;script&#62",
  },
   {
    question: `What is the correct syntax for referring to an external script
    called "xxx.js" ?`,
    options: [`&#60;script src="xxx.js"&#62;`,`script name="xxx.js"`,`&#60;script
    href="xxx.js"&#62;`,`&#60;js src="xxx.js"&#62;`],
    answer: `&#60;script src="xxx.js"&#62;`,
  },
  {
    question: "How do you create a function in JavaScript?",
    options: ["func: myFunction(){}", `function = myFunction(){}`, `function
    myFunction(){}`,`myFunction(){}`],
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
     <div><img src="code_snippet1.jpg" width="100%"></div>`,
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
    options:["Position","Window","Standard","Location"],
    answer:"Window",
  },
  {
  question: `What will be the output of the following JavaScript code snippet?
  <div><img src="code_snippet2.jpg" width="100%"></div>`,
  options:["1,2,3,4","Empty Array","4,3,2,1","Error"],
  answer:"1,2,3,4",
  },
  {
    question:`Which of the following scoping type does JavaScript use?`,
    options:["sequential","Segmental","Lexical","Literal"],
    answer:'Lexical',
  },
  {
    question:`What will be the output of the following JavaScript code?
    <div><img src="code_snippet3.jpg" width="100%"></div>`,
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
    <div><img src="code_snippet4.jpg" width="100%"></div>`,
    options:["1","2","error","12"],
    answer:"1",
  },
  {
    question:`What will be written on the console?
    <div><img src="code_snippet5.jpg" width="100%"></div>`,
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
    question:`The <b>style</b> property belongs to which of the following object?`,
    options:["Element","Window","Location",'Navigation'],
    answer:"Element"
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
    question:`When does JavaScript code appear inline within an HTML file?`,
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
    question: `What is the purpose of using the <b>async</b> attribute in the
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
  }
  
  ];
  javascript.sort(()=>Math.random()-0.5);
  console.log(`js=${javascript.length}`)
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
    question:`There are ___ levels of heading in HTML `,
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
  },
  {
    question: `What is the purpose of the HTML tag &#60;hr&#62; ?`,
    options: ["To make text appear bold",`To make a vertical division between
    portions`,`To make a line break`,`To make horizontal rule between sections`
    ],
    answer:`To make horizontal rule between sections`,
  },
  {
    question:`In HTML, which tag is used to create a blank line?`,
    options:["&#60;b&#62;","&#60;br&#62;","&#60;a&#62;","&#60;em&#62;"],
    answer: "&#60;br&#62;",
  },
  {
    question:`When saving an HTML file, which of the following extensions is
    used?`,
    options:[".hl",".html",".h",".htl"],
    answer: ".html",
  },
  {
    question: `What is the purpose of HTML5 &#60;address&#62; element?`,
    options:[`contains IP address`,`Contains home address`,`Provides
    url`,`Contains author contact information`],
    answer: `Contains author contact information`,
  },
  {
    question: `HTML is a subset of `,
    options:["SGMT","SGML","SGME","XHTML"],
    answer: "SGML",
  },
  {
    question: `What is the full meaning of HTML?`,
    options:[`HyperText Markup Language`,`HyperText Machine Language`,`HyperText
    Marking Land`,`HighText Mark Logic`],
    answer: `HyperText Markup Language`,
  },
  {
    question: `Which of the following is used to read and renders an HTML
    page?`,
    options:["Web server","Web browser","Web network","Web matrix"],
    answer: "Web browser",
  },
  {
    question:`Which of the following tag is used for  inserting  the largest
    heading in HTML`,
    options:[`head`,"&#60;h1&#62;","&#60;h6&#62;","&#60;big&#62;"],
    answer: "&#60;h1&#62;",
  },
  {
    question: `In which part of HTML is metadata contained?`,
    options:["head tag","heading tag","title tag","body tag"],
    answer: "head tag",
  },
  {
    question:`Which of the following will make an image clickable?`,
    options:[`&#60;a href="pikinlogo.jog" &#62;pikin logo &#60;/a&#62;`,`&#60;img
    src="pikinlogo.jpg" &#62; &#60;a href="pikin quiz" &#62;pikin logo
    &#60;/a&#62; &#60;/img&#62;`,`&#60;a href="pikin quiz" &#62;&#60;img
    src="pikinlogo.jpg" &#60;/img&#62;&#60;/a&#62;`,`&#60;a href="pikin quiz"
    &#62;pikin logo &#60;/a&#62; &#60;img src="pikinlogo.jpg"&#62;`],
    answer:`&#60;a href="pikin quiz" &#62;&#60;img
    src="pikinlogo.jpg" &#60;/img&#62;&#60;/a&#62;`,
  },
  {
    question: `In HTML, which attribute is used to create a link that opens in a
    new Window tab?`,
    options:[`alt="_blank"`,`src="_black"`,`target="_self"`,`target="_blank"`],
    answer: `target="_black"`,
  },
  {
    question: `Which tag is used to create a  dropdown in HTML form?`,
    options:["&#60;input&#62;","&#60;select&#62;","&#60;textarea&#62;","&#60;text&#62;"],
    answer:"&#60;select&#62;",
  },
  {
    question:`How to create a checkbox in HTML form?`,
    options:[`&#60;input type="text" &#62;`,`&#60;input type="button"
    &#62;`,`&#60;input type="checkbox" &#62;`,`&#60;input type="radio" &#62;`],
    answer:`&#60;input type="checkbox" &#62;`,
  },
  {
    question:`Which HTML tag is used to convert a plain text into italic
    format?`,
    options:["&#60;b&#62;","&#60;p&#62;","&#60;i&#62;","&#60;tt&#62;"],
    answer: "&#60;i&#62;",
  },
  {
    question:`Which attributes specifies a unique alphanumeric identifier to be
    associated with an element?`,
    options:["type","article","id","class"],
    answer: "id",
  },
  {
    question:`Which of the following defines a part of a text that might be
    formatted in a different direction from other text?`,
    options:["&#60;details&#62;","&#60;aside&#62;","&#60;bdi&#62;","&#60;article&#62;"],
    answer: "&#60;bdi&#62;",
  },
  {
    question:`Which of the following defines a caption for a figure element?`,
    options:["&#60;figcaption&#62;","&#60;figure&#62;","&#60;dialog&#62;","&#60;caption&#62;"],
    answer: "&#60;figcaption&#62;",
  },
  {
    question:`Which element is used to define a discrete unit of content such as
    blogpost, comment and so on ?`,
    options:["section","class",'article',"media"],
    answer: "article",
  },
  {
    question:`How do we write comment in HTML?`,
    options:["&#60;!--...--&#62;","&#60;!--...--!&#62;","/*...*/",
    "&#60;!...--&#62;"],
    answer:"&#60;!--...--&#62;",
  },
  {
    question:`Which of the following is a not a block element?`,
    options:["&#60;p&#62;","&#60;div&#62;","&#60;h1&#62;","&#60;span&#62;"],
    answer: "&#60;span&#62;",
  },
  {
    question:`Which is not an attribute of a meta element?`,
    options:["robots","description","keywords","seamless"],
    answer: "seamless",
  },
  {
    question:`How many standard color names does HTML support?`,
    options:["120","130","140",'150'],
    answer: "140",
  },
  {
    question:`How does &#60;bdo&#62; works?`,
    options:[`Override text direction`,`Stop writing in the current text
    direction`,`Only override direction of rtl text`,`Only changes the direction
    of ltr text`],
    answer:"Override text direction",
  },
  {
    question:`Which of the following are table tags?`,
    options:[`table,thead,tr,td`,`colspan,table,tr`,`table,tt,tr,td`,`thead,colspans,td,tr`],
    answer:"table,thead,tr,td",
  },
  {
    question:`Who is considered as the father of HTML?`,
    options:["Rasmus Lerdorf","Tim Berners-Lee","Brendan Eich","Sergey Brin"],
    answer: "Tim Berners-Lee",
  },
  {
    question:`Which element is used to get highlighted text in HTML5?`,
    options:["&#60;u&#62;","&#60;mark&#62;",'&#60;highlight&#62;',"&#60;b&#62;"],
    answer:"&#60;mark&#62;"
  },

  ];
  html.sort((a,b)=>Math.random()-0.5);
  console.log(`html=${html.length}`);
  
  export let css  = [
    {
      question:`What is CSS?`,
      options:[`CSS is a style sheet language`,
      `CSS is defined to separate the presentation and content, including
      layout, colors, and fonts`,
      `CSS is the language used to style the HTML documents`,
      `All of the above`],
      answer: `All of the above`,
    },
    {
      question:`Which of the following tags is used is used to embed CSS in
      HTML page?`,
      options:[`&#60;css&#62;`,`&#60;!DOCTYPE
      html&#62;`,`&#60;script&#62;`,`&#60;style&#62;`],
      answer:`&#60;style&#62;`,
    },
    {
      question:`Which of the following CSS selectors are used to specify a group
      of elements?`,
      options:[`tag`,`id`,`class`,`Both class and tag`],
      answer:`Both class and tag`,
    },
    {
      question:`Which of the following CSS selector is used to specify a rule to
      bind a particular unique element?`,
      options:["tag","id","class","Both class and tag"],
      answer:"id",
    },
    {
      question:`Which of the following CSS property is used to make a text
      bold?`,
      options:[`text-decoration: bold;`,
      `font-weight: bold;`,
      `font-style:bold;`,
      `text-bold: true;`],
      answer: `font-weight: bold;`,
    },
    {
      question: `Which of the following is the CSS extension prefix for
      Webkit?`,
      options:["-web","-chrome","-webkit","-o"],
      answer: "-webkit",
    },
    {
      question:`Which of the following is the correct syntax to link an external
      style sheet in the HTML file?`,
      options:[`&#60;link rel="stylesheet" href="style.css"&#62;`,
      `&#60;link rel="stylesheet" src="style.css"&#62;`,
      `&#60;style rel="stylesheet" src="style.css"&#62;`,
      `&#60;style rel="stylesheet" link="style.css"&#62;`],
      answer: `&#60;link rel="stylesheet" href="style.css"&#62;`,
    },
    {
      question:`Which of the following CSS property can be used to set the image
      as a border instead of the border style?`,
      options:[`background-image-source`,
      `background-image`,`border-image-source`,`border-image`],
      answer:`border-image-source`,
    },
    {
      question:`Which of the following CSS property defines the different
      properties of all four sides of an element’s border in a single
      declaration?`,
      options:[`border-collapse`,`border-width`,`padding`,`border`],
      answer:`border`,
    },
    {
      question:`Which of the following CSS property sets the font size of
      text?`,
      options:["font-size","text-size","size",`font-weight`],
      answer:`font-size`,
    },
    {
      question:`Which of the following is not the property of the CSS box
      model?`,
      options:[`width`,`margin`,`height`,`color`],
      answer:`color`,
    },
    {
      question:`Which of the following CSS property sets the shadow for a box
      element?`,
      options:[`set-shadow`,`box-shadow`,`shadow`,`canvas-shadow`],
      answer:`box-shadow`,
    },
    {
      question:`Which of the following CSS property is used to set the color of
      the text?`,
      options:["colour",`pallet`,`color`,`text-decoration`],
      answer:"color",
    },
    {
      question:`Which of the following CSS selector selects the elements that
      are checked?`,
      options:[`:checked`,`E~F`,`::after`,`None of the above`],
      answer:`:checked`,
    },
    {
      question: `Which of the following is <b>NOT</b> a possible value for the
      <b>overflow</b> property?`,
      options:["scroll","hidden","auto","block"],
      answer:"block",
    },
    {
      question:`Which of the following property allows a marquee to be used in
      the case of a text-overflow?`,
      options:[`overflow-marquee`,`overflow-style`,`overflow-text`,`overflow-align`],
      answer:`overflow-style`,
    },
  {
    question:`Which of the following function adjust the brightness of an
    element’s color, for use by the filter property?`,
    options:[`constrast()`,`dark()`,`light()`,`brightness()`],
    answer: `brightness()`,
  },
  {
    question:`Which of the following method rotates an element around its Y-axis
    at a given degree using tranform 3D?`,
    options: [`rotateY()`,`rotate-Y()`,`rotate-Yaxis()`,`turn-y()`],
    answer:`rotateY()`,
  },
  {
    question:`Which of the following CSS3 property specifies how the contents of
    a replaced element should be fitted to the box established by its used
    height and width?`,
    options:["object-fit","object-position","image-orientation","image-position"],
    answer:"object-fit",
  },
  {
    question:`Which of the following CSS3 property specifies the alignment of
    the replaced element inside its box?`,
    options:[`object`,`object-align`,`object-position`,`object-render`],
    answer: 'object-position',
  },
  {
    question:`Which of the following selector is used to select and style when
    you place mouse over it?`,
    options:[":focus",":hover",":link",":mouse"],
    answer:":hover",
  },
  {
    question:`Which of the following method increases or decreases the size of
    an element using tranform?`,
    options:["rotate()","scale()","translate()","matrix()"],
    answer:"scale()",
  },
  {
    question:`Which of the following CSS Property specifies whether the labels
    for an element’s list items are positioned inside or outside the “box”
    defined by the listed item?`,
    options:[`list-style`,`list-style-type`,`list-position`,`list-style-position`],
    answer:`list-style-position`,
  },
  {
    question:`Which of the following rule allows users to import style rules
    from other style sheets?`,
    options:[`@media`,"@important","@import","@style"],
    answer:"@import",
  },
  {
    question:'CSS stands for ______',
    options:[`Color Style Sheet`,
    `Cascading Sheet Style`,
    `Cascading Style Sheet`,
    `Common Styling Scheme`],
    answer:"Cascading Style Sheet",
  },
  {
    question: `Which of the following selector is used to selects siblings?`,
    options:["::after","E ~ F",":checked","E[attr^=value]"],
    answer:"E ~ F",
  },
  {
    question:`Which of the following selector is used to selects the elements
    that are in the default state among a set of similar elements?`,
    options:["::after",":disabled",":default",":checked"],
    answer: ":default",
  },
  {
    question:`Which of the following is the correct syntax to display the
    hyperlinks without any underline?`,
    options:[`a {text-decoration: no-underline;}`,
    `a {text-decoration: none;}`,
    `a {font-style: no-underline;}`,
    `a {underline: none;}`],
    answer: `a {text-decoration: none;}`,
  },
  {
    question: `How do you insert a comment in CSS?`,
    options: [`//this is a comment//`,
    `/* this is a comment */`,
    `// this is a comment`,
    `&#60;!--this is a comment --&#62;`],
    answer: `/* this is a comment */`,
  },
  {
    question: `How do you make each word in a text start with a capital letter?`,
    options:[`transform: capitalize;`,
    `Not possible with CSS`,
    `text-transform: capitalize;`,
    `text-style: capitalize;`],
    answer: `text-transform: capitalize;`,
  },
  {
    question: `Which property is used to change the font of an element?`,
    options:["text-type","font-family","font", "font-style"],
    answer: `font-family`,
  },
  {
    question: `What are the possible values for the text-transform property?`,
    options:[`uppercase, lowercase, capitalize`,
    `uppercase, lowercase, capitalize and sentence`,
    `upper, lower, capital`,
    `upper, lower, capital, sentence`],
    answer: `uppercase, lowercase, capitalize`,
  },
    ];
  css.sort((a,b)=>Math.random()-0.5);
  console.log(`css=${css.length}`)
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
      question: `If sinx = 3/4, find the value of 4cos<sup>2</sup>x + &frac14;`,
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
      degrees each?`,
      options: ["13","11","5","9"],
      answer: "5",
    },
    {
      question: `Find the number of ways of arranging 4 ladies and 4 gentleman so
     that no two ladies may sit together.`,
      options: ["5!4!","4!4!","4!3!","5!3!"],
      answer: "5!4!",
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
      is perpendicular to the line y + &frac14; x - 7 = 0`,
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
      of 45<sup>o</sup>. If the distance between the hunter and the tree is 10.4m.
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

  console.log(`maths=${maths.length}`)
export  let chem  = [
  {
    question: `Mendelev periodic table was arranged in order of their `,
    options:["Atomic numbers",
    "Molecular shapes",
    "Atomic mass",
    `Orbital structire`],
    answer: "Atomic mass",
  },
  {
    question: `Which of the following decreases across the period of the
    periodic table?`,
    options: ["Atomic size",
    "Electron affinity",
    `Electronegativity`, 
    `Inert tendencies`],
    answer: "Electron affinity",
  },
  {
    question: `Which of the following compound is insoluble in water?`,
    options:
    [`MgO`,
    `P<sub>4</sub>O<sub>10</sub>`,
    `K<sub>2</sub>O`,
    `N<sub>2</sub>O<sub>3</sub>`],
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
    question:`What mass of anhydrous sodium trioxocarbonate(IV),
    Na<sub>2</sub>CO<sub>3</sub>, is present in 500 cm<sup>3</sup> of 0.1 mol
    dm<sup>-3</sup> Na<sub>2</sub>CO<sub>3</sub> solution? 
    [Na = 23, C = 12, O = 16]
    `,
    options:["10.6 g","212 g", "5.3 g", "106 g"],
    answer: "5.3 g",
  },
  {
    question: `Flow of current in electrolytes is due to the movement of `,
    options:["electrons","holes and electrons","ions","charges"],
    answer: "ions",
  },
  {
    question: ` What quantity of electricity is consumed when 10 Amperes was
    consumed in 1 hour during electrolysis?`,
    options: ["36 KC", "3600 C","7200 C", "72 KC"],
    answer: "36 KC",
  },
  {
    question: `Standard electrode potential value of pure hydrogen at all temperatures
    is? `,
    options: ["1 V","2 V","0 V","0.5 V"],
    answer: "0 V",
  },
  {
    question: `The minimum or critical amount of energy required before a
    chemical reaction could occur is called `,
    options:["Reaction energy",
    "Effective collision", 
    `Activation energy`,
    `activated complex`],
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
    answer: '0.579',
  },
  {
    question:`What is the name of the chemical compound CuCO<sub>3</sub>?`,
    options:[`Copper(III)carbonate`,
    `Copper(II)carbonate`,
    "Copper(I)carbonate",
    "Copper"],
    answer:"Copper(II)carbonate",
  },
  {
    question:`The enzyme that converts glucose to ethyl alcohol is ?`,
    options:["Maltase","Zymase","Diatase","Invertase"],
    answer: "Zymase",
  },
  {
    question:`Which of the following is a non-metal that remains a liquid at
    room temperature?`,
    options:["Mercury","Chlorine","Bromine","Phosphorus"],
    answer: "Bromine",
  },
  {
    question:`A phenomenom where a substance transit from solid state to gaseous
    state without the intermediate liquid state is called?`,
    options:["Radiation","Sublimation","Evaporation","Diffusion"],
    answer: "Sublimation",
  },
  {
    question:`The process of extracting a metal from its ore is called?`,
    options:["Metallurgy","Extraction","Prospecting","Metal mining"],
    answer:"Metallurgy",
  },
  {
    question:`The molar enthalpy change accompanying  the removal of an electron
    from a gas phase atom or ion in its ground state is called?  `,
    options:["Electron gain enthalpy",
    "Ionization enthalpy",
    `Enthalpy change`,
    "Enthalpic gas removal"],
    answer: "Ionization enthalpy",
  },
  {
    question:`The process by which a salt loses its water of crystallization to
    the atmosphere on exposure is called?`,
    options:["Efflorescence","Deliquescence",`Effervescence`,`Flourescence`],
    answer: "Efflorescence",
  },
  {
    question:`The weakest atttactive force that can be observed between two molecules
    is ?`,
    options:["Ionic","Covalent","Co-ordinate covalent","Vander waals"],
    answer: "Vander waals",
  },
  {
    question:`Cathode rays cause an object placed  behind a perforated anode to
    cast a shadow on the screen. This observation shows that the rays `,
    options:[`Are positively charged`,
    `Are negatively charged`,
    `Have mass`,
    `travel in straight lines`],
    answer: "travel in straight lines",
  },
  {
    question:`A suitable reagent for distinguishing ethanoic acid from ethanol
    is?`,
    options:["Bromine water",
    "Fehling`s solutuon",
    `Sodium hydrogen trioxocarbonate(IV)`,
    `Ammoniacal silver trioxonitrate(V)`],
    answer:`Sodium hydogen trioxocarbonate(IV)`,
  },
  {
    question:`Which of the following metal burns with brick red flame?`,
    options:["Pb","Ca","Na","Mg"],
    answer:"Ca",
  },
  {
    question:`P<sub>1</sub>V<sub>1</sub> = P<sub>2</sub>V<sub>2</sub>
    mathematically summarizes `,
    options:["Charles' law","Boyles' law","Graham's law","Avogadro's law"],
    answer:"Boyles' law",
  },
  {
    question:`A fixed mass of gas occupies a volume of 92cm<sup>3</sup> at
    3<sup>o</sup>C. What will be its volume at 18<sup>o</sup>C if the pressure
    remain constant? `,
    options:["15.3cm<sup>3</sup>",`87.3cm<sup>3</sup>`,`2.0cm<sup>3</sup>`,`97.0cm<sup>3</sup>`],
    answer: `97.0cm<sup>3</sup>`,
  },
  {
    question:`What volume of 0.5 mol/dm<sup>3</sup> H<sub>2</sub>SO<sub>4</sub> will exactly neutralize 20cm<sup>3</sup> of
    0.1 mol/dm<sup>3</sup> NaOH solution?`,
    options:[`2.0cm<sup>3</sup>`,`5.0cm<sup>3</sup>`,`6.8cm<sup>3</sup>`,`8.3cm<sup>3</sup>`],
    answer:`2.0cm<sup>3</sup>`,
  },
  {
    question:`A compound contains 40.0% carbon, 6.7% hydrogen and 53.3% oxygen.
    If the molar mass of the compound is 180, find the molecular formular [H=1,
    C=12, O=16]`,
    options:[`CH<sub>2</sub>O`,
    `C<sub>3</sub>H<sub>6</sub>O<sub>3</sub>`,
    `C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>`,
    `C<sub>6</sub>H<sub>12</sub>O<sub>3</sub>`],
    answer:`C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>`,
  }
  ];
  chem.sort(()=>Math.random() - 0.5);
  console.log(`chem=${chem.length}`)
  export let bio = [
    {
      question:`Which of the following characterizes a mature plant cell?`,
      options:[`The nucleus is push to the center of the cell`,
      `The cell wall is made up of cellulose`,
      `The nucleus is small and irregular in shape`,
      `The cytoplasm fills up the entire cell`],
      answer: `The cell wall is made up of cellulose`,
    },
    {
      question:`Which of the following is not a function of the nucleus of a
      cell?`,
      options:[`It translate genetic information for the manufacture of protein`,
      `It stores hereditary information`,
      `It is a reservoir of energy for the cell`,
      `It controls the life processes of the cell`],
      answer: `It is a reservoir of energy for the cell`,
    },
    {
      question:`The dominant phase in the life cycle of a fern is the ?`,
      options:[`Prothallus`,`Sporophyte`,`Antheridium`,`gametophyte`],
      answer:`Sporophyte`,
    },
    {
      question:`Circulation of blood to all parts of the body except the lungs
      is through  `,
      options:["The pulmonary artery",
      `The systemic circulation`,
      `The lymphatic system`,
      `The pulmonary circulation`],
      answer: `The systemic circulation`
    },
    {
      question:`The outer layer of the kidney where the Bowman's capsules are
      found is called?`,
      options:["Cortex","Pelvis","Medulla","Pyramid"],
      answer:`Cortex`,
    },
    {
      question:`Which of the following stimuli is likely to elicit a nastic
      response from an organism? `,
      options:["Touch","Light intensity","Chemical substances","Gravity"],
      answer:"Chemical substances",
    },
    {
      question:`In the male reproductive system of a mammal, sperm is stored in
      the ?`,
      options:["Vas deferens","Urethra","Epididymis",'Seminiferous tubules'],
      answer: "Epididymis",
    },
    {
     question:`The barrier between the maternal and foetal blood is the ?`,
     options:["Placenta","Liver","Umbilical chord",'Uterine wall'],
     answer: "Placenta",
    },
    {
      question:`The two halves of the pelvic girdle are joined together at the ?`,
      options:["Pubic symphysis","Ilium","Pubis","Obturator foramen"],
      answer:`Pubic symphysis`,
    },
    {
      question:`The hormone which regulates the amount of glucose in blood is
      called?`,
      options:["Adrenalin","Auxin","Insulin","Thyroxine"],
      answer:"Insulin",
    },
    {
      question:`Deamination occurs in the?`,
      options:["Kidney","Liver","Pancreas", "Spleen"],
      answer: 'Liver',
    },
    {
      question:`Epiphytes growing on the branches of trees provide an example of
      the relationship known as? `,
      options:["Parasitism","Commensalism","Saprophytism",'Holophytism'],
      answer:"Commensalism",
    },
    {
      question:`The function of ribosome in cells is?`,
      options:["Protein synthesis",`Starch synthesis`,`Transport of material`,
      `Lipid storage`],
      answer: "Protein synthesis" 
    },
    {
      question:`What is the term  used to describe biotic and abiotic factors in
      the environment of an organism`,
      options:['Habitat',"Biome","Ecosystem","Niche"],
      answer: 'Ecosystem',
    },
    {
      question:`Which of the following instrument is not used in measuring
      abiotic factors in any habitat? `,
      options:["Microscope","Wind vane","Thermometer","Hygrometer"],
      answer:"Microscope",
    },
    {
      question:`The smallest organism which shares the characteristic of both
      living and non-living matter are ?`,
      options:["Bacteria","Viruses","Fungi","Protozoa"],
      answer:"Viruses",
    },
    {
      question:`The process by which a red blood cell placed in distilled water
      absorbs water until it burst and release it's content into the
      surrounding is known as?`,
      options:["Plasmolysis","Osmosis","Turgidity","Haemolysis"],
      answer:"Haemolysis"
    },
    {
      question:`Which of the following waste products in plants is excreted
      through the stomata and lenticles?`,
      options:["Carbon dioxide","Alkaloids","Tannins","Anthocyanins"],
      answer:"Carbon dioxide",
    },
    {
      question:`The excretary structure in Earthworm is called?`,
      options:["Malphighian tubule","Flame cell","Nephridium","Kidney"],
      answer:"Nephridium",
    },
    {
      question:`The ability of the eyes to focus on both near and distance objects is called?`,
      options:["Image formation","Refraction","Hypermetropia","Accommodation"],
      answer:"Accommodation",
    },
    {
      question:`The curvature movement of plants in response to the stimulus of
      water is called?`,
      options:['Hydrotropism',"Geotropism","Phototropism","Thigmotropism"],
      answer: "Hydrotropism",
    },
    {
      question:`The organism that has a hydrostatic skeleton is ?`,
      options:["Tilapia","Hydra","Mosquito larva","Earthworm"],
      answer:"Earthworm",
    },
    {
      question:`The structure that is most commonly identified in all living
      cells under the light microscope is the?`,
      options:["Mitochondrion","Chloroplast",'Nucleus',"Ribosome"],
      answer:"Nucleus",
    },
    {
      question:`Which of the following is an organ?`,
      options:[`Guard cell`,`Liver`,`Xylem bundle`,`Blood`],
      answer:"Liver",
    },
    {
      question:`In the woody stems, gaseous exchange takes place through the?`,
      options:["Micropyles","Stomata","Lenticels","Vessels"],
      answer:"Lenticels",
    },
    {
      question:`The tissue for transporting substances manufactured in the leaves
      to other part of the plant is called?`,
      options:["Xylem","Companion cells","Sieve tubes","Cambium"],
      answer:"Xylem",
    },
    {
      question:`Yellowing of leaves is an indicator that the soil lacks?`,
      options:[`Iron, Magnesium, Calcium`,
      `Nitrogen, Sulphur, Potassium`,
      `Sulphur, Phosphorus Iron`,
      `Magnesium, Nitrogen, Iron`],
      answer:"Magnesium, Nitrogen, Iron",
    },
    {
      question:`The lymphatic system of mammals
      rejoins the blood circulatory system at the ? `,
      options:["Hepatic vein","Subclavian vein","Renal vein",
      "Common iliac vein"],
      answer:"Subclavian vein",
    },
    {
      question:`Bacteria multiply rapidly by means of?`,
      options:["Budding","Binary fission","Fragmentation","Spore formation"],
      answer:"Binary fission"
    },
    {
      question:`Which of the following characterizes the white mangrove?`,
      options:["Prop roots","Buttress root","Breathing roots","Stilt roots"],
      answer:"Breathing roots",
    },
    
    ];
    bio.sort(()=>Math.random()-0.5);
    console.log(`bio=${bio.length}`)
    
  export let eng = [];
  
  export let phy = [
    {
      question:`Two cars moving in the same direction have speeds of 100 km/h
      and 130 km/h what is the velocity of the faster car as measured by an
      observer in the slower car?`,
      options:[`30 km/h`,`130 km/h`,`200 km/h`,`230 km/h`],
      answer:"30 km/h",
    },
    {
      question:`A car moves with an initial velocity of 25 m/s and reaches a
      velocity of 45 m/s in 10s. what is the acceleration of the car?`,
      options: [`2 m/s<sup>2</sup>`,
      `5 m/s<sup>2<sup>`,
      `20 m/s<sup>2</sup>`,
      `25 m/s<sup>2</sup>`],
      answer:"2 m/s<sup>2</sup>",
    },
    {
      question:`The surfaces of conveyor belts are made rough so as to  `,
      options:[`Protect them while carry loads`,
      `Prevent the loads from slipping`,
      `Enable them to carry more loads`,
      `Make them stronger`],
      answer:`Prevent the loads from slipping`,
    },
    {
      question:`A machine of velocity ratio 6 requires an effort of 400 N to
      raise a load of 800 N through 1 m. Find the efficiency of the machine.`,
      options:["55.6%","50.0%","33.3%","22.2%"],
      answer:"33.3%",
    },
    {
      question:`If a wire 30 cm long is extended to 30.5 cm by a force of 300 N.
      Find the strain energy of the wire.`,
      options:["0.75 J","7.5 J","75.0 J","750.0 J"],
      answer:"0.75 J",
    },
    {
      question:`The accurate measurement of the relative density of a substance
      in its powdered form is done with a beam balance and `,
      options:["A density bottle","Eureka can","A pipette","A burette"],
      answer:"A density bottle",
    },
    {
      question: `A load is pull at a uniform speed along a horizontal floor by a
      rope at 45<sup><i>o</i></sup> to floor. If the force in the rope is 1500N, what
      is the frictional force on the load?`,
      options:["1524 N","1350 N","1260 N","1061 N"],
      answer:"1061 N",
    },
    {
      question:`Calculate the total distance covered by a train before coming to
      rest if its initial speed is 30m/s with a constant retardation of
      0.1m/s<sup>2</sup>`,
      options:[`5500 m`,"4500 m","4200 m","3000 m"],
      answer:"4500 m",
    },
    {
      question:`A rocket is fired from the earth's surface to a distant planet.
      By Newton's law of universal gravitation, the force F will`,
      options:[`Increase as r reduces`,
      `Increase as G varies`,
      `Remains constant`,
      `Increase as r increases`],
      answer:"Increase as r reduces",
    },
    {
      question:`An object moves in a circular path of radius 0.5m with a speed
      of 1m/s What is its angular velocity?`,
      options:["8 rad/s","4 rad/s","2 rad/s","1 rad/s"],
      answer:"2 rad/s",
    },
    {
      question:`An object of mass 20kg slides down an inclined plane at an angle
      of 30<sup>o</sup> to the horizontal. The coefficient of static friction is?[g = 10ms-2]`,
      options:["0.2","0.3","0.5","0.6"],
      answer:"0.6",
    },
    {
      question:`If a load of 1 kg stretches a cord by 1.2cm, what is the force
      constant of the cord? [g=10ms-2]`,
      options:["866 N/m","833 N/m","769 N/m","667 N/m"],
      answer: '833 N/m',
    },
    {
      question:`The equation of a wave traveling in a horizontal direction is
      expressed as y = 15 sin 2/5 (60t - x) what is its wave length?`,
      options:["60 m","15 m","5 m","2 m"],
      answer:"5 m"
    },
    {
      question:`Which of the following factors will affect the velocity of
      sound?`,
      options:[`An increase in the pitch of the sound`,
      `An increase in the loudness of the sound`,
      `Wind travelling in the same direction of the sound`,
      `A change in the atmospheric pressure at constant temperature`],
      answer:`Wind travelling in the same direction of the sound`,
    },
    {
      question:`The characteristic of a vibration that determines its intensity
      is the`,
      options:["Frequency","Overtone","Wavelength","Amplitude"],
      answer:"Amplitude",
    },
    {
      question:`A pinhole camera is placed 300m in front of a building so that
      the image is formed on a screen 5cm from the the pinhole. If the image is
      2.5cm high, the height of the building will be`,
      options:["25 m","50 m","150 m","100 m"],
      answer:"150 m"
    },
    {
      question:`The magnification of an object 2cm tall when placed 10cm in
      front of a plane mirror is`,
      options:["6.0","1.0","0.7","0.6"],
      answer:"1.0",
    },
    {
      question:`After reflection from the concave mirror, rays of light from the
      sun converges`,
      options:[`At the radius of curvature`,
      `At the focus`,
      `Beyond the radius of curvature`,
      `Between the focus and the radius of curvature`],
      answer:`At the focus`,
    },
    {
      question:`A metal rod has a length of 100cm at 200<sup>o</sup> C. At what temperature
      will its length be 99.4cm. If the linear expansivity of the material of
      the rod is 2 x 10<sup>-5</sup> C<sup>-1</sup>`,
      options:[`200<sup>o</sup>C`,
      `300<sup>o</sup>C`,
      `100<sup>o</sup>C`,
      `-100<sup>o</sup>C`],
      answer:`-100<sup>o</sup>C`,
    },
    {
      question:`A train has an initial velocity of 44m/s and an acceleration of
      -4m/s<sup>2</sup>. Calculate its velocity after 10 seconds.`,
      options:["10 m/s","6 m/s","8 m/s","4 m/s"],
      answer:`4 m/s`,
    },
    {
      question:`In a slide wire bridge, the balance is obtained at a point 25cm
      from one end of wire 1m long. The resistance to be tested is connected to
      that end and a standard resistance of 3.6 is connected to the other end of
      the wire. Determine the value of the unknown resistance.`,
      options:["3.2 &#120686;","1.4 &#120686;","3.21 &#120686;","1.2 &#120686;"],
      answer:"1.2 &#120686;",
    },
    {
      question:`A ray of light passes through the centre of curvature of a
      concave mirror and strikes the mirror. At what angle is the ray
      reflected?`,
      options:["180<sup>o</sup>",`90<sup>o</sup>`,`0<sup>o</sup>`,`60<sup>o</sup>`],
      answer:"0<sup>o</sup>"
    },
    {
      question:`The pitch of a screw jack is 0.45cm and the arm is 60cm long. If
      the efficiency of the Jack is 75/π %, calculate the mechanical
      advantage.`,
      options:["400","200","300","150"],
      answer:"200",
    },
    {
      question:`A supply of 400V is connected across capacitors of 3μf and 6μf
      in series. Calculate the charge.`,
      options:[`8 x 10<sup>-4</sup>C`,
      `4 x 10<sup>-2</sup>C`,
      `8 x 10<sup>-3</sup>C`,
      `4 x 10<sup>-8</sup>C`],
      answer:`8 x 10<sup>-4</sup>C`,
    },
    {
      question:`A vibrator causes water ripples to travel across the surface of
      a tank. The wave travels 50cm in 20s and the distance between successive
      crests is 5cm. Calculate the frequency of the vibrator.`,
      options:["5 Hz","6 Hz","5.2 Hz","25 Hz"],
      answer:"5 Hz",
    },
    {
      question:`A thermocouple thermometer is connected to a millivoltmeter
      which can read up to 10mV. When one junction is in ice at 0<sup>o</sup>C and the
      other is steam at 100<sup>o</sup>C, the millivoltmeter reads 4mV. What is the maximum
      temperature which this arrangement can measure.`,
      options:[`100<sup>o</sup>C`,
      `248<sup>o</sup>C`,
      `250<sup>o</sup>C`,
      `350<sup>o</sup>C`],
      answer:`250<sup>o</sup>C,`
    },
    {
      question:`An alternating current can induce voltage because it has`,
      options:[`Riple value`,
      `Varying magnetic field`,
      `Weaker magnetic field than DC`,
      `Hign peak value`],
      answer:'Varying magnetic field',
    },
    {
      question:`The earth's gravitational field intensity at its surface is
      about?[G = 6.7 x 10<sup>-11</sup>Nm<sup>2</sup>/kg<sup>2</sup>, mass of
      the earth is 6 x 10<sup>24</sup>kg, radius of the earth is 6.4 x 10<sup>6</sup>m, g on the earth =
      9.8m/s<sup>2</sup>].`,
      options:["6.7 N/kg","7.9 N/kg","8.0 N/kg","9.8 N/kg"],
      answer:"9.8 N/kg",
    },
    {
      question:`The force required to make an object of mass m, travelling with
      velocity v, turn in a circle of radius r is`,
      options:[`mv<sup>2</sup>&#x2044;r`,
      `mr<sup>2</sup>&#x2044;x`,
      `mr&#x2044;v`,
      `mv&#x2044;r<sup>2</sup>`],
      answer:`mv<sup>2</sup>&#x2044;r`,
    },
    {
      question:`A machine gun with a mass of 5kg fires a 50g bullet at a speed
      of 100 m/s. Calculate the recoil speed of the machine gun. `,
      options:["0.5 m/s","1.5 m/s",'1.0 m/s',"2.0 m/s"],
      answer:'1.0 m/s'
    }
    ];
    phy.sort(()=>Math.random()-0.5);
    console.log(`phy=${phy.length}`)
  