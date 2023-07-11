const  computersc= [
	{
		question:`Who is regarded as the Father of Computer?`,
		options:["Charlie Baggage",
			"Charles Babbage",
			"Denis Ritchie",
			"Alan Turing",
		],
		answer:"Charles Babbage",

	},
	{
		question:`CPU is an acronym for `,
		options:[`Central Processing Unit`,
			`Central Processor Unit`,
			`Controlling Protocol Unicode`,
			`Center Program Unit`,
		],
		answer: "Central Processing Unit",
	},
	{
		question:`_________ is a memory on which data can be written only once.`,
		options:["EPROM",
			"PROM",
			"ROM",
			"RAM",
		],
		answer: "PROM",
	},
	{
		question:`Which language is directly understood by the computer without translation program?`,
		options:["Machine Language",
			"High Level Language",
			"BASIC Language",
			"Assembly Language",
		],
		answer: "Machine Language",
	},
	{
		question:`Which of the following is associated with second generation computers?`,
		options:["Magnetic core memory",
			"Operating core memory",
			"Transistors",
			"All of the above",
		],
		answer:"All of the above",
	},
	{
		question:`The three main parts of the processor are`,
		options:[`ALU, Control Unit and RAM`,
			`ALU, Control Unit and Registers`,
			`Control Unit, Registers and RAM`,
			`ROM,RAM and cache`,
		],
		answer:"ALU, Control Unit and RAM",
	},
	{
		question:`A T-switch is used to `,
		options:[
			`Rearrange connections between computing equipments`,
			`Transmit characters one at a time`,
			`Echo every character that is received`,
			`Control how messages are passed between computers`,
		],
		answer:`Rearrange connections between computing equipments`,
	},
	{
		question:`How many pairs of stations can simultaneously communicate on ETHERNET LAN?`,
		options:["1","2","5","multiple"],
		answer:"1",
	},
	{
		question:`Which one of the following is not a client-server application?`,
		options:["Ping",
			"Web browsing",
			"Internet chat",
			"E-mail",
		],
		answer: "Ping",
	},
	{
		question:`Which of the following types of channels moves data relatively slowly?`,
		options:["Broadband channel",
			"Narrowband channel",
			"Voiceband channel",
			"Wideband channel",
		],
		answer:"Narrowband channel",
	},
	{
		question:`If you wish to extend the length of the network without having the signal degrade, you would use a`,
		options:["Repeater",
			"Gateway",
			"Switch",
			"Router",
		],
		answer:"Repeater",
	},
	{
		question:`Frames from one LAN can be transmitted to another LAN via which of the following device`,
		options:["Modem","Repeater","Bridge","Router"],
		answer:"Bridge",
	},
	{
		question:`An alternate name for the completely interconnected network topology is`,
		options:["Mesh","Tree","Star","Ring"],
		answer:"Mesh",
	},
]











  console.log(`comp=${computersc.length}`);
computersc.sort((a,b)=>Math.random() - 0.5);
    for(let item of computersc){
      if(!(item.options.includes("All of the above") ||
      item.options.includes("None of the above")))item.options.sort((a,b)=>Math.random()-0.5);
    };
export {computersc as default};
