import { Pessoa } from "./Pessoa";
import { Aluno } from "./Aluno";
import { Professor } from "./Professor";

var p: Pessoa;

p = new Pessoa();
p.setNumRegistro(12345);
p.setNome("Sebastian");
p.setEmail("sebastian@sebastian.com.br");
p.setTelefone("+55 11 98765-4321");

console.log(p);

var a: Aluno;

a = new Aluno();
a.setNumRegistro(54651);
a.setNome("Julia");
a.setEmail("julia@julia.com.br");
a.setTelefone("+55 11 98546-1654");
a.setCurso("Informatica");
a.setAnoMatricula(2019);

console.log(a);

var prof: Professor;

prof = new Professor();
prof.setNumRegistro(65424);
prof.setNome("Joaquim");
prof.setEmail("joaquim@joaquim.com.br");
prof.setTelefone("+55 11 98798-6562");
prof.setvalorHora(50);
prof.setnumHora(8);
prof.setareaFormacao("Informatica");

console.log(prof);
