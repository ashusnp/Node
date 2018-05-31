const utils=require('./utils');
const expect=require('expect');

it('should add two number',()=>{
  var res=utils.add(10,10);
  expect(res).toBe(20).toBeA('number');//https://github.com/mjackson/expect
  // if(res!==20){
  //   throw new Error(`Result should be 20 but ${res} got`);
  // }
});

it('should square a number',()=>{
  var res=utils.square(2);
  expect(res).toBe(4).toBeA('number');
  // if(res!==4){
  //     throw new Error(`Result should be 4 but ${res} got`);
  // }
});
it('should expect some values',()=>{
//expect(112).toNotBe(12);//check for not equal values
//expect({name:'Ashish'}).toEqual({name:'Ashish'});//check for object to be equal
//expect([1,2,3]).toInclude(1);//check if array contains element;
//expect([1,2,3]).toExclude(1);//check if array not contains element
expect({name:'Ashish',age:24}).toInclude({age:24});//check if object match the value or not
});
it('check user fullname',()=>{
  var user=utils.setUser(user,"Ashish Sanap");
  //console.log(user);
expect(user).toEqual(
  {firstName:'Ashish',
  lastName:'Sanap'});
});
