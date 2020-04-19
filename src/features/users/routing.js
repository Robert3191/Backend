var express = require('express');
var router = express.Router();

const UsersService = require('./service');
const usersService = new UsersService();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(usersService.query());
});

/* GET user. */
router.get('/:id', function(req, res, next) {
  res.send(usersService.get(req.params.id));
});

/* POST add user. */
router.post('/', function(req, res, next) {
  res.send(usersService.add(req.body));
});

/* PUT edit user. */
router.put('/', function(req, res, next) {
  res.send(usersService.edit());
});

/* DELETE delete book. */
router.delete('/:id', function(req, res, next) {
  res.send(usersService.delete());
});

module.exports = router;
