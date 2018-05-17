console.log("Start");
const fs=require('fs');
//const os=require('os');
const _=require('lodash');
const yargs=require('yargs');


const notes=require('./notes.js');


const argv=yargs.argv;
//var command=process.argv[2];
var command=argv._[0];
//console.log("process ",process.argv);
console.log("yargs ",argv);
if(command==='add'){
	//console.log("Adding");
	notes.addNote(argv.title,argv.body);
}else if(command==='list'){
	notes.getAll();
}else if(command==='read'){
		notes.readNote(argv.title);
}else if(command==='remove'){
		notes.removeNote(argv.title);
}else{
	console.log('not found');
}



























/*//var res=notes.addNote();
//console.log(os.userInfo());

//console.log('Result:', notes.add(9,-2));

//console.log("Lodash ",_.isString(true));
//console.log("Lodash ",_.isString("Ashsh"));
//var filterArray=_.uniq(["Ashish",1,"Sanap",1,2,3,4]);
//console.log(filterArray);


// var user=os.userInfo();
// //console.log(user);
//
// fs.appendFile("greatting.txt",`Hello ${user.username}! you are ${notes.age}`,function(err) {
//   if(err){
//     console.log("Error "+err);
//   }
// });*/
