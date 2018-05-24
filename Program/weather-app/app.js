const request=require('request');
const yargs=require('yargs');
const argv=yargs
          .options({
            a:{
              demand:true,
              alias:'address',
              describe:'address to fetch weather',
              string:true
            }
          })
          .help()
          .alias('help','h')
          .argv;

      console.log('argv ',argv.a);

  const url=encodeURIComponent(argv.a);

request({
  url:`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyC2Wf8xPQw_16jiKIYS8yYo2PEP6J3FgqE&address=${url}`,
  json:true
},(error,response,body)=>{
  if(error){
    console.log("Not able to connect");
  }
  else if(body.status==='ZERO_RESULTS')
  {
    console.log('address does not exists');
  }
  else if(body.status==='OK'){
    //console.log(JSON.stringify(body,undefined,2));
  console.log(`Address :${body.results[0].formatted_address}`);
  console.log(`lat :${body.results[0].geometry.location.lat}`);
  console.log(`lng :${body.results[0].geometry.location.lng}`);
}

});
