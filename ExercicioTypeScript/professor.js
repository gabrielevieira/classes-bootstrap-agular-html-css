var Professor = /** @class */ (function () {
    function Professor() {
    }
    Professor.prototype.listar = function () {
        var msg = "Dados do Professor:\n        \nMateria: " + this.materia + "\n        \nNome: " + this.nome + "\n        \nIdade: " + this.idade + "\n        \nCidade: " + this.cidade + "\n        \nEmail: " + this.email + "\n        \nTelefone: " + this.telefone;
        alert(msg);
    };
    return Professor;
}());
