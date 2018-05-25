var asyncAdd=(a,b)=>{
  return new Promise((resolve,reject)=>{
    if(typeof a==='number' && typeof b==='number'){
      resolve(a+b);
    }
    else{
      reject('Arguments must be a number');
    }
  });
};

asyncAdd(3,5).then((res)=>{
  console.log('Result ',res)
  return asyncAdd(res,12);
}).then((res1)=>{
  console.log('Result 1 ',res1);
}).catch((errorMessage1)=>{
console.log(errorMessage1);
});

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
