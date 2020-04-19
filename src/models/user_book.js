'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_Book = sequelize.define('User_Book', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    selfGranted: DataTypes.BOOLEAN
  }, { timestamps: false, freezeTableName: true });

  return User_Book
};
