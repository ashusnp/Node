const request=require('request');

request({
  url:'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyC2Wf8xPQw_16jiKIYS8yYo2PEP6J3FgqE&address=%20443302%20lonar',
  json:true
},(error,response,body)=>{
  //console.log(JSON.stringify(body,undefined,2));
  console.log(`Address :${body.results[0].formatted_address}`);
  console.log(`lat :${body.results[0].geometry.location.lat}`);
    console.log(`lng :${body.results[0].geometry.location.lng}`);
});
