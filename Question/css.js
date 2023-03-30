let css  = [
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
      options:[`:checked`,`E ~ F`,`::after`,`None of the above`],
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
  console.log(`css=${css.length}`)
css.sort((a,b)=>Math.random() - 0.5);
    for(let item of css){
      if(!(item.options.includes("All of the above") ||
      item.options.includes("None of the above")))item.options.sort((a,b)=>Math.random()-0.5);
    };
export {css as default};

