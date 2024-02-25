const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // En Mayúsculas y singular      // en minúsculas y singular
const Users = sequelize.define('users', {
    // Definimos las columnas aquí
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(50),
        allowNull: false
        // allowNull por defecto esta en true
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
        // allowNull por defecto esta en true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
        // allowNull por defecto esta en true
    },
    birthday: {
        type: DataTypes.INTEGER,
        allowNull: false
        // allowNull por defecto esta en true
    }
});

module.exports = Users;