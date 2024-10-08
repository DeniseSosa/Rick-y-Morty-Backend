require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY} = process.env;
const FavoriteModel = require ('./models/Favorite')
const UserModel= require('./models/User');

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
// const sequelize = new Sequelize(
//    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
//    { logging: false, native: false }
// );

const sequelize = new Sequelize(DB_DEPLOY,
   { logging: false, native: false }
);



// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
FavoriteModel(sequelize);
UserModel(sequelize);

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
 const { User, Favorite } = sequelize.models;
// Un usuario puede tener muchos favoritos
User.belongsToMany(Favorite,{through: 'user_favorite'});
// un mismo personaje puede ser favorito de muchos usuarios 
Favorite.belongsToMany(User,{through: 'user_favorite'});
// relacion n:m
module.exports = {
    User,
    Favorite,
   conn:sequelize,
};
