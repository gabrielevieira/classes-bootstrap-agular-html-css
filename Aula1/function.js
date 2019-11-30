function soma(num1, num2) {
    return num1 + num2;    
}

var result = soma(10,17)

console.log('Resultado ' + result);
console.log( 5 + result );

//uma forma de fazer o forEach
['a', 'b', 'c'].forEach(value => console.log('ES6:' + value));

//outra forma de fazer o forEach
['a', 'b', 'c'].forEach(function(value){
    console.log('Old:' + value)});