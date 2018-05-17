// var obj={
// name:"Ashish"
// };
// var stringObj=JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

const fs=require('fs');

var originalObject={
	title:"Ashish",
	body:"Body"
};

var originalObjectString=JSON.stringify(originalObject);
console.log(originalObjectString);
fs.writeFileSync("notes.json",originalObjectString);

var noteString=fs.readFileSync("notes.json");
var note=JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);