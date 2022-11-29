# Pokédex Diego Sanz

## Introducción

Este es un proyecto hecho a modo demo técnica. Consiste en consultar la api de [pokeapi](https://pokeapi.co/) mostrando un listado de Pokémons paginado. Se incluye tambien un símil de buscador (ya que pokeapi no dispone un endpoint para búsquedas) en el que hay que introducir exactamente el nombre del Pokémon para que el mismo sea encontrado.

La filosofía de este proyecto es representar el funcionamiento de una web hecha con React desde cero sin usar [CRA](https://create-react-app.dev/), [Next](https://nextjs.org/) o similares. Existe cierta sobreingeniería porque se ha construido pensando en una posible futura escalabilidad.

## Instalación

Este proyecto se ha creado utilizado `node 18` y `yarn 1.22`.

Instalar con:

```bash
yarn install
```

## Scripts

Existen scripts para realizar diferentes tareas del proyecto:

- `yarn dev`: lanza el proyecto en modo desarrollo.
- `yarn build`: construye el proyecto para producción.
- `yarn start`: lanza el proyecto albergado en `dist`. **Es necesario construir el proyecto antes**, de lo contrario el directorio estará vacío.
- `yarn test`: lanza los test unitarios con vitest.
- `yarn lint`: ejecuta eslint y valida el código.
- `yarn lint:fix`: ejecuta eslint y realiza los cambios automáticos que pueda resolver.
- `yarn format`: formatea el código con prettier.
- `yarn cy`: ejecuta los test de cypress.
- `yarn cy:open`: abre la GUI de cypress.

## Filosofía de la toma de decisiones

- El diseño busca representar una interfaz gráfica ochentera, que sea cutre es parte de su encanto.
- La API es estática, no se espera que tenga datos que se actualizen a corto plazo, por eso ello se busca que la aplicación cachee los datos en memoria y realice el menor número de peticiones de red posible.
- No se han incluído el 100% de los test necesarios dado que mi tiempo es finito. Es una demo técnica, así que sólo se han hecho los test más representativos y/o que puedan servir de ejemplo.
- Me gusta aplicar los principios DRY y SOLID siempre que me sea posible y pensar en cómo escalaría la aplicación a futuro.
- Se ha creado la página de `detail` dado que la "búsqueda" devuelve el detalle de un Pokémon en concreto, no un listado de Pokémons similar al listado paginado. Por ello la búsqueda lleva directamente a la página del detalle.
- Me gusta que Typescript autocomplete y me avise si cometo un error o cuando refactorizo, así que he sido estricto con el tipado. Se ha incluído también un tipado para los CSS Modules que detecte si una clase existe o no.
- Se han intentado incluir únicamente las librerías de terceros extrictamente necesarias. Por ello librerías como `useDebounceFn` se han escrito a mano y se ha evitado usar Axios aunque este último de más calidad que mi wrapper `pokeApiFetch` del fetch.
- No se han borrado las ramas de Git mergeadas para mostrar el flujo que se ha seguido.

## Posibles mejoras

- La paginación se puede mejorar, por ejemplo:

  - Añadir un input para seleccionar la página:

    ```HTML
      <input
        type="number"
        value={page}
        onChange={(ev) => setPage(Number(ev.target.value))}
      />
    ```

  - Parecido al anterior, con `setPage` podríamos hacer los números de esta botonera: `< 1 2 3 4 ... > ` siendo cada número un botón que lleve a esa página.
  - Paginación por URL de forma que cada vez que se cambie de página se actualize por URL de forma que si esa URL se comparte o se añade a marcadores se visualice ese listado en concreto.
  - Dar al usuario la opción de elegir cuántos items por página desea. El hook está preparado para ello.

  \*_Nota:_ estas ampliaciones requerirían de un control en el que `results` no viniera vacío. Actualmente no es necesario ya que el usuario.

- Usar el loader de React Router con React Query, como en [este ejemplo](https://tanstack.com/query/v4/docs/examples/react/react-router).

- Webpack:

  - Crear ficheros de configuración diferenciados para development y production.
  - Añadir más loaders ya que sólo se han incluído los necesarios para que el proyecto funcione.
  - Mejorar la integración con Typescript.

- Añadir [stylelint](https://stylelint.io/).
- Añadir traducciones.
- Los links de navegación ahora mismo son "magic strings". Si se cambia una página a otra URL abría que recorrer toda la aplicación para cambiar los links que apunten a ella.
- En proyectos más grandes o que pueden escalar más horizontalmente utilizo otra estructura de ficheros que permita agrupar los ficheros según su contexto.
- He decidido simplificar los alias a las carpetas del proyecto haciendo un único alias. Los alias de `tsconfig.json` también se podrían incluir en Webpack con plugins [como este](https://www.npmjs.com/package/tsconfig-paths-webpack-plugin).

## Problemas encontrados

La configuración y la base del proyecto me ha llevado más tiempo del que previamente había estimado. Aparte de estar acostumbrado a herramientas que generen una base como [Next](https://nextjs.org/), también está el hecho de que muchas de las librerías que conocía han evolucionado o ha cambiado su configuración.
