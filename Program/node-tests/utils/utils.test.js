const utils=require('./utils');

it('should add two number',()=>{
  var res=utils.add(10,10);
  if(res!==20){
    throw new Error(`Result should be 20 but ${res} got`);
  }
});

it('should square a number',()=>{
  var res=utils.square(2);
  if(res!==4){
      throw new Error(`Result should be 4 but ${res} got`);
  }
});
