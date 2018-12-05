var express = require('express');
var router = express.Router();

var angryBirds = require('../modules/angry_birds');


router.get('/', function(request, response) {
    var bird = request.params.angryBirds;
    var mustacheVariables = {
        name: bird
    }


    response.render('./angry_birds/show', mustacheVariables);
})



module.exports = router;
