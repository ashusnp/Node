console.log("Start");
const fs=require('fs');
const os=require('os');
const notes=require('./notes.js')
var res=notes.addNote();
console.log(res);

console.log('Result:', notes.add(9,-2));


// var user=os.userInfo();
// //console.log(user);
//
// fs.appendFile("greatting.txt",`Hello ${user.username}! you are ${notes.age}`,function(err) {
//   if(err){
//     console.log("Error "+err);
//   }
// });
