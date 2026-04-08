
// Solicitar 3 números al usuario
let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));
let num3 = parseInt(prompt("Ingresa el tercer número:"));

// Guardar en un arreglo para facilitar el ordenamiento
let numeros = [num1, num2, num3];

// Verificar si todos los números son iguales
if (num1 === num2 && num2 === num3) {
    console.log("Los tres números son iguales:", numeros);
} else {
    // Ordenar de mayor a menor
    let mayorAMenor = [...numeros].sort((a, b) => b - a);
    console.log("De mayor a menor:", mayorAMenor);

    // Ordenar de menor a mayor
    let menorAMayor = [...numeros].sort((a, b) => a - b);
    console.log("De menor a mayor:", menorAMayor);
}
