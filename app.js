var express = require("express");
var app = express();
var bodyParser = require("body-parser");
// NOT 100% I KNOW WHAT THIS DOES
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
  {name: "Salmon Creek", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104497f0c87da3e4b5b0_340.jpg"},
  {name: "Tuna Creek", image: "https://pixabay.com/get/eb30b90821f6073ed1584d05fb1d4e97e07ee3d21cac104497f0c87da3e4b1b8_340.jpg"},
  {name: "Potato Creek", image: "https://pixabay.com/get/eb30b60c2cf2043ed1584d05fb1d4e97e07ee3d21cac104497f0c87da3e4b1b8_340.jpg"},
  {name: "Salmon Creek", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104497f0c87da3e4b5b0_340.jpg"},
  {name: "Tuna Creek", image: "https://pixabay.com/get/eb30b90821f6073ed1584d05fb1d4e97e07ee3d21cac104497f0c87da3e4b1b8_340.jpg"},
  {name: "Potato Creek", image: "https://pixabay.com/get/eb30b60c2cf2043ed1584d05fb1d4e97e07ee3d21cac104497f0c87da3e4b1b8_340.jpg"},
  {name: "Salmon Creek", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104497f0c87da3e4b5b0_340.jpg"},
  {name: "Tuna Creek", image: "https://pixabay.com/get/eb30b90821f6073ed1584d05fb1d4e97e07ee3d21cac104497f0c87da3e4b1b8_340.jpg"},
  {name: "Potato Creek", image: "https://pixabay.com/get/eb30b60c2cf2043ed1584d05fb1d4e97e07ee3d21cac104497f0c87da3e4b1b8_340.jpg"}
]

app.get("/", function(req, res ){
  res.render("landing");
});

app.get("/campgrounds", function(req, res){
  res.render("campgrounds", {campgrounds:campgrounds});
})

app.post("/campgrounds", function(req, res){
  var name = req.body.name;
  var image =req.body.image;
  var newCampgrounds = {name: name, image: image}

  campgrounds.push(newCampgrounds);
  res.redirect("/campgrounds");
})

app.get("/campgrounds/new", function(req, res) {
  res.render("new");
});











app.listen(3000, function(){
  console.log("server has started...");
});
