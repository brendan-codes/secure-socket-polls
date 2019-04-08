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


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    next();
});


require('./server/config/mongoose.js');
require('./server/config/redis-connect.js');
require('./server/config/routes.js')(app);

let server = app.listen(port, function(){
    console.log(`listening on ${port} for secure-sockets-poll`)
});

// socket export
let io = require('socket.io').listen(server);
app.io = io;
require(path.join(__dirname, "server/controllers/socket-controller.js"))(io);