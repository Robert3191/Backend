var express = require('express');
var router = express.Router();

const BooksService = require('./service');
const booksService = new BooksService();

/* GET books listing. */
router.get('/', function(req, res, next) {
  console.log("================================================================================");
  booksService.query()
  .then(books => res.status(200).send(books))
  .catch(error => res.status(400).send(error));
});

/* GET book. */
router.get('/:id', function(req, res, next) {
  booksService.get(req.params.id)
  .then(book => res.status(200).send(book))
  .catch(error => res.status(400).send(error));
});

/* POST add book. */
router.post('/', function(req, res, next) {
  booksService.add(req.body)
  .then(book => res.status(201).send(book))
  .catch(error => res.status(400).send(error));
});

/* PUT edit book. */
router.put('/', function(req, res, next) {
  booksService.edit()
  .then(book => res.status(201).send(book))
  .catch(error => res.status(400).send(error));
});

/* DELETE edit book. */
router.delete('/:id', function(req, res, next) {
  booksService.delete()
  .then(book => res.status(201))
  .catch(error => res.status(400).send(error));
});

module.exports = router;
