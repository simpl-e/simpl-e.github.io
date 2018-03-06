
### Estándar
Este estándar está basado 'vue-cli webpack' para dejar abierta cualquier posibilidad de abstracción del front-end


### Escalabilidad
Para escalar con herramientas webpack
https://webpack.js.org/guides/getting-started/


### Estructura

src:
- boot: Código JS que debiera cargarse al iniciar y que no depende de ninguna vista
- libs: Librerías provadas o que no se puedan incluir por cdn
- modules: Componentes Vue
  - components: Componentes para elementos repetitivos
  - views: Vistas funcionalmente independientes
