console.log("Start");
const fs=require('fs');
const os=require('os');

var user=os.userInfo();
//console.log(user);

fs.appendFile("greatting.txt",`Hello ${user.username}!`,function(err) {
  if(err){
    console.log("Error "+err);
  }
});
