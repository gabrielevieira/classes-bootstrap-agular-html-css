var Aluno = /** @class */ (function () {
    function Aluno() {
    }
    Aluno.prototype.listar = function () {
        var msg = "Dados do Professor:\n        \nNota 1: " + this.nota1 + "\n        \nNota 2: " + this.nota2 + "\n        \nNome: " + this.nome + "\n        \nIdade: " + this.idade + "\n        \nCidade: " + this.cidade + "\n        \nEmail: " + this.email + "\n        \nTelefone: " + this.telefone;
        alert(msg);
    };
    return Aluno;
}());
