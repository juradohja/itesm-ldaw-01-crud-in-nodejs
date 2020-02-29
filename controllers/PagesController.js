// controllers/PagesController.js
// Importa el modelo de productos
let ProductModel = require('../models/Product')

exports.homepage = (req, res) => {
    // Nota que la consulta a los productos utiliza "promesas"
    // conoce más en:
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise
    ProductModel.all()
        .then((data) => {
            // Guardamos los productos en una variable
            let products = data;
            // Enviamos los datos a la vista
            res.render('pages/homepage', { products: products });
        });
}

exports.about = (req, res) => {
    res.send('About');
}

exports.beto = (req, res) => {
    res.send("Beto");
}

exports.notFound = (req, res) => {
    res.send("Not Found");
}

exports.getCreate = (req, res) => {
    res.render('pages/create', {action : '/create', submitValue : 'Add'});
}

exports.postCreate = (req, res) => {
    ProductModel.create(req.body.name, req.body.desc, req.body.price)
        .then( () => {
            res.redirect('/');
        });
}

exports.retrieve = (req, res) => {
    ProductModel.retrieve(req.params.id)
        .then((data) => {
            let product = data;
           res.render('pages/product', {product : product})
        });
}

exports.getEdit = (req, res) => {
    ProductModel.retrieve(req.params.id)
        .then((data) => {
            let product = data;
            res.render('pages/create',
                {product : product, action : "/products/"+ req.params.id +"/edit/", submitValue : 'Save'})
        });
}

exports.postEdit = (req, res) => {
    ProductModel.update(req.params.id, req.body.name, req.body.desc, req.body.price)
        .then(() => {
           res.redirect('/');
        });
}

exports.delete = (req, res) => {
    ProductModel.delete(req.body.id)
        .then(() => {
           res.redirect('/');
        });
}