var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    QRS = require("./qrs");

try{
  var config = require('./config');
  if(config){
    for(var c in config){
      process.env[c] = config[c];
    }
  }
}
catch(err){
  //No configuration file found. Not an issue if deploying on heroku for example
}

process.env.appRoot = __dirname;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', express.static(__dirname+"/public"))

app.get('/', function(req, res){
  res.sendFile(__dirname+'/public/index.html');
});

app.get('/login', function(req, res){
  res.sendFile(__dirname+'/public/login.html');
});

app.post('/login', function(req, res){
  QRS.getTicket(req.body.username, function(err, ticket){
    if (err) {
      res.json(err)
    }
    else {
      res.redirect("https://"+process.env.SENSE_SERVER+":"+process.env.SENSE_PORT+"/"+process.env.SENSE_PROXY+"/hub?qlikTicket="+ticket.Ticket);
    }
  })
});

app.listen(3000, function(){
  console.log('listening on port 3000');
});
