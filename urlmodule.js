// splits a web address into readable parts

// require url module
var url = require('url');

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';

// parse returns url object with each part of address as props
var q = url.parse(adr, true);
console.log(q.host); //returns localhost:8080
console.log(q.pathname); //returns /default.htm
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query;
console.log(qdata.month); //returns an object: { year: 2017, month: 'february' }