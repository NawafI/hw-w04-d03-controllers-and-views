
var express = require('express');
var mustache = require('mustache-express');


var port = 3000;

var app = express();

app.engine('html', mustache());

app.set('view engine', 'html');

app.set('views', __dirname + '/views');

var birdsCo = require('./controllers/angry_birds_controller');






app.use('/angry_birds', birdsCo );









app.get('/', function(request, response){
  response.send('This is my hw-w04d03.')
})


app.listen(port, function () {
    console.log(`App is listening on port ${port}`);
  })