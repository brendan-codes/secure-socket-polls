const path = require('path'),
      bodyParser = require('body-parser'),
      express = require('express'),
      port = 8001;


let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

// db init goes here
// routes go here

let server = app.listen(port, function(){
    console.log(`listening on ${port} for secure-sockets-poll`)
});

// socket-io export
// let io = require('socket.io')(server);