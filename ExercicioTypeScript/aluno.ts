import { IPadrao } from "./padrao"

class Aluno implements IPadrao {
    nota1: number
    nota2: number
    nome: string
    idade: number
    cidade: string
    email: string
    telefone: number

    listar() {
        const msg = `Dados do Professor:
        \nNota 1: ${this.nota1}
        \nNota 2: ${this.nota2}
        \nNome: ${this.nome}
        \nIdade: ${this.idade}
        \nCidade: ${this.cidade}
        \nEmail: ${this.email}
        \nTelefone: ${this.telefone}`

        alert(msg);
    }
}