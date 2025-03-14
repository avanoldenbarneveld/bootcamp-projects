'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    static associate(models) {

      Teacher.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
      });

      Teacher.hasMany(models.Student, {
        foreignKey: 'teacher_id',
        as: 'students',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Teacher.init(
    {
      dni: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date_of_birth: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Teacher',
    }
  );
  return Teacher;
};
