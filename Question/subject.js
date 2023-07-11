
const  subjects = [
	"HTML",
	"CSS",
	"JavaScript",
	"Maths",
	"Physics",
	"Chemistry",
	"English",
	"Biology",
	"Python",
	"General-Knowledge",
	`African-History`,
	`Computer-Science`,

];

subjects.sort((a,b)=>a.localeCompare(b));
export {subjects as default};
