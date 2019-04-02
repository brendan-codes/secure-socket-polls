


module.exports = function(io){

    io.on('connection', function(socket){


        console.log('somebody connected!')



        socket.on('nay:vote', function(data){
            console.log("nay++");
            // update

            socket.broadcast.emit('nay:broadcast', {
                data: 0
            });
        });

        socket.on('yay:vote', function(data){
            console.log("yay++");
            // update

            socket.broadcast.emit('yay:broadcast', {
                data: 0
            });
        });


        // welcome to sockets

            // vote yay on poll
            // vote nay on poll

            // broadcast poll updates

            // fill buffer
            // buffer overflow control

    });

};