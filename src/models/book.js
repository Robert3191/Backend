'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    authors: DataTypes.ARRAY(DataTypes.STRING),
    description: DataTypes.TEXT,
    coverImgUrl: DataTypes.STRING,
    publishedBy: DataTypes.STRING,
    publishedIn: DataTypes.STRING,
    totalPages: DataTypes.INTEGER,
    categories:DataTypes.STRING,
    rating: DataTypes.INTEGER,
    ratingCount: DataTypes.INTEGER,
    favorite: DataTypes.BOOLEAN,
    formats:DataTypes.STRING,
    state: DataTypes.STRING,
    currentReadingPage: DataTypes.INTEGER

  }, { freezeTableName: true});
  Book.associate = function(models) {
    // associations can be defined here
    Book.belongsToMany(models.User, {
      through: models.User_Book,
      foreignKey: 'bookId',
      as: 'users',
  });
  };
  return Book;
};
