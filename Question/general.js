let general = [
	{
		question:`What is the capital of Spain?`,
		options:["Barcelona","Madrid","Valencia","Seville"],
		answer: "Madrid",
	},
	{
		question:`Who wrote the novel "1984"?`,
		options:["George Orwell","Aldous Huxley","F. Scott Fitzgerald","Ernest Hemingway"],
		answer: "George Orwell",
	},
	{
		question:`Which planet in the solar system is known as the "red planet"?`,
		options: ["Venus","Mars","Jupiter","Saturn"],
		answer: "Mars",
	},
	{
		question:`Which river runs through Paris?`,
		options:["Thames","Nile","Danube","Seine"],
		answer: "Seine",
	},
	{
		question:`What is the capital of Russia?`,
		options: ["Moscow","St. Petersburg","Novosibirsk","Kazan"],
		answer: "Moscow",
	},
	{
		question:`Who painted the famous artwork "The Monalisa"?`,
		options:["Michelangelo","Vincent Van Gogh","Leonardo da Vinci","Pablo Piccaso"],
		answer: "Leonardo da Vinci",
	},
	{
		question:`Which bird is known for its ability to imitate human speech?`,
		options:["Penguin","Parrot","Toucan","Crow"],
		answer:"Parrot",
	},
	{
		question:`Which is the largest mammal in the world?`,
		options:["Elephant","Whale","Hippopotamus","Rhinoceros"],
		answer:"Whale",
	},
	{
		question:`Who is the founder of Microsoft Corporation?`,
		options:["Bill Gates","Steve Jobs","Mark Zuckerberg","Larry Page"],
		answer:"Bill Gates",
	},
	{
		question: `Which is the largest country in South America?`,
		options:["Argentina","Brazil","Colombia","Peru"],
		answer: "Brazil",
	},
	{
		question:`Who invented the telephone?`,
		options:["Thomas Edison","Alexander Graham Bell","Nikola Tesla","James Clerk Maxwell"],
		answer: "Alexander Graham Bell",
	},
	{
		question:`Which is the largest country in Africa by land mass?`,
		options:["South Africa","Algeria","Egypt","Nigeria"],
		answer: "Algeria",
	},
	{
		question:`Who painted the famous artwork "Starry Night"?`,
		options:["Claude Monet","Salvador Dali","Pablo Picasso","Vincent Van Gogh"],
		answer:"Vincent Van Gogh",
	},
	{
		question:`Who is the author of the novel "Pride and Prejudice"?`,
		options:["Chinua Achebe","Jane Austen","Charlotte Bronte","Thomas Hardy"],
		answer: "Jane Austen",
	},
	{
		question:`What is the capital of Brazil?`,
		options: ["Rio de Janeiro","Sao Paulo","Brasilia","Salvador"],
		answer:"Brasilia",
	},
	{
		question: `Who is the author of "Things Fall Apart"?`,
		options:["Wole Soyinka","William Shakespeare","Ngugi wa Thiongo","Chinua Achebe"],
		answer: "Chinua Achebe",
	},
	{
		question:`Who is the first person to step on the moon?`,
		options: ["Neil Armstrong","Buzz Aldrin","Michael Collins", "Yuri Gagarin"],
		answer: "Neil Armstrong",
	},
	{
		question:`Which country is the smallest in the world by land area?`,
		options:["Monaco","Nauru","Vatican city","San Marino"],
		answer:"Vatican city",
	},
	{
		question:`What is the capital of Nigeria?`,
		options:["Abuja","Lagos","Nairobi","Uyo"],
		answer:"Abuja",
	},
	{
		question:`Which African country is known for her great mosque of Djenne?`,
		options:["Mali","Senegal","Mauritania","Chad"],
		answer:"Mali",
	},
	{
		question:`Which river is the longest in Africa?`,
		options:["Nile River","Congo River","Zambezi River","Niger River"],
		answer:"Nile River",
	},
	{
		question:`Which is the most populous country in Africa?`,
		options:["Nigeria","South Africa","Ghana","Kenya"],
		answer: "Nigeria",
	},
	{
		question:`Which city is known as the "City of a Thousand Minarets"?`,
		options:["Rabat","Cairo","Tripoli","Algiers"],
		answer: "Cairo",
	},
	{
		question: `Which African country has spanish as her official language?`,
		options:["Equatorial Guinea","Mozambique","Angola","Guinea-Bissau"],
		answer: "Equatorial Guinea",
	},
	{
		question:`What country is the Serengeti National Park located?`,
		options:["Nigeria","Rwanda","Uganda","Tanzania"],
		answer:"Tanzania",
	},
	

		



];



console.log(`general=${general.length}`);
general.sort((a,b)=>Math.random() - 0.5);
    for(let item of general){
      if(!(item.options.includes("All of the above") ||
      item.options.includes("None of the above")))item.options.sort((a,b)=>Math.random()-0.5);
    };
export default general;
