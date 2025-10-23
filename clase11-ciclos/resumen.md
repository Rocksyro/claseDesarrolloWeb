# Resumen

## Ciclos
Un ciclo (o bucle) permite repetir un bloque de código mientras se cumpla una condición determinada.
¿Para qué se usan?
- Repetir tareas automáticamente.
- Procesar listas de elementos.
- Realizar validaciones repetidas.

### Ciclo for

- Estructura:

for (inicialización; condición; incremento) {
  // Código a repetir
}

- Ejemplo:

for (let i = 0; i < 5; i++) {
  console.log("Iteración número " + i);
}

i++ es lo mismo que escribir i = i+1

Ideal cuando se sabe cuántas veces se quiere repetir algo.

### Recorrer arrays con for

const frutas = ["manzana", "banana", "pera"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}


### Ciclo while

let i = 0;

while (i < 5) {
  console.log("i vale: " + i);
  i++;
}

Mientras la condición sea verdadera, se ejecuta el bloque de código.

### Ciclo do...while

let numero;

do {
  numero = prompt("Ingresá un número mayor que 10");
} while (numero <= 10);

console.log("Gracias!");

Se ejecuta al menos una vez, incluso si la condición es falsa al principio.

