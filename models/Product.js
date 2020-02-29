// models/Product.js
// Obtiene la conexión con la base de datos
const knex = require('../database/connection');

// Crea un nuevo Producto (pero no lo almacena en la base)
exports.factory = (name, description, price) => {
    return {
        name: name,
        description: description,
        price: price
    }
}

// Obtiene todos los productos en la base
exports.all = () => {
    // Realiza la consulta dentro de knex
    return knex
        .select('*')
        .from('products');
}

// Create
exports.create = (name, description, price) => {
    return knex('products')
        .insert(
            {'name': name,
            'description': description,
            'price': price});
}

// Retrieve
exports.retrieve = (id) => {
    return knex('products')
        .select('*')
        .where('id', id)
        .first();
}

exports.update = (id, name, desc, price) => {
    return knex('products')
        .where('id', id)
        .update({
            'name' : name,
            'description' : desc,
            'price' : price,
            thisKeyIsSkipped : undefined
        });
}

exports.delete = (id) => {
    return knex('products')
        .where('id', id)
        .del();
}