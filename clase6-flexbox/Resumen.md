# Flexbox

- Container

- Items
- flex-direction: row | row-reverse | column | column-reverse;
Establece el main axis

- justify-content: flex-start | flex-end | center | space-between | space-around;
Definimos el alineamiento de los elementos dentro del contenedor, según el <u>main axis</u>(eje principal).

- align-items: flex-start | flex-end | center | baseline | stretch;
Definimos el alineamiento de los elementos dentro del contenedor, según el <u>cross axis</u>.

- align-self:  flex-start | flex-end | center | baseline | stretch;
Podemos definir el comportamiento de un item hijo, y que sobreescriba el comportamiento que definimos con align-items.

- flex-wrap: nowrap | wrap | wrap-reverse;
Definimos si los elementos se pueden desbordar o no.

- align-content:  flex-start | flex-end | center | space-between | space-around | stretch;
- order: 0 | 1 | 2 | ...
- flex-grow:  0 | 1 | 2 | ...


## Mobile first
Primero, definimos los estilos para pantallas pequeñas, sin usar media queries. Estos serán los estilos por defecto.
Luego, usamos media queries con la regla min-width para especificar cuándo los estilos deben cambiar para pantallas más grandes.
Las medidas que utilizamos, se llaman breakpoints.
<u>Media Query</u>:
<code>
@media (min-width: 768px) {
  nombreClase {
    display: none;
}
</code>
<code>
@media (min-width: 1024px) {
  body {
    font-size: 20px;
    padding: 30px;
  }
}
</media>

>https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/
>https://css-tricks.com/snippets/css/a-guide-to-flexbox/