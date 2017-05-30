var express = require('express');
var path = require('path');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
var fa = require('fs');\
var port = 8080;

var url = "http://www.indeed.com/cmp/Fuze"

request(url, function(err, resp, body){
  var $ cheerio.load(body);
  //var companyName =$('.company');
  // var companyNameText = companyName.text();

  $(.company).filter(function(){
     var companyName = $(this);
     companyNameText = companyName.text();
  })
  console.log(job); 
})


app.listen(port);
console.log('server running on' + port);
