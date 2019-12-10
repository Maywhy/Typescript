import { Carro } from "./Carro";

let c1: Carro;      // aqui apenas declarei uma "referencia" a um carro, preciso criar o objeto
c1 = new Carro();   // agora sim, aloquei (reservei) memória para armazenar as coisas

let c2: Carro;
c2 = new Carro();

// vamos preencher os dados
c1.setPlaca("ABC1234");
c1.setAno(1968);
c1.setCor("preto");
c1.setModelo("Fuscao Neuvouso");
c1.setLigado(false);

c2.setPlaca("EUA2019");
c2.setAno(2019);
c2.setCor("preto");
c2.setModelo("Tesla");
c2.setLigado(false);


// vamos manipular o carro com suas operações
console.log("--- Inicio da execucao ---");
console.log(c1.getInfo());
console.log(c2.getInfo());

c1.andar();
c1.parar();

console.log("");

c2.ligar();
c2.andar();
c2.parar();
c2.desligar();

console.log(c1.getInfo());
console.log(c2.getInfo());
console.log("--- Fim da execucao ---");