const request=require('request');
var getAddress=(address,callback)=>{
  const url=encodeURIComponent(address);

  request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyC2Wf8xPQw_16jiKIYS8yYo2PEP6J3FgqE&address=${url}`,
    json:true
  },(error,response,body)=>{
    if(error){
      callback("Not able to connect");
    }
    else if(body.status==='ZERO_RESULTS')
    {
      callback('address does not exists');
    }
    else if(body.status==='OK'){
      callback(undefined,{
        address:body.results[0].formatted_address,
        lat:body.results[0].geometry.location.lat,
        lng:body.results[0].geometry.location.lng
      });
      //console.log(JSON.stringify(body,undefined,2));
  //  console.log(`Address :${body.results[0].formatted_address}`);
    //console.log(`lat :${body.results[0].geometry.location.lat}`);
    //console.log(`lng :${body.results[0].geometry.location.lng}`);
  }

  });
}

module.exports={
  getAddress
}
