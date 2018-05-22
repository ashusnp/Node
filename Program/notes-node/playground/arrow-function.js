var square=(x)=>{
  var x=x*x;
  return x;
}
console.log(square(9));
//2 way
var square1=x=>{
  var x=x*x;
  return x;
}
console.log(square1(9));
//3 way
var square2=x=>x*x;
console.log(square2(9));

var user={
  name:"Ahsish",
  sayHi:()=>{
    console.log(arguments);// also not accessable in arrow fun
    console.log(`Hi ${this.name}`);//this will not bound in arrow function
  },
  sayHiAlt(){
    console.log(arguments)
      console.log(`Hi ${this.name}`);
  }
}
user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);
