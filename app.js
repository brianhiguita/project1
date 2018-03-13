var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res ){
  res.render("landing");
});

app.get("/campgrounds", function(req, res){

  var campgrounds = [
    {name: "Salmon Creek", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104497f0c87da3e4b5b0_340.jpg"},
    {name: "Tuna Creek", image: "https://pixabay.com/get/eb30b90821f6073ed1584d05fb1d4e97e07ee3d21cac104497f0c87da3e4b1b8_340.jpg"},
    {name: "Potato Creek", image: "https://pixabay.com/get/eb30b60c2cf2043ed1584d05fb1d4e97e07ee3d21cac104497f0c87da3e4b1b8_340.jpg"}
  ]

  res.render("campgrounds", {campgrounds:campgrounds});

})











app.listen(3000, function(){
  console.log("server has started...");
});
