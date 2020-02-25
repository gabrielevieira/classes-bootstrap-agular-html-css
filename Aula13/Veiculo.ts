export class Veiculo {
    constructor(protected fabricante: string, protected modelo: string, protected cor: string,
        protected ano: number) { }

    correr() {
        throw new Error("Method not implemented.");
    }

    parar() {
        throw new Error("Method not implemented.");
    }
}
