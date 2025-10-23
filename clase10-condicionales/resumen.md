## Condicionales

Cuando en programación hablamos de condicionales, hablamos de una estructura sintáctica que sirve para tomar una decisión a partir de una condición. 

Si (<condición>) entonces (<operación>)

### Estructura IF

La estructura más utilizada en la mayoría de los lenguajes, y por ende también en JS, es la estructura if.

<code>
if(true){
  //código a ejecutarse
}
</code>

Si la condición se cumple (es decir, si su valor es true) se ejecutan todas las instrucciones que se encuentran dentro de {...}

Si la condición no se cumple (es decir, si su valor es false) no se ejecuta ninguna instrucción contenida en {...} y el programa continúa ejecutando el resto de instrucciones del script.

- Ejemplo:

<code>
let unNumero = 5;

if (unNumero == 5){
    console.log("vas a ver este mensaje");
}
</code>

Como los dos valores coinciden, la igualdad se cumple, y por lo tanto la condición es cierta; su valor es true, y se ejecutan las instrucciones contenidas en el bloque del if .

<code>
if (unNumero == 6){ 
    console.log("no vas a ver este mensaje");
}
</code>

Como unNumero no es igual a 6; su valor es false, y no se ejecutan las instrucciones contenidas en el bloque del if.

##  La comparación del ejemplo anterior suele ser el origen de muchos errores de programación, al confundir los operadores == y =, como vimos la clase pasada.
## Las comparaciones siempre se realizan con el operador ==, ya que el operador = solamente asigna valores.

### Estructura else...if

En ocasiones, las decisiones que se deben realizar no son del tipo "si se cumple la condición, hazlo; si no se cumple, no hagas nada". 
Normalmente las condiciones suelen ser del tipo "si se cumple esta condición, hazlo; si no se cumple, haz esto otro".

<code>
let unColor = "Rojo";

if (unColor == "Rojo"){
    console.log("El color es Rojo");
}else{
    console.log("El color NO es Rojo");
}
</code>

### Condiciones anidadas

Tenemos la posibilidad de anidar condiciones, agregando un if adicional. Es decir, otra condición que puede evaluarse en caso de que la primera sea falsa.
Podemos agregar todos los bloques else if que queramos, solo uno podrá ser verdadero. De lo contrario entrará en acción el bloque else, si existe.

<code>
if(condición){
  //código a ejecutar si la condición es verdadera
}else if (otra condición){
  //código a ejecutar si la otra condición es verdadera
}else if( otra condición){
  //código a ejecutar si la otra condición es verdadera
}else{
  //código a ejecutar si todas las condiciones son falsas
}
</code>

### If ternario

A diferencia de un if tradicional, un if ternario se escribe de forma horizontal.
Tiene el mismo flujo (si esta condición es verdadera hacer esto, si no, hacer esto otro), pero en este caso no hace falta escribir la palabra if ni la palabra else.


<code>
condición ? código si es true : código si es false
</code>

### Switch

La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta una porción de código asociado a ese case.
Los casos (cases) deberán terminar con la palabra reservada break para evitar que se ejecute el próximo bloque.
Si ocurre una coincidencia, el programa ejecuta las declaraciones asociadas correspondientes. Si la expresión coincide con múltiples entradas, la primera será la seleccionada.
También, podemos agrupar casos y ejecutar un mismo bloque de código para cualquier caso de ese grupo.

<code>
switch (expresión) {
  case caso1:
  case caso2:
    // código a ejecutar si la expresión es igual a caso1 o caso2
    break;
  case caso3:
    // código a ejecutar si el caso3 es verdadero
    break;
}
</code>

Si debemos considerar la posibilidad de que ninguno de los casos sea true, se utiliza la palabra reservada default junto con el bloque de código que queremos que se ejecute.
El bloque default se escribe a lo último, y no necesita el break.

<code>
switch (expresión) {
  case caso1:
  case caso2:
    // código a ejecutar si la expresión es igual a caso1 o caso2
    break;
  case caso3:
    // código a ejecutar si el caso3 es verdadero
    break;
  default:
    // código a ejecutar si ningún caso es verdadero
}
</code>
