let router = require('express').Router();
let pagesController = require('../controllers/PagesController');

router.get('/', pagesController.homepage);

router.get('/acerca', pagesController.about);

router.get('/beto', pagesController.beto);

router.post('/create', pagesController.postCreate);

router.get('/create', pagesController.getCreate);

router.get('/products/:id', pagesController.retrieve);

router.get('/products/:id/edit', pagesController.getEdit);

router.post('/products/:id/edit', pagesController.postEdit);

router.post('/delete', pagesController.delete);

router.get('*', pagesController.notFound);

module.exports = router;