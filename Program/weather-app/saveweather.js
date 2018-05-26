const fs=require('fs');

var save=(obj)=>{
  var arrayObj=[];
var  arrayObj=readWeatherData();
//  console.log(typeof arrayObj);
  arrayObj.push(obj);
  //  console.log(typeof arrayObj);
    //console.log(arrayObj);
  fs.writeFileSync('weather-data.json',JSON.stringify(arrayObj));
  return true;
}

function readWeatherData(){
  try{
    var data=fs.readFileSync('weather-data.json');
    console.log('data ',JSON.parse(data));;
    return JSON.parse(data);
  }
  catch(e){
    return [];
  }

}

module.exports.save=save;
