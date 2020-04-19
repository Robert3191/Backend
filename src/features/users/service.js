var User = require('../../models').User;
var Book = require('../../models').Book;

module.exports = class UsersService {
  constructor() {}

  async query() {
    return [{id: 3, name: "1984", author: "Orwell"}];
  }

  async get(id) {
    const foundUser = await User.findByPk(1);
    return foundUser;
  }

  async add(user) {
    return "Book created";
  }

  update() {
    return "Book updated";
  }

  delete(id) {
    return "Book deleted";
  }
}
