"use strict";
exports.__esModule = true;
var Pessoa_1 = require("./Pessoa");
var Aluno_1 = require("./Aluno");
var Professor_1 = require("./Professor");
var p;
p = new Pessoa_1.Pessoa();
p.setNumRegistro(12345);
p.setNome("Sebastian");
p.setEmail("sebastian@sebastian.com.br");
p.setTelefone("+55 11 98765-4321");
console.log(p);
var a;
a = new Aluno_1.Aluno();
a.setNumRegistro(54651);
a.setNome("Julia");
a.setEmail("julia@julia.com.br");
a.setTelefone("+55 11 98546-1654");
a.setCurso("Informatica");
a.setAnoMatricula(2019);
console.log(a);
var prof;
prof = new Professor_1.Professor();
prof.setNumRegistro(65424);
prof.setNome("Joaquim");
prof.setEmail("joaquim@joaquim.com.br");
prof.setTelefone("+55 11 98798-6562");
prof.setvalorHora(50);
prof.setnumHora(8);
prof.setareaFormacao("Geral");
console.log(prof);