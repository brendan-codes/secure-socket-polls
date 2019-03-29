const path = require('path'),
      bodyParser = require('body-parser'),
      express = require('express'),
      path = require('path'),
      port = 8001;


let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


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
require(path.join(__dirname, "/controller/socket-controller.js"))(io);