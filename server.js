const path = require('path'),
      bodyParser = require('body-parser'),
      express = require('express'),
      port = 8001;


let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/client/static')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './client/views'));


require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

let server = app.listen(port, function(){
    console.log(`listening on ${port} for secure-sockets-poll`)
});

// socket export
let io = require('socket.io')(server);
app.io = io;
require(path.join(__dirname, "server/controllers/socket-controller.js"))(io);