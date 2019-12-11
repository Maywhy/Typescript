import { Produtos } from "./Produtos";

var p1: Produtos
var p2: Produtos

p1 = new Produtos(13268, "Copo", "Copo de vidro temperado", 50, 1000, "link");
p2 = new Produtos(65465, "Lata de lixo", "Aço inox", 800, 5000, "link");

console.log(p1.getInfo());
console.log(p2.getInfo());