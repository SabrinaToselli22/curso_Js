const prompt = require("prompt-sync")();

// Nombre: Sabrina
// Apellido: Toselli
// Dni: 35179523

// Ejercicio 1 - clasificacion de numero entero
let numero = Number(prompt("ingrese un numero entero:"));
if (numero > 0) {
     console.log("Positivo");
    } else if (numero < 0) {
        console.log("Negativo");
    }else {console.log("Cero");
 }

 //Ejercicio 2 - triangulo

 let lado1 = Number(prompt("ingrese lado 1:"));
 let lado2 = Number(prompt("ingrese lado 2:"));
 let lado3 = Number(prompt("ingrese lado 3:"));

 if (lado1 === lado2 && lado2 === lado3) {
    console.log("equilatero");
 } else if (lado1 === lado2 || lado1 === lado3 ||lado2 === lado3){
    console.log("isosceles");
 } else {
    console.log("escaleno");
 }

 // Ejercicio 3 -clasificar edad

 let edad = Number(prompt("Ingrese su edad:"));
if (edad < 12) {
  console.log("Niño");
} else if (edad >= 12 && edad <= 17) {
  console.log("Adolescente");
} else if (edad >= 18 && edad <= 64) {
  console.log("Adulto");
} else {
  console.log("Adulto mayor");
}

// Ejercicio 4 - numero impar o par.


let numParImpar = Number(prompt("Ingrese un número:"));
if (numParImpar % 2 === 0) {
  console.log("Par");
} else {
  console.log("Impar");
}


// Ejercicio 5 - calculo de notas

let nota = Number(prompt("Ingrese su calificación (0-100):"));
if (nota >= 90 && nota <= 100) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else {
  console.log("F");
}

// Ejercicio 6 - numero mayor

let num1 = Number(prompt("Ingrese primer número:"));
let num2 = Number(prompt("Ingrese segundo número:"));

if (num1 > num2) {
  console.log("El mayor es:", num1);
} else if (num2 > num1) {
  console.log("El mayor es:", num2);
} else {
  console.log("Son iguales");
}

// con tres numeros 

let a = Number(prompt("Ingrese primer número:"));
let b = Number(prompt("Ingrese segundo número:"));
let c = Number(prompt("Ingrese tercer número:"));

let mayor = a;
if (b > mayor) mayor = b;
if (c > mayor) mayor = c;
console.log("El mayor es:", mayor);


