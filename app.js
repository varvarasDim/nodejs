function sayHello(name) {
    console.log('Hello ' + name); //global scope
}
sayHello('Mitsos');


//setTimeout();
//clearTimeout();
//setInterval();
//clearInterval();

//What is a module??
/*var message = ''; <--- this is not defined in the global, it is a variable,
 their scope is to this File
global instead of window in node
global.setTimeout()

Avoid defining var and fucntions in the global scope, they need to be on another module

MODULE is at the core of node
A file is a module on its onw*/

console.log(module);

const Logger = require('./logger.js')
const logger = new Logger();
logger.log('message');


//Node wraps modules into a MODULE WRAPPER FUNCTION

const path = require('node:path'); 
var pathObj = path.parse(__filename);
console.log(pathObj);

const os = require('os');
var osObj = os.totalmem();
var osObj2 = os.freemem();
console.log(osObj);
console.log(osObj2);

const fs = require('fs');

const filesSync = fs.readdirSync('./');
console.log(filesSync);

fs.readdir('./', function(err, files){
    if (err) console.log(err);
    else console.log(files);
});

//arrow function => is an abreviation of a function

//Register a listener

logger.on('messageLogged', function(arg){ 
    console.log('Listener called', arg);
});

const http = require('http');
const server = http.createServer(function(req, res) {
    if (req.url == '/'){
        res.write('Hello world');
        res.end();
    }
    if (req.url == '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});
server.on('connection', (socket) => {
    console.log('New connection');
});
server.listen(3000);
console.log('Listening');












