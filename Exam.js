var exp= require('express');
var app=exp();
var url= require('url')
var bp=require('body-parser');

app.use(express.static(path.join(__dirname,'public')));


app.use(bp.urlencoded({extended:false}))
app.listen(9000, function(req,res){console.log("server started")});

app.get('/getform',function(req,res)
{	
	res.sendFile(__dirname+"/ExamForm.html")
});


app.post('/getDataTable',function(req,res){
    var name=req.body.iname;
    console.log(name)
    var bdate=req.body.bdate;
    console.log(bdate)
    var email=req.body.email;
    console.log(email)
    var qualification=req.body.qualification;
    console.log(qualification)

    str="<table  border='1'>"
    str+="<tr><td> NAME </td><td>"+name+"</td></tr>"
    str+="<tr><td> BIRTHDATE </td><td>"+bdate+"</td></tr>"
    str+="<tr><td> EMAIL </td><td>"+email+"</td></tr>"
    str+="<tr><td> QUALIFICATION </td><td>"+qualification+"</td></tr>"
    str+="</table>"
    res.send(str);


})







app.all('*',function(req,res){
	res.send("invalid Url");
});