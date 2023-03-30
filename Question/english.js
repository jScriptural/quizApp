let eng = [
    {
      question:`A comma(,) is used`,
      options:[`To indicate a pause in a sentence for clearer understanding.`,
      `At the end of a sentence.`,
      `To mark off two independent clauses in the same sentence.`,
      `At the end of a direct question.`],
      answer:`To indicate a pause in a sentence for clearer understanding.`,
    },
    {
      question: `______ is used to indicate contracted form of words`,
      options:[`Comma`,`Full stop`,`Apostrophe`,`Semi-colon`],
      answer:`Apostrophe`,
    },
    {
      question: `Which of the following is not a part of speech?`,
      options:['Noun',"Preposition","Interjection","Present tense"],
      answer: `Present tense`
    },
    {
      question:`What part of speech does the underline word belongs?<br>
      <br>
      John is my brother and <u>he</u> is 18 years old.`,
      options: ["Pronoun","Verb","Placeholder","Noun"],
      answer: "Pronoun",
    },
    {
      question:`What part of speech does the underline word belongs?<br>
      <br>
       The boy <u>writes</u> with a pen`,
       options:["Noun","Verb","Pronoun","Interjection"],
       answer: "Verb",
    },
    {
      question:`What is the comparative and superlative form of <i>little</i>?`,
      options:[`less, least`,"littler,littlest",`tiny, tiniest`,
      `smaller, smallest`],
      answer: `less, least`,
    },
    {
      question: `What part of speech does the underline word belongs?<br>
      <br>
       He <u>actually</u> killed the goat.`,
       options: ["Verb","Adjective","Adverb","Noun"],
       answer: "Adverb",
    },
    {
      question: `Change the following sentence into passive voice.<br>
      <br>
      The teacher will teach the class.`,
      options:[`The class will be taught by the teacher`,
      `The teacher will taught the class`,
      `The class would have to be taught by the teacher`,
      `Teaching the class is the teacher's occupation`],
      answer:`The class will be taught by the teacher`,
    },
    {
      question:`What is the tense of the underline verb?<br>
      <br>
      She <u>goes</u> to school while he plays football`,
      options:[`Simple present tense`,`Past tense`,`Past participle`,`Present
      Continuous tense`],
      answer: `Simple present tense`,
    },
    {
      question: `What is the plural of <i>ox</i>?`,
      options: ["Oxen","Oxes","Ox","Oxs"],
      answer:"Oxen",
    },
    {
      question:`What is the plural of <i>swine</i>?`,
      options:["Swines","Swine","Swone",'School'],
      answer: "Swine",
    },
    {
      question:`Which word is similar or nearly similar in meaning to the
      underline word and can replace it in the sentence?<br>
      <br>
      My mum was <u>mad</u> at me for not obeying her`,
      options:["insane","angry","happy","sad"],
      answer:"angry",
    },
    {
      question:`Choose the option nearest in meaning to the underline word.<br>
      <br>
      It is claimed that there is an <u>extinct</u> volcano near Pankshin`,
      options:["extinguished","inactive","dead","disused"],
      answer: 'inactive',
    },
    {
      question:`Choose the option which best fills the gap.<br>
      <br>
      Peter was such a skilfull boxer that he was not afraid to take ______
      anybody.`,
      options:["to","upon","on","in"],
      answer:"on"
    },
    {
      question:`Choose the option opposite in meaning to the underline word.<br>
      <br>
      Our government is making a <u>determined</u> efforts to eradicate poverty.`,
      options:["Compulsory","Innocent","Ineffective","Unreliable"],
      answer: "Ineffective"
    },
    {
      question:`Choose the word or phrase which best fills the gap.<br>
      <br>
      When I met Amadi yesterday it was the first time I _____ him for six
      months `,
      options:["had seen","saw","have seen","have been seeing"],
      answer: "have seen",
    },
    {
      question:`Choose the option which best fills the gap.<br>
      <br>
      John prefers the white shirt ______ the blue one`,
      options:["for","to","than","more than"],
      answer:"to",
    },
    {
      question:`Choose the option which best fills the gaps.<br>
      <br>
      The young lady has _____ to sober _____ after being drunk.`,
      options:[`began / up`,`began / in`,
      `begun / up`, `begun / down`],
      answer: `begun / down`,
    },
    {
      question:`Choose the word that rhymes with <i>own</i>`,
      options:["brown","frown","gown","phone"],
      answer:"phone",
    },
    {
      question: `Choose the option that best explains the information conveyed
      in the sentence.
      <br>
      <br>
      The minister considered the ministry's budget to be a drop in the ocean in
      view of the number of projects in the pipe line.`,
      options:[`The pipeline project across the ocean will be abandoned unless
      budgetary allocation improves.`,
      `The amount available may be inadequate for projected expenditure`,
      `The minister may be dropped for failing to complete a number of
      projects`,
      `The money approved cannot complete the pipeline project across the ocean`],
      answer: `The amount available may be inadequate for projected expenditure`,
    },
    {
      question:`Choose the option nearest in meaning to the underline word.<br>
      <br>
      The students <u>assembled</u> in the hall`,
      options:["met","meet","gathered","joined"],
      answer:"gathered",
    },
    {
      question:`Choose the option opposite in meaning to the underline
      word.<br>
      <br>
      The <u>narrow</u> bridge leads to the village stream.`,
      options: ["broad","slim","big","small"],
      answer: "broad"
    },
    {
      question:`Choose the option which best defines the given word.<br>
      <br>
      <i>Circumlocation</i>`,
      options:[`Saying in many words what may be said in few words`,
      `Mistake in dating something`,
      `Draw a circle in a certain location`,
      `Standard of judgement`],
      answer: `Saying in many words what may be said in few words`
    },
    {
      question: `What is the plural of <i>cannon</i>.`,
      options:["cannon","cannons","cannen","None of the above"],
      answer:"cannon"
    },
    {
      question: "An adjective qualifies a/an _____.",
      options:["pronoun","noun","verb","adjective"],
      answer: "noun"
    }
    ];
  console.log(`eng=${eng.length}`);
eng.sort((a,b)=>Math.random() - 0.5);
    for(let item of eng){
      if(!(item.options.includes("All of the above") ||
      item.options.includes("None of the above")))item.options.sort((a,b)=>Math.random()-0.5);
    };
export {eng as default};

