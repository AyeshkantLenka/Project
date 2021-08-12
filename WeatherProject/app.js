const express = require("express");
const bodyParser = require("body-parser")
const https = require("https");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
  const query = req.body.cityName;
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=b7bdb06ad5f57e88afa4a094162b61e9&units=metric";
  https.get(url,function(response){

    console.log(response.statusCode);
    response.on("data",function(data){

      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp
      const weatherDescription = weatherData.weather[0].description
      const icon = weatherData.weather[0].icon
      const imageURL = "https://api.openweathermap.org/img/wn/" + icon + "@2x.png"
      res.write("<h1>The temperature in " + query + " is :" + temp + "degree Celcius.</h1>")
      res.write("<p>The Weather particularly have " + weatherDescription + "in the atmosphere</p>")
      res.write("<img src = " + imageURL + ">")
      res.send()

    });

  });

});


app.listen(3000,function(){
  console.log("Server started and running at Port 3000");
});
