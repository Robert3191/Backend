'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, { freezeTableName: true});
  User.associate = function(models) {
    // associations can be defined here
      User.belongsToMany(models.Book, {
        through: models.User_Book,
        foreignKey: 'userId',
        as: 'books',
    });
  };
  return User;
};
