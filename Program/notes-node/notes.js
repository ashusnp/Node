console.log("Notes Js Starting")
//module.exports.age=24;
const fs=require('fs');
var addNote=(title,body)=>{
 var notes=[];
 var note={
 	title,body
 };
 try{
 var noteString=	fs.readFileSync('note-data.json');
  var notes=JSON.parse(noteString);
 }

 // var duplicateArray=notes.filter((note)=>{
 // 	return note.title===title;
 // });
 var duplicateArray=notes.filter((note)=>note.title===title);

 if(duplicateArray.length===0){
 	notes.push(note);
 	fs.writeFileSync('note-data.json',notes);
 }


 
};
var getAll=()=>{
	console.log("Get all notes");
}
var readNote=(title)=>{
	console.log("read ",title);
}
var removeNote=(title)=>{
	console.log("remove ",title);
}

module.exports={
//	addNote:addNote
addNote, //es6
getAll,
removeNote,
readNote
}


