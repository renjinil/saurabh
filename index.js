var express = require('express');
var app = express();


var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public'))); 

var url= "mongodb://user:user@ds035663.mlab.com:35663/blogdb" ;
MongoClient.connect(url, function(err, db) {
 console.log("connect");
 var ucb=db.collection('blogdata');

   //signuppage

app.get('/success',function(req,res){
	var flag=0;
	var user=req.param('username');
	var pass=req.param('password');
var uc = db.collection('userdata');
  // uc.insert({name: user, password:pass}, function(err, result) {
  	uc.find({name: user}).toArray(function(err, docs) {
      console.log(docs.length);

      if(docs.length==0&&user!=null&&pass!=null){
      	  uc.insert({name: user, password:pass}, function(err, result) {
  	 	console.log("inserting");
  	 	res.sendFile(__dirname + '/success.html')
  	 });	
      }
      else{
      	console.log("already exist")
      	// 
      }

  })
  
});
//loggin page

app.post('/success', function(req, res) {
    var user = req.body.username;
    var pass = req.body.password;
	var uc=db.collection('userdata');
	   uc.find({name: user,password:pass}).toArray(function(err,docs) {
    	
    		if(docs.length==0){
           console.log("chek username");
    	}
    	else{
    		console.log("logged successfully");
    		res.sendFile(__dirname+"/success.html");
    	}
    }); 
});
//password setting
	 var userpas='';
	 	app.post('/cnfpass',function(req,res){
	userpas = req.body.user;
	var uc=db.collection('userdata');

	 uc.find({name: userpas}).toArray(function(err,docs) {
	 	if(docs.length!=0){

	 		var pwd = "<a href='http://localhost:3000/cnfpass/"
	 		 + userpas + "'>Click here</a>" 
	 		 console.log(pwd);
	 		res.send(pwd);

	 	}
	 	else{
	 		console.log("check user"); 
	 	}

	 });
}); 
	 app.get("/cnfpass/"+userpas+"",function(req,res){
	 	console.log(userpas);
	 	var uc=db.collection('userdata');
	 	res.sendFile(__dirname+"/cnfpass.html");
	 	
	 })
	 app.post('/cnfpass/login',function(req,res){
	 	var uc=db.collection('userdata');
	 	var newpas = req.body.passnew;
	 	var cnfpass = req.body.cnfpassword;
	 	console.log(newpas,cnfpass);
	 	if(newpas==cnfpass){
	 		uc.update({name:userpas}, {$set: {password:newpas}});
	 		res.sendFile(__dirname+"/login.html");
	 	}
	 	else{
	 		console.log("mismatch password");
	 	}
	 });
	 	app.get("/blogp", function (req, res) {
ucb.find().toArray(function(err,doc){
	
		res.send(doc);
	})

});

	 	 app.post('/home',function(req,res){
	 	 	var title1=req.body.title;
	 	 	var author1=req.body.author;
	 	 	var cont=req.body.txt;
	 	 	var date1=req.body.day;
	 	 	  ucb.insert({head: title1, content:cont,date:date1,author:author1}, function(err, result) {
	 	 	  res.sendFile(__dirname + '/home.html')
	 	 	  });
	 	 });

})

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
	    res.sendFile(__dirname + '/home.html');
});
app.get('/login',function(req,res){
	 res.sendFile(__dirname + '/login.html');
})
app.get('/signup',function(req,res){
	 res.sendFile(__dirname + '/signup.html');
	
})
app.get('/about',function(req,res){
	 res.sendFile(__dirname + '/about.html');
	
})
app.get('/reset',function(req,res){
	 res.sendFile(__dirname + '/reset.html');
})

app.get('/home',function(req,res){
	 res.sendFile(__dirname + '/home.html');
	
})
app.listen(3000);
