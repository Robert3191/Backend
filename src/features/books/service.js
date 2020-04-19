const User = require('../../models').User;
const Book = require('../../models').Book;

const UsersService = require('../users/service');
const usersService = new UsersService();

module.exports = class BooksService {
  constructor() {}

 query() {
    return Book.findAll();
  }

 get(id) {
    return Book.findByPk(id);
  }

 async add(book) {
    var bookRaw = {
      title: '1984',
      subtitle: '',
      authors: ['Orwell'],
      description: 'Book description',
      coverImgUrl:'',
      publishedBy: 'Publisher',
      publishedIn: '2010',
      totalPages: 300,
      categories: null,
      rating: 5,
      ratingCount: 1000,
      favorite: true,
      formats: null,
      state: 'IN_PROGRESS',
      currentReadingPage: 250,
    };

    const user = await usersService.get(1);
    const newBook = await this.persistBook(bookRaw);

    await user.addBook(newBook, { through: { selfGranted: false } });

    return newBook;
  }

 update(book) {
   return Book.update(book);
 }

 delete(id) {
    return Book.destroy();
  }

  async persistBook(book) {
    const createdBook = await Book.create(book);
    return createdBook;
  }
}
