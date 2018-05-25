
const yargs=require('yargs');
const gecode=require('./gecode/gecode');
const weather=require('./weather/weather');
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

      //console.log('argv ',argv.a);
gecode.getAddress(argv.a,(errorMessage,res)=>{
  if(errorMessage){
    console.log(errorMessage);
  }
  else{
    console.log(res.address);
    weather.getWeather(res.lat,res.lng,(errorMessage,resW)=>{
      if(errorMessage){
        console.log(errorMessage);
      }
      else{
        console.log(JSON.stringify(resW,undefined,2));
      }
    });

  }

});
