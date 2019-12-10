export class Carro {
    private placa: string;
    private ano: number;
    private cor: string;
    private modelo: string;
    private ligado: boolean;


    // agora preciso de métodos específicos (GETTERS e SETTERS) para manipular meus atributos

    public getPlaca(): string {
        return this.placa;
    }

    public setPlaca(placa: string): void {
        this.placa = placa;
    }

    public getAno(): number {
        return this.ano;
    }

    public setAno(ano: number): void {
        if (ano < 1900 || ano > 2100) {
            console.log("Ei! Valor para o ano do carro e invalido");
        }
        else {
            this.ano = ano;
        }
    }

    public getCor(): string {
        return this.cor;
    }

    public setCor(cor: string): void {
        this.cor = cor;
    }

    public getModelo(): string {
        return this.modelo;
    }
    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }
    public getLigado(): boolean {
        return this.ligado;
    }
    public setLigado(ligado: boolean): void {
        this.ligado = ligado;
    }

    public ligar(): void {
        this.ligado = true;
        console.log(`Agora vai ${this.modelo}`);
    }
    public desligar(): void {
        this.ligado = false;
        console.log(`Ja Elvis ${this.modelo} vai funfar nao`);
    }

    public andar(): void {
        console.log("O carro " + this.modelo + " (" + this.placa + ") do ano " + this.ano + " ta andando...");
    }

    public parar(): void {
        // mostrando mensagens usando expression languages
        if (this.ligado) {
            console.log(`O carro ${this.modelo} (${this.placa}) do ano ${this.ano} acabou de parar!`);
        }
        else {
            console.log(`Nao da pra estacionar um carro desligado ${this.modelo}`);
        }
    }

    public getInfo(): string {
        var info: string;
        info = `CARRO: ${this.modelo} / ${this.ano} / ${this.placa} / ${this.cor} / ${this.ligado}`;
        return info;
    }

}