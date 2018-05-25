somePromise=new Promise((resolve,reject)=>{
  setTimeout(()=>{
//    resolve('Hey I Am Promise');
  reject('Not able to preform promise');
  },2500)
});
somePromise.then((msg)=>{
  console.log(msg)
},(errorMessage)=>{
  console.log('Error :',errorMessage);
});
