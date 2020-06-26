/* const os = require('os');
console.log(os.platform());
console.log(os.release());
console.log('fre mem: ', os.freemem(), ' bytes');
console.log('total mem: ', os.totalmem(), ' bytes'); */

/* const fs = require('fs');

fs.writeFile('./A.txt', 'Lieasss', function(err){
    if (err) {
        console.log(err)
    } console.log('Archivo CREADO')
});
console.log('ultima'); */


/* query 
const user = query('Select * FROM users')

query('Select * FROM users', function (err, users){
    if(err){
        console.log(err)
    }if(users){

    }
)) */

/* const fs = require('fs');
fs.readFile('./A.txt', function(err, data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
}) */

/* const http = require('http');
http.createServer(function(req, res){
        res.writeHead(200, {'content-type' : 'text/html'});
        res.writeHead(200, {'content-type' : 'text/plain'});
        res.writeHead(404, {'content-type' : 'text/plain'});
        res.write('simpletexto')
        res.end()
}).listen(3000); */

/* const http = require('http');
MODULO DE COLORES
const colors = require('colors');
MODULO DE COLORES
const handleServer = (function(req, res){
        res.writeHead(200, {'content-type' : 'text/plain'});
        res.write('<h1>HELLO WORLD</h1>')
        res.end()
})
http.createServer(handleServer).listen(3000);
const server = http.createServer(handleServer);
server.listen(3000,function(){
    console.log('server on port 3000'.yellow.bgWhite);
}); */

const express = require('express');
const colors = require('colors');
const server = express();
/*  */
server.get('/',function(req, res){
    res.send('<h1>EXPRESS & NODE </h1>');
    res.send;
})
server.listen(3000, ()=>{
    console.log('serber 3000'.red)
})