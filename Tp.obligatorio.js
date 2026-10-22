
// TRABAJO PRÁCTICO 2 //


console.log("=== EJERCICIO 1 ===");
const frutas1 = ["manzana", "banana", "pera", "naranja"];
for (let i = 0; i < frutas1.length; i++) {
    console.log(`Índice: ${i}, Valor: ${frutas1[i]}`);
}

console.log("\n=== EJERCICIO 2 ===");
const frutas2 = ["manzana", "banana", "pera", "naranja"];
frutas2.push("kiwi");       //  Agregar "kiwi" al final
frutas2.unshift("sandía");  //  Agregar "sandía" al inicio
frutas2.shift();            //  Quitar el primer elemento
frutas2.pop();              //  Quitar el último elemento
console.log("Arreglo final:", frutas2);

console.log("\n=== EJERCICIO 3 ===");
const numeros3 = [10, 20, 30, 40, 50];
function verificarNumero(numeroBuscado) {
    if (numeros3.includes(numeroBuscado)) {
        console.log(`El número ${numeroBuscado} sí está en el arreglo.`);
    } else {
        console.log(`El número ${numeroBuscado} no está en el arreglo.`);
    }
}
verificarNumero(30); // evaluando el número 30

console.log("\n=== EJERCICIO 4 ===");
const numeros4 = [1, 2, 3, 2, 4, 2, 5];
let contadorDos = 0;
for (let i = 0; i < numeros4.length; i++) {
    if (numeros4[i] === 2) {
        contadorDos++;
    }
}
console.log(`El valor 2 se repite ${contadorDos} veces.`);

console.log("\n=== EJERCICIO 5 ===");
const arregloOriginal = [5, 12, 8, 20, 3, 15];
const mayoresADiez = [];
for (let i = 0; i < arregloOriginal.length; i++) {
    if (arregloOriginal[i] > 10) {
        mayoresADiez.push(arregloOriginal[i]);
    }
}
console.log("Números mayores a 10:", mayoresADiez);

console.log("\n=== EJERCICIO 6 ===");
const nombres = ["Ana", "Carlos", "Sofía", "Lucía"];
const nombresInversos = [];
for (let i = nombres.length - 1; i >= 0; i--) {
    nombresInversos.push(nombres[i]);
}
console.log("Nombres en orden inverso:", nombresInversos);

console.log("\n=== EJERCICIO 7 ===");
const precios = [150.50, 300, 1200, 45.99];
let acumulador = 0;
for (const precio of precios) {
    acumulador += precio;
}
const promedio = acumulador / precios.length;
console.log(`Gasto total: $${acumulador}`);
console.log(`Precio promedio: $${promedio.toFixed(2)}`);

console.log("\n=== EJERCICIO 8 ===");
const matrizNumeros = [
    [2, 65, -55],
    [1000, 0, 88],
    [-13, 89, 67]
];
let sumaTotal = 0;
for (let i = 0; i < matrizNumeros.length; i++) {
    for (let j = 0; j < matrizNumeros[i].length; j++) {
        sumaTotal += matrizNumeros[i][j];
    }
}
console.log(`La suma total de la matriz es: ${sumaTotal}`);

console.log("\n=== EJERCICIO 9 ===");
const oceano = [
    ["~", "~", "~"],
    ["~", "B", "~"],
    ["~", "~", "~"]
];
let filaBarco = -1;
let columnaBarco = -1;
for (let i = 0; i < oceano.length; i++) {
    for (let j = 0; j < oceano[i].length; j++) {
        if (oceano[i][j] === "B") {
            filaBarco = i;
            columnaBarco = j;
            break;
        }
    }
}
console.log(`El barco se encuentra en la fila ${filaBarco} y columna ${columnaBarco}.`);