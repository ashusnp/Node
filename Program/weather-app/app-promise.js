
const yargs=require('yargs');
const axios=require('axios');
const saveweather=require('./saveweather');
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
  var saveObject={};
  var encodeAddress=encodeURIComponent(argv.address);
  var urlAddress=`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyC2Wf8xPQw_16jiKIYS8yYo2PEP6J3FgqE&address=${encodeAddress}`;
  axios.get(urlAddress).then((response)=>{
    //console.log(response.data)
    if(response.data.status=="ZERO_RESULTS"){
      throw new error("Unable to find that address");
    }
    var address=response.data.results[0].formatted_address;
    var lat=response.data.results[0].geometry.location.lat;
    var lng=response.data.results[0].geometry.location.lng;
    //console.log("Address ",address);
    saveObject.Address=address;
    var weatherUrl=`https://api.darksky.net/forecast/0bd2251f008d1449a5906f7e20fca341/${lat},${lng}`;
    return axios.get(weatherUrl);
  }).then((response)=>{
    //  console.log(`temp:${response.data.currently.temperature} apparentTemperature:${response.data.currently.apparentTemperature}`);
      saveObject.Temperature=response.data.currently.temperature;
      saveObject.apparentTemperature=response.data.currently.apparentTemperature;
    //  console.log("saveObject ",saveObject);
  var status=  saveweather.save(saveObject);
  if(status==true){
    console.log('save succesfully');
  }
  else{
      console.log('error occurd');
  }
  }).catch((error)=>{
    if(error.code==='ENOTFOUND'){
      console.log("Unable to connect server");
    }else{
      console.log(error);
    }

  });
