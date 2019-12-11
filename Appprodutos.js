"use strict";
exports.__esModule = true;
var Produtos_1 = require("./Produtos");
var p1;
var p2;
p1 = new Produtos_1.Produtos(13268, "Copo", "Copo de vidro temperado", 50, 1000, "link");
p2 = new Produtos_1.Produtos(65465, "Lata de lixo", "Aço inox", 800, 5000, "link");
console.log(p1.getInfo());
console.log(p2.getInfo());
