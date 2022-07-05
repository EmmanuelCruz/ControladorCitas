# Aplicación de citas en React
## Emmanuel Cruz Hernández

----

### Descripción
Aplicación que crea citas para un consultorio. Puede crear, editar y eliminar las citas en el sistema.

----

### Sobre React

#### Creación de proyecto

En este caso, se creó el proyecto a partir de Vite y sin TypeScript.

        npm init vite@latest

#### Creación de componente

Crear un archivo con la extensión _jxs_. En este archivo se regresa una función con un retorno de HTML. Esta función se exporta con la siguiente línea hasta el final del archivo.

        export default ComponentName

Para usarlo, se pone el nombre de la función de la siguiente forma

        <ComponentName />

#### Hooks

Los React Hooks o Hooks deben cumplir ciertas reglas para poder aplicarse a un proyecto correctamente. En caso de romper las reglas, se marcan errores.

* Los Hooks se colocan en la parte superior de los componentes de React.
* No se deben crear dentro de condicionales ni después de un return

Algunos de ellos son _useState_ y _useEffect_.

#### Props

Es una forma de pasar variables o funciones de un componente a otro. Es una forma de reutilizar código. Los Props pasan de un componente padre a un componente hijo. La sintaxis es la siguiente:

                <ComponentName propName={valueProp}> />

Se pueden pasar cuantos props sean necesarios a un componente.

Para hacer uso de los props en el componente hijo, es necesario usar la palabra reservada _props_ y pasarla como parámetro al componente.

                function ComponentName(props) {
                        ...
                }

El objeto props contendrá toda la información que pasa desde el componente padre. También es posible recuperar únicamente los props necesarios en el componente.

                function ComponentName({valueProp, ...}){
                        ...
                }

Los props detectan cambios y se pasan directamente a los componentes.

#### LocalStorage

Es una forma de almacenar información de forma local para mantener estados del sistema. Esto se logra con la variable llamada localStorage. Esta variable tiene un método llamado setItem, el cual recibe dos parámetros: el nombre de la variable de almacenamiento; el valor de la variable.

                localStorage.setItem('valueName', value);