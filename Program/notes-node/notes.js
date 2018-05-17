console.log("Notes Js Starting")
//module.exports.age=24;
var addNote=(title,body)=>{
  console.log("Adding ",title,body);
 
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


