var url = 'http://mygger.io/log';
const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(message){
        //Send an http request
        console.log(message);
        // THe following exist in any module
        console.log(__filename);
        console.log(__dirname);
    
    
        //Raise an event , the order is important between the on and the emit
        this.emit('messageLogged', {ud:1 , url: 'http://'});
    }
}


//The above need to be exported in order to be used by another module
module.exports = Logger;
