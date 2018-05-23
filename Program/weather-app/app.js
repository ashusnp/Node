const request=require('request');

request({
  url:'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyC2Wf8xPQw_16jiKIYS8yYo2PEP6J3FgqE&address=%20443302%20lonar',
  json:true
},(error,response,body)=>{
  console.log(body);
});
