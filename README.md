Preguntas sobre React

 1. ¿Qué es React?

Es una biblioteca de **JavaScript** creada por Meta para construir interfaces de usuario (UI), especialmente para aplicaciones web de una sola página (SPA).

Su idea principal es dividir la interfaz en **componentes reutilizables**. Cada componente contiene su propia lógica y presentación, lo que facilita el desarrollo y mantenimiento de aplicaciones grandes.

Ejemplo simple:

```jsx
function Saludo() {
  return <h1>¡Hola Mundo!</h1>;
}
```
En este caso, `Saludo` es un componente de React.

2. ¿Por qué usar React?

React es una de las tecnologías más populares para el desarrollo frontend debido a varias ventajas:

 Reutilización de componentes:

Puedes crear un componente una vez y usarlo en diferentes partes de la aplicación.

Mejor rendimiento:

Utiliza el **Virtual DOM**, que actualiza únicamente las partes necesarias de la página en lugar de recargar todo el contenido.

Fácil mantenimiento:

La estructura basada en componentes hace que el código sea más organizado y escalable.

Gran ecosistema:

Cuenta con miles de librerías y herramientas complementarias, como:

* React Router (navegación)
* Redux (manejo de estado)
* Next.js (renderizado y aplicaciones full-stack)

Alta demanda laboral:

React es ampliamente utilizado por empresas de todos los tamaños y es una de las habilidades más solicitadas para desarrolladores frontend.

3. ¿Qué necesito saber antes?

Antes de aprender React, es recomendable tener bases sólidas en:

#### HTML

* Etiquetas
* Formularios
* Estructura de páginas

#### CSS

* Selectores
* Flexbox
* Grid
* Diseño responsivo

#### JavaScript (fundamental)

Debes entender:

* Variables (`let`, `const`)
* Funciones
* Objetos y arreglos
* Condicionales y ciclos
* Funciones flecha (`=>`)
* Desestructuración
* Módulos (`import` / `export`)
* Promesas y `async/await`
* Manipulación básica del DOM

Ejemplo:

```javascript
const usuario = {
  nombre: "Ana",
  edad: 25
};

const { nombre } = usuario;

console.log(nombre);
```
#### Herramientas básicas

También ayuda conocer:

* Terminal o línea de comandos
* Node.js
* npm o Yarn

 ### Ruta recomendada de aprendizaje

1. HTML y CSS básicos.
2. JavaScript moderno (ES6+).
3. Conceptos de React:

   * Componentes
   * Props
   * State
   * Eventos
   * Hooks (`useState`, `useEffect`)
4. Consumo de APIs.
5. Enrutamiento con React Router.
6. Gestión de estado.
7. Frameworks como Next.js.

 
 <!-- Punto 4 -->

 1. ¿Qué es JSX?

JSX (JavaScript XML) es una extensión de JavaScript que permite escribir código con apariencia de HTML dentro de JavaScript. React lo transforma internamente en llamadas a funciones como React.createElement(). Esto hace que la interfaz sea más fácil de leer y escribir.

Ejemplo:

const elemento = <h1>Hola mundo</h1>;

Sin JSX, React haría algo parecido a:

Sin JSX, React haría algo parecido a:

const elemento = React.createElement("h1", null, "Hola mundo");

Código de ejemplo completo:

function App() {
  return (
    <div>
      <h1>Bienvenido</h1>
      <p>Mi primera aplicación en React</p>
    </div>
  );
}

2. ¿Qué es un componente funcional?

Un componente funcional es una función de JavaScript que devuelve JSX. Es la forma recomendada actualmente para crear componentes en React.

3. ¿Qué son los props en React?

Los props (properties) son datos que un componente padre envía a un componente hijo. Permiten que los componentes sean reutilizables y dinámicos.

Ejemplo:

function Saludo(props) {
  return <h1>Hola {props.nombre}</h1>;
}

function App() {
  return <Saludo nombre="Carlos" />;
}

4. ¿Cómo se actualiza la pantalla automáticamente al cambiar datos?

React utiliza un sistema de estado (state) y re-renderizado. Cuando cambia un dato almacenado en el estado mediante una función como setState o setCount, React vuelve a ejecutar el componente y actualiza únicamente las partes necesarias de la interfaz.

5. ¿Qué hace useState?

useState es un Hook de React que permite agregar y administrar estado dentro de componentes funcionales. Devuelve dos valores: el estado actual y una función para actualizarlo.

Ejemplo práctico:

import { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Valor: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Sumar
      </button>
    </>
  );
}

* ## count guarda el valor actual.
*  ## setCount modifica el valor.
* ## Al ejecutar setCount, React actualiza la interfaz automáticamente.

