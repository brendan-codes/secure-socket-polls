var connectionOptions =  {
    "force new connection" : true,
    "reconnectionAttempts": "Infinity",
    "timeout" : 10000,
    "transports" : ["websocket"]
};

let socket = io.connect('localhost:8001', connectionOptions);

// let socket = io.connect('*', {transports: ['websocket', 'polling', 'flashsocket']});

let totals = {
    yay: 0,
    nay: 0
};

let app = new Vue({
    el: '#app',
    data: {
        data: totals
    },
    methods: {
        nay: function(){
            console.log('nay');
            totals.nay++;
            socket.emit('nay:vote', {
                data: "naaaay"
            })
        },
        yay: function(){
            console.log('yay');
            totals.yay++;
            socket.emit('yay:vote', {
                data: "yaaay"
            })
        }
    }
});

socket.on('yay:broadcast', function(data){
    console.log('yay broadcast!');
    // totals.yay = data.yay;
})


socket.on('nay:broadcast', function(data){
    console.log('yay broadcast!');
    // totals.nay = data.nay;
})

