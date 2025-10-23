//Comentario de una sola línea
/*
asdasdhlas
akjdasdhald
ajkdasjdhas
*/
//Usando Ctrl + K + C comentan las lineas seleccionadas
//Ctrl + K + U Descomentan

//Declaración o creación de una variable
let animal;

//Creación y asignación de un valor
let valija = "ropa"

//Asignar valor a una variable que ya está declarada en otro lado
animal = "perro"
animal = "gato"

//Constante
const dni = 3333333

//Tipos de datos
//Number
let numero = 4
//String
let cadenaDeCaracteres = "Hola"
let string = "134243242"
//Boolean
let verdadero = true
let falso = false
//Null
let datoDesconocido = null
//Indefinido o Undefined
//Es algo que no esta definido en el programa
//Array
let verduras = ["Lechuga", "Zanahoria", "Zapallo"]
let cosas = ["perro", "Chicho", 10, null, true, { nombre: "Lucia", edad: 25,email: "lucia@gmail.com"}]
console.log(verduras[0]);
console.log(cosas[4], cosas[0]);
console.log(cosas[5].nombre);//Lucia
//Object
let persona = {
    nombre: "Lucia",
    edad: 25,
    email: "lucia@gmail.com"
}
let nombre = "Harry"
let apellido = "Potter"

// console.log("Hola chicos, bienvenidos a Javascript")
// console.log(persona);
console.log(persona.nombre);
//Concatenación
console.log("Bienvenido " + nombre + " " + apellido + "!");