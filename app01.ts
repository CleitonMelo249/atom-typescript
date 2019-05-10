let showView01: string = "Hello World!";
console.log(showView01);

let num01: number = 7;
let num02: number = 2;

let soma: number = num01 + num02;
let sub: number = num01 - num02;
let mult: number = num01 * num02;
let div: number = num01 / num02;

console.log("A soma de " + num01 + " + " + num02 + " = " + soma);
console.log("A Subtração de " + num01 + " - " + num02 + " = " + sub);
console.log("A Multiplicação de " + num01 + " x " + num02 + " = " + mult);
console.log("A Divisão de " + num01 + " / " + num02 + " = " + div);

let contador: number = 1;
while(contador <= 100)
{
  console.log("Contando o numero " + contador);
  if(contador % 3 == 0)
  {
    console.log(contador + " Multiplo de 3!!");
  }
  contador += 1;
}
