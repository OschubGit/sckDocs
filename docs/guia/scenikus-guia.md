# Estructura SCSS

Aqui puedes encontrar los estilos actuales del proyecto watch.scenikus.com

## Organización de contenido SCSS
El proyecto usa reglas de estilos SCSS, por tanto podemos encontrar diferentes carpetas.
```js
sass/
|
|– utilities/
|   |– _variables.sass    // Variables
|   |– _functions.sass    // Funciones
|   |– _mixins.sass       // Mixins
|
|– base/
|   |– _reset.sass        // Reset/normalize
|   |– _typo.sass   // Tipografías
|
|– components
|   |– _buttons.acss      // Bot
|
|– layout/
|   |– _navigation.sass   // Navegación
|   |– _grid.sass         // Grid
|   |– _header.sass       // Header
|   |– _footer.sass       // Footer
|   |– _forms.sass        // Formularios
|
|– views/
|   |– _home.sass         // Estilos de la página de inicio
|   |– _contact.sass      // Estilos de la página de contacto
|
|– themes/
|   |– _theme.sass        // Default theme
|
|– vendors/
|   |– _materialui.sass    // Bootstrap
|   |– _jquery-ui.sass    // jQuery UI
|
|– main.sass              // Archivo principal
```

## Importación
Finalmente, el archivo main.sass , importa todos los archivos de cada carpeta. Cambios.

```js
@import 'utilities/variables';
@import 'utilities/functions';
@import 'utilities/mixins';

@import 'utilities/materialui';
@import 'vendors/jquery-ui';

@import 'base/reset';
@import 'base/typo';

@import 'layout/navigation';
@import 'layout/grid';
@import 'layout/header';
@import 'layout/footer';
@import 'layout/forms';

@import 'components/buttons';

@import 'pages/home';
@import 'pages/contact';

@import 'themes/theme';

```