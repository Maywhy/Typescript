import { Pessoa } from "./Pessoa";

export class Aluno extends Pessoa {
    private curso: string;
    private anoMatricula: number;

    public setCurso(curso: string): void {
        this.curso = curso;
    }
    public getCurso(): string {
        return this.curso;
    }

    public setAnoMatricula(anoma: number): void {
        this.anoMatricula = anoma;
    }
    public getAnoMatricula(): number {
        return this.anoMatricula;
    }
}