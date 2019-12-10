"use strict";
exports.__esModule = true;
var Carro = /** @class */ (function () {
    function Carro() {
    }
    // agora preciso de métodos específicos (GETTERS e SETTERS) para manipular meus atributos
    Carro.prototype.getPlaca = function () {
        return this.placa;
    };
    Carro.prototype.setPlaca = function (placa) {
        this.placa = placa;
    };
    Carro.prototype.getAno = function () {
        return this.ano;
    };
    Carro.prototype.setAno = function (ano) {
        if (ano < 1900 || ano > 2100) {
            console.log("Ei! Valor para o ano do carro e invalido");
        }
        else {
            this.ano = ano;
        }
    };
    Carro.prototype.getCor = function () {
        return this.cor;
    };
    Carro.prototype.setCor = function (cor) {
        this.cor = cor;
    };
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    Carro.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Carro.prototype.getLigado = function () {
        return this.ligado;
    };
    Carro.prototype.setLigado = function (ligado) {
        this.ligado = ligado;
    };
    Carro.prototype.ligar = function () {
        this.ligado = true;
        console.log("Agora vai " + this.modelo);
    };
    Carro.prototype.desligar = function () {
        this.ligado = false;
        console.log("Ja Elvis " + this.modelo + " vai funfar nao");
    };
    Carro.prototype.andar = function () {
        console.log("O carro " + this.modelo + " (" + this.placa + ") do ano " + this.ano + " ta andando...");
    };
    Carro.prototype.parar = function () {
        // mostrando mensagens usando expression languages
        if (this.ligado) {
            console.log("O carro " + this.modelo + " (" + this.placa + ") do ano " + this.ano + " acabou de parar!");
        }
        else {
            console.log("Nao da pra estacionar um carro desligado " + this.modelo);
        }
    };
    Carro.prototype.getInfo = function () {
        var info;
        info = "CARRO: " + this.modelo + " / " + this.ano + " / " + this.placa + " / " + this.cor + " / " + this.ligado;
        return info;
    };
    return Carro;
}());
exports.Carro = Carro;
