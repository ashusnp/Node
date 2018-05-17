console.log("Notes Js Starting")
//module.exports.age=24;
const fs=require('fs');

var fetchNotes=()=>{
  try{
  var noteString=	fs.readFileSync('note-data.json');
   return JSON.parse(noteString);
  }
  catch(e){
    return [];
  }
};
var saveNotes=(notes)=>{
  	fs.writeFileSync('note-data.json',JSON.stringify(notes));
};
var addNote=(title,body)=>{
 var notes=[];
 var note={
 	title,body
 };

var notes=fetchNotes();
 // var duplicateArray=notes.filter((note)=>{
 // 	return note.title===title;
 // });
 var duplicateArray=notes.filter((note)=>note.title===title);

 if(duplicateArray.length===0){
 	notes.push(note);
  saveNotes(notes);
  return 1;
 }
 else{
   return 2;
 }



};
var getAll=()=>{
	console.log("Get all notes");
}
var readNote=(title)=>{
	var notes=fetchNotes();
  var filterArray=notes.filter((note)=>note.title===title)
  return filterArray;
}
var removeNote=(title)=>{
	// fetch notes
  var notes=fetchNotes();
  //filter array to remove match title notes
  var filterArray=notes.filter((note)=>note.title!==title);
  //save noteS
  saveNotes(filterArray);
  return notes.length!==filterArray.length;
}

module.exports={
//	addNote:addNote
addNote, //es6
getAll,
removeNote,
readNote
}
