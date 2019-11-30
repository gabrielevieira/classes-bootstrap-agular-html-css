
function soma(num1, num2) {
    let result = num1 + num2;    

    if (result > 100) {
        return result;
    }
}

let res = soma(100,10)

// If ternario  [comparacao] ? [resultado se verdadeira] : [resultado se falso]
console.log(res ? 'positivo' : 'negativo');

console.log(res ? res : '')