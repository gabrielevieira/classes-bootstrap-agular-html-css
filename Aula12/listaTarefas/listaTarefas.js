// Array
// push = adciona um valor no array
// remove = remove um valor no array
// sort = ordenação dos objetos dentro do array 

var listaArray = [];

function add() {
    const input = document.getElementById("tarefa");
    listaArray.push(input.value);
    input.value = "";
    input.focus();
}

function mostrar() {
    document.getElementById('exibirLista').innerHTML = "";
    listaArray.forEach(tarefa => {
        const p = `<p>${tarefa}</p>`
        document.getElementById('exibirLista').insertAdjacentHTML('afterend', p);
    });
}
