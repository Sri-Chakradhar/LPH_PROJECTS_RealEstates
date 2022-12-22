let express = require("express");
const path = require("path");
const bodypasser = require("body-parser");


let app = express();

app.use(bodypasser.urlencoded({extended:true}));
app.use("/img",express.static("img"));
app.use("/css",express.static("css"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/login",(req,res)=>{
    res.sendFile(__dirname + "/html/login.html");
});

app.get("/houseandapartments",(req,res)=>{
    res.sendFile(__dirname + "/html/house&apartments.html");
});

app.get("/landandplots",(req,res)=>{
    res.sendFile(__dirname + "/html/land&plots.html");
});

app.listen(3000,()=>{
    console.log("3000 server");
})


