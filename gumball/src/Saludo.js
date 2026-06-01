// function Saludo() {
//   return <h2>¡Bienvenido al mundo de React!</h2>;
// }

// export default Saludo;

// import Saludo from './Saludo';

// function App() {
//   return (
//     <div>
//       <h1>Hola React</h1>
//       <Saludo />
//     </div>
//   );
// }

function Saludo(props) {
  return <h2>Hola {props.nombre}, ¡bienvenido a React!</h2>;
}
export default Saludo;
