import './App.css';
import freeCodeCampLogo from './imagenes/logo.png';
import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/BotonClear'
import {useState} from 'react';
import {evaluate} from 'mathjs';


function App() {

  const [input,seTInput] = useState ('');

  const agregarInput = valor => {
    seTInput(input + valor);
  };

  const calcularResultado = () => {
    if (input){
      seTInput(evaluate(input));
    }else{
      alert ('Por favor ingrese valores para realizar los calculos.')
    }
    
  };

  return (
    <div className='App'>
      <div className='freeCodeCamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freeCodeCamp-logo'
          alt='logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila' >
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila' >
          <BotonClear manejarClear={() => seTInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
