import { Pessoa } from "./Pessoa";

export class Professor extends Pessoa {
    private valorHora: number;
    private numHora: number;
    private areaFormacao: string;

    public setvalorHora(valHr: number): void {
        this.valorHora = valHr;
    }
    public getvalorHora(): number {
        return this.valorHora;
    }

    public setnumHora(numhr: number): void {
        this.numHora = numhr;
    }
    public getnumHora(): number {
        return this.numHora;
    }

    public setareaFormacao(areafor: string): void {
        this.areaFormacao = areafor;
    }
    public getareaFormacao(): string {
        return this.areaFormacao;
    }
}