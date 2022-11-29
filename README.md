# Pokédex Diego Sanz

## Introducción

Este es un proyecto hecho a modo demo técnica. Consiste en consultar la api de [pokeapi](https://pokeapi.co/) mostrando un listado de Pokémons paginado. Se incluye tambien un símil de buscador (ya que pokeapi no dispone un endpoint para búsquedas) en el que hay que introducir exactamente el nombre del Pokémon para que el mismo sea encontrado.

La filosofía de este proyecto es representar el funcionamiento de una web hecha con React desde cero sin usar [CRA](https://create-react-app.dev/), [Next](https://nextjs.org/) o similares. Existe cierta sobreingeniería porque se ha construido pensando en una posible futura escalabilidad.

## Instalación

Para este proyecto se ha creado utilizado `node 18` y `yarn 1.22`.

Instalar con:

```bash
yarn install
```

## Scripts

Existen scripts para realizar diferentes tareas del proyecto:

- `yarn dev`: lanza el proyecto en modo desarrollo.
- `yarn build`: construye el proyecto para producción.
- `yarn start`: lanza el proyecto albergado en `dist`. **Es necesario construir el proyecto antes**, de lo contrario el directorio estará vacío.

## Dependencias

A continuación se detallan las dependencias escogidas y las razones de su elección:

- Webpack: al tratarse de un proyecto que busca contruirse desde cero he considerado que Webpack es la opción que mejor se ajusta dado que requiere de cierta configuración base que otros empaquetadores.
- Typescript: se elige Typescript por encima de Javascript porque considero que genera un código de mejor calidad.

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

  \*_Nota:_ estas ampliaciones requerirían de un control en el que `results` no viniera vacío. Actualmente no es necesario ya que el usuario

- Usar el loader de React Router con React Query, como en [este ejemplo](https://tanstack.com/query/v4/docs/examples/react/react-router).
  .
