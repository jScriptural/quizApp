let python = [
	{
		question:`The text in a <i>print</i> statement should be enclosed in `,
		options:[`quotes "`,`semi-colons ;`,`slashes \\`,`colons :`],
		answer: `quotes "`,
	},
	{
		question:`What does the <i>input()</i> function return?`,
		options:["string","float","integer","dependes on value entered"],
		answer: "string",
	},
	{
		question: `What will be the output of the code snippet?
     <div><img src="./Assets/Images/code_snippet8.jpg" width="100%"></div>`,
		options:["7","8","82","10"],
		answer:"82", 
	},
	{
		question:`What is the maximum length of a python identifier?`,
		options:["32","16","128",`No fixed length is specified`],
		answer:`No fixed length is specified`,
	},
	{
		question:`Which of the following modules need to be imported to handle date time computations in python?`,
		options:["datetime","date","time","timedate"],
		answer: "datetime",
	},
	{
		question:`What will be the output of the following code snippet?
     <div><img src="./Assets/Images/code_snippet9.jpg" width="100%"></div>`,
		options:["[2,2,3]","(2,2,3)","(1,2,3)","Error"],
		answer:"Error",
	},
	{
		question:`What will be the output of the following code snippet?
     <div><img src="./Assets/Images/code_snippet10.jpg" width="100%"></div>`,
		options:["15","0","20","1"],
		answer: "15",
	},
	{
		question:`What will be the output of the following code snippet?
     <div><img src="./Assets/Images/code_snippet11.jpg" width="100%"></div>`,
		options:["0 1 2 3 ... 15","Infinite loop",`0 3 6 9 12 15`,`0 3 6 9 12`],
		answer:"0 3 6 9 12 15",
	},
	{
		question:`Which of the following type of loops are not supported in python?`,
		options: ["for","while","do-while","None of the above"],
		answer:"do-while",
	},
	{
		question:`Which of the following is an invalid identifier?`,
		options:["my_string_1","1st_string","foo",`_1st_string`],
		answer:"1st_string",
	},
	{
		question:`which of the following is not a key word in python?`,
		options:["eval","pass",'nonlocal',"assert"],
		answer:"eval",
	},
	{
		question:`Which is the correct python syntax for raising a number x, to power of y?`,
		options:["x^y","x^^y","x*y","x**y"],
		answer: "x**y",
	},
	{
		question:`Which of the following is not a python built-in data type?`,
		options:["tuple","list","dictionary","tree"],
		answer:"tree",
	},
	{
		question:`What is the output of the following code?<br><code>x = 5 <br> print(x == "5")</code>`,
		options:["True","False","TypeError","SyntaxError"],
		answer: "False",
	},
	{
		question:`Which of the following statements is true about python?`,
		options:[
			`Python is a strongly typed language`,
			`Python is a statically typed language`,
			`Python is a dynamically typed language`,
			`Python is a weakly typed language`,
		],
		answer: `Python is a dynamically typed language`,
	},
	{
		question:`Which of the following is not a python control flow statement?`,
		options:["if-else","while loop","for loop","switch statement"],
		answer: "switch statement",
	},
	{
		question:`What is the output of the following code?<br> <code> x = [1,2,3] <br> print(x[3]) </code>`,
		options: ["3","TypeError","IndexError","SyntaxErorr"],
		answer: "IndexError",
	},
	{
		question:`What is the output of the following code? <br> <code> x = [1,2,3] <br> y = [4,5,6] <br> print(x+y) </code>`,
		options: [`[1,2,3,4,5,6]`,`[5,7,9]`,`TypeError`, "1,2,3,4,5,6"],
		answer: `[1,2,3,4,5,6]`,

	},
	{
		question:`Which of the following is not a valid way to read a file in python?`,
		options:[`f = open("file.txt","r")`,
			`f = open("file.txt", mode="r")`,
			`f = open("file.txt","read")`,
			`None of the above`,],
		answer: `f = open("file.txt","read")`,
	},
	{
		question:`Which of the following is a valid way to remove an element from a list in python?`,
		options:[`list.remove(index)`,
			`list.pop(index)`,
			`list.delete(index)`,
			`list.forget(index)`],
		answer: `list.pop(index)`,
	},
	{
		question: `What is the output of the following code? <br> <code> x = [1,2,3,4,5] <br> print(x[-3:-1])</code>`,
		options: [`[3,4]`,`[3,4,5]`,`[2,3]`,`[2,3,4]`],
		answer: `[3,4]`,
	},
	{
		question: `What is the output of the following code?<br> <code> x = {"a": 1,"b":2,"c":3,}<br>
		print(x.keys()) </code>`,
		options: [`["a","b","c"]`,`[1,2,3]`,`[("a",1),("b",2),("c",3)]`,`None of the above`],
		answer: `["a","b","c"]`,
	},
	{
		question: `Which of the following is a valid way to iterate over a dictionary, x, in python?`,
		options:[`for i in x:`,`for i in x.values():`,`for i in x.keys():`,`All of the above`],
		answer:`All of the above`,
	},
	{
		question:`What is the output of the following code? <br> <code> x = 5 <br> y = 2 <br> print(x//y) </code>`,
		options:["2.5","2","2.0","TypeError"],
		answer: "2",
	},
	{
		question: `What is the output of the following code?<br><code> x = [1,2,3]<br>x[1:2] = [4,5]<br>print(x) </code>`,
		options:["[1,2,3,4,5]","[1,4,5,3]","[1,[4,5],3]","[4,5]"],
		answer: "[1,4,5,3]",
	},
	{
		question:`What is the output of the following code?<br> <code> x = { "a":1,"b":2,"c":3}<br>y = x.get("d",2)<br>print(y) </code>`,
		options:["d","1","b","2"],
		answer:"2",
	},
	{
		question:`What is the output of the following code?<br><code>x = [1,2,3,4]<br> y = x.index(3)<br>print(y) </code>`,
		options:["4","1","2","3"],
		answer: "2",
	},






		 
];

console.log(`python=${python.length}`);
python.sort((a,b)=>Math.random() - 0.5);
    for(let item of python){
      if(!(item.options.includes("All of the above") ||
      item.options.includes("None of the above")))item.options.sort((a,b)=>Math.random()-0.5);
    };
export {python as default};
