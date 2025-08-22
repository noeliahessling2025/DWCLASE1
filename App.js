import logo from './logo.svg';
import './App.css';

function App() {
  const nombre= "Noelia Hessling"
  const edad = 38;
  const profesion = "Contadora"
  return (
    <div className="App">
      <h1>Hola, soy {nombre}</h1>
      <h2>Tengo {edad} años</h2>
      <p>Mi profesión es {profesion}</p>
      <img src = "https://www.google.com/imgres?q=contadora&imgurl=https%3A%2F%2Fimg.freepik.com%2Fvector-premium%2Fcontadora-esta-contando-dinero_995281-6084.jpg&imgrefurl=https%3A%2F%2Fwww.freepik.es%2Fvector-premium%2Fcontadora-esta-contando-dinero_143522771.htm&docid=vmuZSdZ0ENbggM&tbnid=XNHlQsGzbqwXjM&vet=12ahUKEwjTxNmz05WPAxV7GbkGHRx8CncQM3oECBoQAA..i&w=626&h=626&hcb=2&ved=2ahUKEwjTxNmz05WPAxV7GbkGHRx8CncQM3oECBoQAA"></img>
    </div>
  );
}

export default App;
