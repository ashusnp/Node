var getUser=(id,callback)=>{
  var user={
    id,
    name:'Ashish'
  };
  setTimeout(()=>{
      callback(user);
  },2000)

};
getUser(31,(userObject)=>{
  console.log(userObject);
});
