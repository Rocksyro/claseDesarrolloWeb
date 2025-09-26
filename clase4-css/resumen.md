# Resumen
### Introducción al lenguaje CSS.
- Formas de utilizarlo: en línea, en archivo externo, con etiqueta.
  - <p style="color:green;">Párrafo de color verde.</p>
  - <link rel="stylesheet" type="text/css" href="estilos.css">
  - <style></style> 

> https://htmlcolorcodes.com/es/

- <b>Sintaxis del lenguaje: selectores:</b>
	- Por id (#)
	- Por clase (.)
	- Por etiqueta (p)

- <b>Fonts:</b>
> https://fonts.google.com/
  - font-family: Arial, Helvetica, sans-serif; 
  - font-style: normal;
  - font-style: italic;
  - font-style: oblique;
  - font-weight:  bold; // normal, bolder, lighter, 100, 200, 300, 400
  - font-size:  16px; // 50%, 1.5 rem, 1.5 em

- <u>CSS Reset</u>:
Los reset CSS contienen en su código fuente definiciones para propiedades
problemáticas, que los diseñadores necesitan unificar desde un principio.
Por ejemplo, la mayoría de navegadores establece un margen por defecto entre el
contenido de la página web y su propia ventana, cuyo valor varía de un navegador
a otro.
Para subsanar esa diferencia, los diseñadores y las diseñadoras de sitios webs
suelen declarar la siguiente línea al comienzo de sus hojas de estilo.

<code>
* {
margin:0;
padding:0;
box-sizing: border-box;
}
</code>

- <u>Background</u>:
  - background-color: #000000; // nombreColor, rgb(0, 255, 0), rgba(0, 255, 0, 0.5)
  - background-image:
    - url('imagen.jpg');
    - conic-gradient(red, yellow, green)
    - linear-gradient(red, yellow, blue)
    - radial-gradient(red, green, blue)
  - background-repeat:  no-repeat; //repeat, no-repeat, repeat-y, repeat-x, space, round
  - background-position: right top; //center, bottom, left, right, top
  - background-size:  100px 100px; //auto, cover, contain

- <u>Hover </u>:
<code>
nombreEtiqueta:hover {
	display:block;
}
</code>

- unvisited link 
a:link {
  color: green;
}

- visited link 
a:visited {
  color: green;
}

- mouse over link
a:hover {
  color: red;
}

- selected link 
a:active {
  color: yellow;
}

- <b>Links útiles:</b>
  -Códigos hexadecimales: https://htmlcolorcodes.com/es/
	-Box shadows: https://getcssscan.com/css-box-shadow-examples
  -Cdn: https://cdnjs.com/
	-Iconos: https://fontawesome.com/ | https://uxwing.com/
	-Videos para banners/fondos: https://coverr.co/
	-Buscar ideas y recursos: https://dribbble.com/ | https://unsplash.com/es |https://undraw.co/ | https://coverr.co/
	-Paleta de colores: https://coolors.co/ | https://colorhunt.co/

## Info extra:
https://www.eniun.com/que-es-css-cascading-style-sheets/

