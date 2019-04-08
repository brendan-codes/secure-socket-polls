let mongoose = require('mongoose'),
    cron = require('node-cron'),
    Poll = mongoose.model('Poll');


let CACHE = {
    yay: 0,
    nay: 0,
    overflow: 0
};

const LIMITS = {
    overflow: 255,
    schedule: '*/5 * * * *'
};

// let SocketController = class SocketController {
//     constructor(){

//     }




// }

module.exports = function(io){

    io.origins((origin, callback) => {
        if (origin !== 'https://foo.example.com') {
            return callback('origin not allowed', false);
        }
        callback(null, true);
    });

    io.on('connection', function(socket){

        console.log('somebody connected!')




        // if somebody can connect
            //

        socket.on('nay:vote', function(data){
            // update CACHE

            // broadcast immediately
            socket.broadcast.emit('nay:broadcast', {
                data: 0
            });

            // udpate overflow
            CACHE.overflow++;

            // check overflow
            checkOverflow();
        });

        socket.on('yay:vote', function(data){
            CACHE.overflow++;
            console.log("yay++");
            // update

            socket.broadcast.emit('yay:broadcast', {
                data: 0
            });
        });

    });

};

function checkOverflow(){
    if(CACHE.overflow > LIMITS.overflow){
        // save operation

        CACHE.overflow = 0;
    }
};

cron.schedule(LIMITS.schedule, () => {
    // five minute cron

    // save operation

    CACHE.overflow = 0;
});