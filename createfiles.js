// require file system module
var fs = require('fs');

// 1
//fs.appendFile() method appends specified content to a file. If file does not exist it is created
// fs.appendFile('mynewfile.txt', 'Hello content!',
// function (err) {
//     if (err) throw err;
//     console.log('Saved!')
// });

// 2
// method takes flag as arg2, applies flag to file. If no file exists it is created
// fs.open('mynewfile2.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('saved');
// });

// 3
// fs.writeFile('mynewfile3.txt', 'Hello content!', function(err) {
//     if (err) throw err;
//     console.log('Saved!');
// });