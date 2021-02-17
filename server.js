const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/", function(req, res){
  res.render("index", {pageName: "Home", route:"/"});
});

app.listen(3000, function(){
  console.log("Server is running at port 3000");
});
