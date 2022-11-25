# Pokédex Diego Sanz

## Introducción

Este es un proyecto hecho a modo demo técnica. Consiste en consultar la api de [pokeapi](https://pokeapi.co/) mostrando un listado de Pokémons paginado. Se incluye tambien un símil de buscador (ya que pokeapi no dispone un endpoint para búsquedas) en el que hay que introducir exactamente el nombre del Pokémon para que el mismo sea encontrado.

La filosofía de este proyecto es representar el funcionamiento de una web hecha con React desde cero sin usar [CRA](https://create-react-app.dev/), [Next](https://nextjs.org/) o similares. Existe cierta sobreingeniería porque se ha construido pensando en una posible futura escalabilidad.

## Instalarción

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
