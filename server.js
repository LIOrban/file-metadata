var path=require("path");
var express=require("express");
var app=express();
var multer=require("multer");
var upload=multer();

app.use(express.static('public'));

app.get("/*", function(req,res){
    var indexHTML=path.join(__dirname,"/public/index.html");
    res.sendFile(indexHTML);
});

app.post("/upload", upload.single("filename"), function(req,res,next){
    if (req.file) {
        var size=req.file["size"];
        res.send({"size":size});
    }
});

app.listen(process.env.PORT || 8080);
