
let africanHistory = [
	{
		question:`Under a king ruling by divine right, Ethiopia was confederation of `,
		options:["vassal kingdoms",
			"provincial lords",
			"satellite religions",
			"independent empires",
		],
		answer:`provincial lords`,
	},
	{
		question:`_________ is one of the earliest written histories in Sub-Saharan Africa.`,
		options:["The Rosetta stone",
			"The Story of Sinuhe",
			`The Glorious Victories of Amda Seyon`,
			"Theogony",
		],
		answer:`The Glorious Victories of Amda Seyon`,
	},
	{
		question: `The earliest of the rainforest village clusters to urbanize and rise to kingdom status was that of Ile-Ife west of the Niger Delta, the spiritual center of the _________ ethnic group and its oral traditions.`,
		options:["Edo",
			"Swazi",
			"Zulu",
			"Yoruba",
		],
		answer:`Yoruba`,
	},
	{
		question:`Which of the following is not a common trait shared by the Ancient Ghana and the Malian Empire?`,
		options:[`power rested on a large, horselessarmy`,
			`rulings class was ethnic Malinke`,
			`ruling elites relied on a small central administration concerned with finances and justice`,
			`relied on oral tradition`,
		],
		answer:`power rested on a large, horseless army`,
	},
	{
		question:`As a result of trade considerations with North African and Middle Eastern merchants, a shift took place among the ethnic Soninke merchants of Ghana`,
		options:[`from Islam to African Animism`,
			`from African Animism to Christianity`,
			`from African Animism to Islam`,
			`from Judaism to African Animism`,
		],
		answer:`from African Animism to Islam`,
	},
	


]




  console.log(`afriHistory=${africanHistory.length}`);
africanHistory.sort((a,b)=>Math.random() - 0.5);
    for(let item of africanHistory){
      if(!(item.options.includes("All of the above") ||
      item.options.includes("None of the above")))item.options.sort((a,b)=>Math.random()-0.5);
    };
export {africanHistory as default};
