const ProdutoController = {
    viewForm: (req,res)=>{
        return res.render('produto')
    },
    salvarForm: (req,res)=>{
        let { nomeProduto, precoProduto } = req.body;
        res.redirect('/produtos/sucesso');
    },
    sucesso: (req, res)=>{
        return res.render('sucesso')
    }
}
module.exports = ProdutoController;