//jshint esversion:6

const express = require("express");
const app = express();

app.get("/",function(req,res){
  res.send("<h1>Hello World!</h1>");
});

app.get("/about",function(req,res){
  res.send("<h1>My Name is Ayeshkant Lenka</h1><br>I am pursing my B.tech carrier at Trident");
});

app.get("/contacts",function(req,res){
  res.send("<h1>Contact on phone:28733892983</h1>");
});

app.listen(3000, function(){
  console.log("Server Started!!");
});
