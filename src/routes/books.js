var express = require('express');
var router = express.Router();
var User = require('../models').User;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  const body = {email: "raut.robert91@gmail.com", password: "password", name: "Raut", surname: "Robert"};

//create a user
User.create(body).then((res) => console.log(res));

  res.send("Created");
});

module.exports = router;
