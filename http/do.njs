#!/usr/local/bin/node
/* enable apache to execute this Node.js programe */

fs = require('fs');

// students = JSON.parse(fs.readFileSync('name.js', 'utf8'))

querystring = require('querystring');



var param = querystring.parse(process.env.QUERY_STRING);

var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('name.json', 'utf8'));

console.log('Content-type: text/html; charset=utf-8\n');

console.log('<h1>' + obj[param['name']] + '</h1>'); 
