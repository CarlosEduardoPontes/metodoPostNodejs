const express = require ('express');
const router = express.Router();
const ProdutoController = require('../controller/ProdutoController');

router.get('/criar', ProdutoController.viewForm)//EXIBIR O FORMULARIO
router.post('/criar', ProdutoController.salvarForm)
router.get('/sucesso', ProdutoController.sucesso);

module.exports= router;