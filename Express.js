var exp=require('express');
var bp=require('body-parser');
var app=exp();


app.use(bp.urlencoded({extended: false}));

app.listen(9000,function(){
	console.log("Sever Started on 9000");
});



app.get('/index',function(req,res){
	res.sendFile(__dirname+"/index.html");

});




app.get('*',function(req,res){

res.send("Invalid URL");

});