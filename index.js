var express = require('express')
 var app = express()
  

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

 // The code below will display 'Hello World!' to the browser when you go to http://localhost:3000
 app.get('/', function (req, res) {
   res.send('Hello World!')
 })
  
 app.listen(3000, function () {
   console.log('Example app listening on port 3000!')
 })

  
 module.exports = app;
  