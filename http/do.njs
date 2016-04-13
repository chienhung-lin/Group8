#!/usr/local/bin/node
/* enable apache to execute this Node.js programe */

fs = require('fs');

// students = JSON.parse(fs.readFileSync('name.js', 'utf8'))

querystring = require('querystring');

var param = querystring.parse(process.env.QUERY_STRING);

console.log('Content-type: text/html; charset=utf-8\n');

console.log('<h1>' + param['ID'] + '</h1>'); 
