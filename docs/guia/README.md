## Manual de estilos

Aqui dispones de toda la información referente a los estilos del proyecto.

En primer lugar puedes descargar los logos de SCENIKUS en los siguientes enlaces.

#### Descárgalo en el formato que desees: :metal:

Click [aquí](https://drive.google.com/drive/folders/182cdJhSyrS5_8kXEUUVIAeZscv1sHADf?usp=sharing) para descargar en cualquier formato.


## Paleta de colores

Aquí podemos encontrar los colores necesarios para el nuevo proyecto de Scenikus.

### Commons

Crearemos variables para los colores comunes, estos siempre serán blanco o negro.

```scss
$common-black: #000;
$common-white: #fff;
```

### Palette primary colors

```scss
$primary-color: #20c0c5;
$primary-light: #23d3d9;
$primary-dark: #106366;
```

### Palette secondary colors


```scss
$secondary-color: #d12465;
$secondary-light: #ff2b7c;
$secondary-dark: #661132;
```


### Backgrounds

Estos los usaremos para definir los fondos de la página. El principal es <code>$default-background:</code>, pero asignamos más para dar vivacidad a la aplicación.

```scss
$default-background: #06070d;
$background-light: #23294d;
$background-dark: #171c33;
$background-alternative: #071f2c;
```


### Pallete grey colors

```scss
$grey100: #f5f5f5;
$grey200: #eeeeee;
$grey300: #e0e0e0;
$grey400: #bdbdbd;
$grey500: #9e9e9e;
$grey600: #757575;
$grey700: #616161;
$grey800: #424242;
$grey900: #212121;

$alabaster: #fafafa;
$shaft-paper: #1b1b1b;
$alto-opty: #d5d5d5;
$silver-opty: #aaaaaa;
$shaft-opty: #303030;
$dove-opty: #616161;
```


## Font Family

El nuevo proyecto de Scenikus usa Roboto. Esta tipografía es la que viene por defecto al instalar Material Ui.

### Importación

Usamos Roboto como tipografía por defecto. Podemos agregar más añadiendo el link en el <code>head</code> del archivo <code>index.html</code>
```html
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css">
```

### Uso Css

También podemos importar las tipografías en la hoja de estilos. Usaremos variables para importar las tipografías y usarlas a nivel global. Encontramos la carpeta en <code>SCSS > utilities > _variables.scss</code>

```scss
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,700&display=swap');

$font-title: 'Roboto', sans-serif;
$font-text: 'Open Sans', sans-serif;
```
Luego podremos llamar estas variables en los archivos Scss:

```scss
font-family: $font-title;
```

Material Ui ya proporciona la tipografía Roboto por defecto. 

### Pairings tipográfico

::: tip
<img src="/img/pairing.png">
:::


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

::: details Material Ui especifica los siguientes tamaños tipográficos. Click para ver.
```js
typography: Object
    htmlFontSize: 16
    pxToRem: f ()
    round: f T()
    fontFamily: ""Roboto", "Helvetica", "Arial", sans-serif"
    fontSize: 14
    fontWeightLight: 300
    fontWeightRegular: 400
    fontWeightMedium: 500
    fontWeightBold: 700

    h1: Object
        fontFamily: ""Roboto", "Helvetica", "Arial", sans-serif"
        fontWeight: 300
        fontSize: "6rem"
        lineHeight: 1.167
        letterSpacing: "-0.01562em"
    h2: Object
        fontFamily: ""Roboto", "Helvetica", "Arial", sans-serif"
        fontWeight: 300
        fontSize: "3.75rem"
        lineHeight: 1.2
        letterSpacing: "-0.00833em"
    h3: Object
        fontFamily: ""Roboto", "Helvetica", "Arial", sans-serif"
        fontWeight: 400
        fontSize: "3rem"
        lineHeight: 1.167
        letterSpacing: "0em"
    h4: Object
        fontFamily: ""Roboto", "Helvetica", "Arial", sans-serif"
        fontWeight: 400
        fontSize: "2.125rem"
        lineHeight: 1.235
        letterSpacing: "0.00735em"
    h5: Object
        fontFamily: ""Roboto", "Helvetica", "Arial", sans-serif"
        fontWeight: 400
        fontSize: "1.5rem"
        lineHeight: 1.334
        letterSpacing: "0em"
    h6: Object
        fontFamily: ""Roboto", "Helvetica", "Arial", sans-serif"
        fontWeight: 500
        fontSize: "1.25rem"
        lineHeight: 1.6
        letterSpacing: "0.0075em"
    subtitle2: Object
        fontFamily: ""Open Sans", "Helvetica", "Arial", sans-serif"
        fontWeight: 500
        fontSize: "0.875rem"
        lineHeight: 1.57
        letterSpacing: "0.00714em"
    body1: Object
        fontFamily: ""Open Sans", "Helvetica", "Arial", sans-serif"
        fontWeight: 400
        fontSize: "1rem"
        lineHeight: 1.5
        letterSpacing: "0.00938em"
    body2: Object
        fontFamily: ""Open Sans", "Helvetica", "Arial", sans-serif"
        fontWeight: 400
        fontSize: "0.875rem"
        lineHeight: 1.43
        letterSpacing: "0.01071em"
    button: Object
        fontFamily: ""Open Sans", "Helvetica", "Arial", sans-serif"
        fontWeight: 500
        fontSize: "0.875rem"
        lineHeight: 1.75
        letterSpacing: "0.02857em"
        textTransform: "uppercase"
    caption: Object
        fontFamily: ""Open Sans", "Helvetica", "Arial", sans-serif"
        fontWeight: 400
        fontSize: "0.75rem"
        lineHeight: 1.66
        letterSpacing: "0.03333em"
```
:::

Podemos verlo en la [documentación oficial](https://material-ui.com/customization/default-theme/). También podemos consultar [Typography Material Ui](https://material-ui.com/components/typography/#typography)


## Espaciados

Usamos una base de 16px para el espaciado. Es lo que tiene el cuerpo de texto por defecto y se va multiplicando este valor.

::: tip
<img src="/img/espaciado-guide.png">
:::


```scss
$space: 4px; (16 x 0,25)
$space: 8px; (16 x 0,5)
$space: 12px; (16 x 0,75)
$space: 16px; (16 x 1)
$space: 24px; (16 x 1,5)
$space: 32px; (16 x 2)
$space: 48px; (16 x 3)
$space: 64px; (16 x 4)
$space: 96px; (16 x 6)
$space: 128px; (16 x 8)
$space: 192px; (16 x 12)
$space: 256px; (16 x 16)
$space: 384px; (16 x 24)
$space: 512px; (16 x 32)
$space: 640px; (16 x 40)
$space: 768px; (16 x 48)
```

## Buttons

Podemos conseguir este componente en [Buttons Material Ui](https://material-ui.com/components/buttons/)

#### Botones, variables y efecto hover

Aqui veremos los diferentes tipos de botones con sus variables en diferentes estados.

<img src="/img/buttons/Boton-sobre-blanco.png">


<img src="/img/buttons/Hover-sobre-blanco.png">


<img src="/img/buttons/Boton-sobre-negro.png">


<img src="/img/buttons/Hover-sobre-negro.png">


## Iconografía

Usamos generalmente los iconos que [proporciona Material](https://material-ui.com/components/material-icons/) Ui. No obstante si necesitamos algún icono que no encontramos, acudimos a FontAwsome.

Dentro de Material Ui encontramos variaciones en el estilo de los iconos. Usaremos, "Filled" o "Outlined".

::: tip
<img src="/img/icons.png">
:::