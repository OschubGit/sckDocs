## Manual de estilos

Aqui dispones de toda la información referente a los estilos del proyecto.

En primer lugar puedes descargar los logos de SCENIKUS en los siguientes enlaces.

#### Descárgalo en el formato que desees: :metal:
<ul>
<li>Descargar en SVG </li>
<li>Descargar en PNG</li>
<li>Descargar en JPG</li>
</ul>

## Paletta

El proyecto usa diferentes paletas de color con una variedad de gamas de cada uno. 

### Colores primarios

Disponemos de los primarios más una selección sck colors que cuentan con opacidad.

```scss
// Palette primary colors
$primary-color: #20c0c5;
$primary-black: #06070d;
$dark: #0e0e0e;
// End Palette primary colors
```
### Colores SCK
Estos colores son los originales de scenikus.

```scss
// sck colors
$secondary-color: #112B31;
$color-secondary: #d12465;
$green-color: #62b340;
$yellow-color: #ebb128;
$blue-color: #4b90cd;
// end sck colors
```
### Color background y contrast background

```scss
// Background
$primary-background: #06070d;

// Contrast background
$primary-contrast: #253746;
$bg_solitude: #fafdff;
$bg_vulcan: #06070d;
```

### Escala de grises

```scss
$alabaster: #FAFAFA;
$wild-sand: #F5F5F5;
$gallery: #EEEEEE;
$mercury: #E0E0E0;
$Silver: #BDBDBD;
$silver-chalice: #9E9E9E;
$boulder: #757575;
$dove-gray: #616161;
$mine-shaft: #424242;
$shaft: #212121;
$alto-opty: #D5D5D5;
$silver-opty: #AAAAAA;
$shaft-opty: #303030;
$dove-opty: #616161;
```

## Font Family
El nuevo proyecto de Scenikus usa Roboto. Esta tipografía es la que viene por defecto al instalar Material Ui.
### Importación
La tipografía ya está importada en el proyecto. En cualquier caso podemos cambiarla o agregar más pegando el link de importación en el <code>head</code> del archivo <code>index.html</code>
```html
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css">
```

### Uso Css
Usaremos variables para importar las tipografías y usarlas a nivel global. Encontramos la carpeta en <code>SCSS > utilities > _variables.scss</code>

```scss
$font-title: 'Montserrat', sans-serif;
$font-text: 'Open Sans', sans-serif;
```
Luego podremos llamar estas variables en los archivos Scss:

```scss
font-family: $font-title;
```
### Color para tipografías
También podemos especificar colores para las tipografías. Usamos colores de contraste en las tipografías para resaltarlas del fondo <code>$primary-background</code>

```scss
$light: #fff;
$medium: #dadada;
$contrastTextv1: #253746;
$contrastTextv2: #192735;
$contrastTextv3: #06070D;
```
### Font size
En <code>_variables.scss</code> especificamos tamibén el tamaño de las tipografías. Material Ui tiene el tamaño por defecto mediante:
```js
<Typography variant="[variante]"></Tipography>
```