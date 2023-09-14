/*Excercicio 01 */

var Kelvin = 293
console.log(Kelvin)

/*Excercicio 02 */

console.log(" uma variavel foi cirada usando o let e foi adicionado o valor 293 a ela")

/*Excercicio 03 */

var Celsius = Kelvin - 273
console.log(celsius)

/*Excercicio 04 */

console.log("criou uma variavel com nome de celsius e diminuiu 273 da variavel kelvin")

/*Excercicio 05 */

var Fahrenheit = Celsius * (9 / 5) + 32
console.log(Fahrenheit)

/*Excercicio 06 */

console.log("criou a variavel fahrenheit e calculou usando sua formula e o valor de celsius")

/*Excercicio 07 */

Fahrenheit = Math.floor(Fahrenheit)
console.log(Fahrenheit)

/*Excercicio 08 */

console.log("foi utilizada a função math.floor para arredondar para o numero inteiro mais baixo")

/*Excercicio 09 */

var Temperatura = Fahrenheit
console.log(`A temperatura é ${Temperatura} fahrenheit`)

/*Excercicio 11 */

let kelvin_Fahrenheit = (Kelvin) => (Kelvin - 273.15) * 9 / 5 + 32;

let kelvin = 0;
let fahrenheit = kelvin_Fahrenheit(Kelvin);

console.log(`A temperatura de ${Kelvin} Kelvin é igual a ${Fahrenheit} Fahrenheit.`);


/*Excercicio 12 */

var Newton = Celsius * (33 / 100)
Newton = Math.floor(Newton)
console.log(`A temperatura em newton é ${Newton}`)