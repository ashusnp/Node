const express=require('express');
const hbs=require('hbs');


var app=express();
app.set('view engine','hbs');
//console.log(__dirname);
app.use(express.static(__dirname+'/public'));
app.get('/',(request,response)=>{
  //response.send("Hello world");
  // response.send({
  //   name:'Ashish',
  //   about:{
  //     age:24,
  //     job:'full stack developer'
  //   }
  // });

  response.render('home.hbs',{
    pageTitle:"Home",
    currentYear:new Date().getFullYear()
  })
});

app.get('/about',(request,response)=>{
//  response.send('<h1>About Page</h1>')
response.render('about.hbs',{
  pageTitle:'About',
  currentYear:new Date().getFullYear()
});
});

app.get('/bad',(request,response)=>{
  response.send({
    error:'bad request'
  });
});

app.listen(3000,()=>{
  console.log('Server started on port 3000');
});
