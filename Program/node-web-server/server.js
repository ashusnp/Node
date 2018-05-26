const express=require('express');


var app=express();

//console.log(__dirname);
app.use(express.static(__dirname+'/public'));
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

app.listen(3000,()=>{
  console.log('Server started on port 3000');
});
