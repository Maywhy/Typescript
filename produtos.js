"use strict";
exports.__esModule = true;
var Produtos = /** @class */ (function () {
    function Produtos(_co, _no, _de, _pr, _es, _li) {
        this.codigo = _co;
        this.nome = _no;
        this.detalhes = _de;
        this.preco = _pr;
        this.estoque = _es;
        this.linkFoto = _li;
    }
    Produtos.prototype.getCodigo = function () {
        return this.codigo;
    };
    Produtos.prototype.setCodigo = function (_co) {
        this.codigo = _co;
    };
    Produtos.prototype.getNome = function () {
        return this.nome;
    };
    Produtos.prototype.setNome = function (_no) {
        this.nome = _no;
    };
    Produtos.prototype.getDetalhes = function () {
        return this.detalhes;
    };
    Produtos.prototype.setDetalhes = function (_de) {
        this.detalhes = _de;
    };
    Produtos.prototype.getPreco = function () {
        return this.preco;
    };
    Produtos.prototype.setPreco = function (_pr) {
        this.preco = _pr;
    };
    Produtos.prototype.getEstoque = function () {
        return this.estoque;
    };
    Produtos.prototype.setEstoque = function (_es) {
        this.estoque = _es;
    };
    Produtos.prototype.getLinkFoto = function () {
        return this.linkFoto;
    };
    Produtos.prototype.setLinkFoto = function (_li) {
        this.linkFoto = _li;
    };
    Produtos.prototype.getInfo = function () {
        var info;
        info = "PRODUTOS: " + this.codigo + " / " + this.nome + " / " + this.detalhes + " / " + this.preco + " / " + this.estoque + " / " + this.linkFoto;
        return info;
    };
    return Produtos;
}());
exports.Produtos = Produtos;
