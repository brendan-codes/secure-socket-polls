const webController = require('../controllers/web-controller.js');

module.exports = function(app){

    app.get('/', webController.index);

    app.get('/about', function(req, res){
        res.send('<h1>about</h1>')
    })

    app.get('/hall-of-fame', function(req, res){
        res.send('<h1>hall-of-fame</h1>')
    })
};