import './style.css';

/* Ejercicio 1 */
let varA = 2;
let varB = 5;
let varTemp = varA;
varA = varB;
varB = varTemp;
console.log(varB, varA);

/* Ejercicio 2 */
const num1 = 8;
const num2 = 10;
let resultado = num1 <= num2;
console.log(`La comparación entre ${num1} y ${num2} es: ${resultado}`);

/* Ejercicio 3 */
/* const num3 = prompt('ingrese un valor') */
/* let resultados = (num3 % 2 === 0)
console.log(resultados) */

/* Ejercicio 4 */
let precioProducto = 5000;
let descuento = 15; // 15 porciento de descuento
const calcularDesc = (precioProducto * descuento) / 100
const precioFinal = precioProducto - calcularDesc
console.log(precioFinal)

/* Ejercicio 5 */
let radio = 50;

function calculoArea(radio) {
  return ((3.14 * radio)^ 2)
}
const area = calculoArea((3.14 * radio)^ 2 )
console.log(area);

/* Ejercicio 6 */
let gradosCelsius = (2 * 9) / 5 + 32;
let gradosFarenheit = gradosCelsius;
console.log(gradosFarenheit);

/* Ejercicio 7 */

/*  for(let incremento = 0; incremento <= 10; incremento++){
  console.log(incremento) 
}   */
/* Ejercicio 8 */
/*    let valor = prompt('ingrese un valor')
while(valor > 0) {
  console.log(valor)
  valor = valor + 1
}
console.warn('fin del ciclo')   */

/* Ejercicio 9 */

/* let numUser = prompt('ingrese su numero')
for(let multi = 1; multi < 11; multi++){
  let resu = numUser * multi
  console.log(resu) 
 } */

/* Ejercicio 10 */

for (let num5 = 1; num5 <= 100; num5++) {
  if (num5 % 2 === 0) {
    let resFinal1 = num5 + num5;
    console.log(resFinal1);
  }
}

/* Ejercicio 11 */

const arrayPersona = [
  {
    nombre: 'Luciano',
    apellido: 'Cabaña',
    edad: 30,
    ciudad: 'Posadas Misiones',
  },
];
const arrayPres = arrayPersona.map((objPersona) => {
  return `${objPersona.nombre} ${objPersona.apellido}`;
});
console.log('Bienvenido Sr', arrayPres);

/* Ejercicio 12 */

const arrayClientes = [
  {
    nombre: 'Damian',
    apellido: 'Balbuena',
    edad: 22,
    direccion: 'Av. los alamos',
  },
  {
    nombre: 'Pedro',
    apellido: 'Guerrero',
    edad: 30,
    direccion: 'av.chacabubo 6690',
  },
  {
    nombre: 'Alberto',
    apellido: 'Fernandez',
    edad: 42,
    direccion: 'calle 102 503',
  },
  {
    nombre: 'Matias',
    apellido: 'Gomez',
    edad: 38,
    direccion: 'av. Blasparera',
  },
];

const arrayDatosClientes = arrayClientes.map((objCliente) => {
  return `${objCliente.nombre} ${objCliente.apellido} ${objCliente.edad} ${objCliente.direccion}`;
});

console.log(arrayDatosClientes);

/* Ejercicio 13 */

const arrayNumeros = [{
nota1: 10,
nota2: 8,
nota3: 5,
},
];


function calcularPromedios(not1, nota2, nota3) {
  return (not1 + nota2 + nota3) / 3
}

const promedios = calcularPromedios(10, 8, 5)
console.log(promedios)
