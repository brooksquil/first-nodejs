// require file system module
var fs = require('fs');

//adds text to end of file
// fs.appendFile('mynewfile1.txt', ' This is my text', function (err) {
//     if (err) throw err;
//     console.log('updated');
// });

//replace content of file
// fs.writeFile('mynewfile1.txt', 'This is my text now!', function (err) {
//     if (err) throw err;
//     console.log('Replaced');
// });

// delete file
// fs.unlink('mynewfile2.txt', function (err) {
//     if (err) throw err;
//     console.log('file deleted');
// });

//rename file
fs.rename('mynewfile3.txt', 'renamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
});