const express=require('express');


var app=express();

app.get('/',(request,response)=>{
  //response.send("Hello world");
  response.send({
    name:'Ashish',
    about:{
      age:24,
      job:'full stack developer'
    }
  });
});

app.get('/about',(request,response)=>{
  response.send('<h1>About Page</h1>')
});

app.get('/bad',(request,response)=>{
  response.send({
    error:'bad request'
  });
});

app.listen(3000);
