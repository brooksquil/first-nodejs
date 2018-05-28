// require file system module
var fs = require('fs');

//adds text to end of file
// fs.appendFile('mynewfile1.text', ' This is my text', function (err) {
//     if (err) throw err;
//     console.log('updated');
// });

//replace content of file
fs.writeFile('mynewfile1.txt', 'This is my text now!', function (err) {
    if (err) throw err;
    console.log('Replaced');
});