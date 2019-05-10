var showView01 = "Hello World!";
console.log(showView01);
var num01 = 7;
var num02 = 2;
var soma = num01 + num02;
var sub = num01 - num02;
var mult = num01 * num02;
var div = num01 / num02;
console.log("A soma de " + num01 + " + " + num02 + " = " + soma);
console.log("A Subtração de " + num01 + " - " + num02 + " = " + sub);
console.log("A Multiplicação de " + num01 + " x " + num02 + " = " + mult);
console.log("A Divisão de " + num01 + " / " + num02 + " = " + div);
var contador = 1;
while (contador <= 100) {
    console.log("Contando o numero " + contador);
    if (contador % 3 == 0) {
        console.log(contador + " Multiplo de 3!!");
    }
    contador += 1;
}
