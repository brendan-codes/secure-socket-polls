let mongoose = require('mongoose'),
    cron = require('node-cron'),
    Poll = mongoose.model('Poll');


let TOTALS = {
    yay: 0,
    nay: 0,
    overflow: 0
};

const LIMITS = {
    overflow: 255,
    schedule: '*/5 * * * *'
};

module.exports = function(io){

    io.on('connection', function(socket){

        console.log('somebody connected!')

        socket.on('nay:vote', function(data){
            // update totals

            // broadcast immediately
            socket.broadcast.emit('nay:broadcast', {
                data: 0
            });

            // udpate overflow
            TOTALS.overflow++;

            // check overflow
            checkOverflow();
        });

        socket.on('yay:vote', function(data){
            TOTALS.overflow++;
            console.log("yay++");
            // update

            socket.broadcast.emit('yay:broadcast', {
                data: 0
            });
        });

    });

};

function checkOverflow(){
    if(TOTALS.overflow > LIMITS.overflow){
        // save operation

        TOTALS.overflow = 0;
    }
};

cron.schedule(LIMITS.schedule, () => {
    // five minute cron

    // save operation

    TOTALS.overflow = 0;
});