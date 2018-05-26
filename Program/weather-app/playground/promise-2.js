const request=require('request');

var gecodeAddress=(Address)=>{
      return new Promise ((resolve,reject)=>{
        request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyC2Wf8xPQw_16jiKIYS8yYo2PEP6J3FgqE&address=${Address}`,
        json:true
      },(error,response,body)=>{
        if(error){
          reject("Not able to connect");
        }
        else if(body.status==='ZERO_RESULTS')
        {
          reject('address does not exists');
        }
        else if(body.status==='OK'){

          resolve({
            address:body.results[0].formatted_address,
            lat:body.results[0].geometry.location.lat,
            lng:body.results[0].geometry.location.lng
          });
      };
    });
  });
}
gecodeAddress('443302').then((location)=>{
  console.log(JSON.stringify(location,undefined,2));
},(errorMessage)=>{
console.log(errorMessage);
});
