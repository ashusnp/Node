const request=require('request');

var getWeather=(lat,lng,callback)=>{
  request({
    url:`https://api.darksky.net/forecast/0bd2251f008d1449a5906f7e20fca341/${lat},${lng}`,
    json:true
  },(error,response,body)=>{
  //console.log(body);
     if(!error && response.statusCode===200)
    {
      callback(undefined,{
        temp:body.currently.temperature,
      apparentTemperature:body.currently.apparentTemperature
    });
      //  console.log(JSON.stringify(body.currently.temperature,undefined,2));
    }
    else{
      callback('Not able to fetch weather');
    }


  });
};

module.exports.getWeather=getWeather;
