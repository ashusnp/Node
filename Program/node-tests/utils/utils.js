module.exports.add=(a,b)=>{
  return a+b;
}
module.exports.asyncAdd=(a,b,callback)=>{
  setTimeout(()=>{
    callback(a+b);
  },1000);
};
module.exports.square=(x)=>x*x
module.exports.setUser=(user,fullName)=>{
  var arr=fullName.split(" ");
  //console.log(arr);
  user={};
  user.firstName=arr[0];
  user.lastName=arr[1];
  return user;
}
