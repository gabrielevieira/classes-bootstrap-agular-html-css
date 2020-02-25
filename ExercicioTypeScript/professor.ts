import { IPadrao } from "./padrao";

class Professor implements IPadrao {
    materia: string
    nome: string;
    idade: number;
    cidade: string;
    email: string;
    telefone: number;

    listar() {
        const msg = `Dados do Professor:
        \nMateria: ${this.materia}
        \nNome: ${this.nome}
        \nIdade: ${this.idade}
        \nCidade: ${this.cidade}
        \nEmail: ${this.email}
        \nTelefone: ${this.telefone}`

        alert(msg);
    }
}