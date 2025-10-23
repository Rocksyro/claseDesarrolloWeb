let edadUsuario = 20;
let residenciaUsuario = "Buenos Aires"

// if (edadUsuario <= 18) {
//     console.log("No podés comprar alcohol");
// } else {
//     console.log("Sos mayor de edad, podés comprar alcohol");
// }


// if (edadUsuario > 18 && residenciaUsuario == "Buenos Aires"){
//     console.log("Autorizado");
// }else{
//     console.log("No autorizado");
// }

//Anidación de condicionales - IF ELSE

// let llueve = false
// let soleado = false
// let nevado = false

// if(nevado){
//   //código a ejecutar si la condición es verdadera
//   console.log("Día de nieve");
// }else if (soleado){
//   //código a ejecutar si la otra condición es verdadera
//   console.log("Día de sol");
// }else if(llueve){
//   //código a ejecutar si la otra condición es verdadera
//   console.log("Día de lluvia");
// }else{
//   //código a ejecutar si todas las condiciones son falsas
//   console.log("No sé cual es el clima");
// }

let clima = ""

// if(clima == "Caluroso" || "caluroso"){
//   //código a ejecutar si la condición es verdadera
//   console.log("Día de sol");
// }else if (clima == "Frío"){
//   //código a ejecutar si la otra condición es verdadera
//   console.log("Día de nieve");
// }else if(clima =="Húmedo"){
//   //código a ejecutar si la otra condición es verdadera
//   console.log("Día de calor");
// }else{
//   //código a ejecutar si todas las condiciones son falsas
//   console.log("No sé cual es el clima");
// }

// if (clima == 22 || clima < 25){
//     console.log("El clima está perfecto para salir a caminar");
// }

//Switch
switch (clima) {
    case "lluvioso":
        console.log("No te olvides el paraguas");
        break;
    case "caluroso":
        console.log("Tomá mucha agua hoy");
        break
    default:
        console.log("No tengo en claro el clima de hoy");
        break;
}