console.log("Start");

setTimeout(()=>{
  console.log("In callback");
},2000);
setTimeout(()=>{
  console.log("In callback 2");
},0);
 console.log("Finished");
