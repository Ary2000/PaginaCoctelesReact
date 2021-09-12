import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './realizarConsulta';
import { consultarApi } from './realizarConsulta';
import ListaResultados from './components/ListaResultados';

// Interface para conseguir resultados
export interface IStateLR {
  drinks:{
      idDrink: number
      strDrink: string
  }[]
}

function App() {

  const [resultados, setResultados ] = useState<IStateLR['drinks']>([]);
  //const consultate = ;

  // Realiza la consulta a la api
  // Async para que await funcione
  // Hay que manejar cuando no hay resultados
  async function conseguirResultados( nombreCoctel:string ) {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + nombreCoctel)
      .then(respuesta => respuesta.json())
      .then(datos => {
        setResultados(datos.drinks);
      });
  }

  const botonesAbecedario = () => {
    return <div>
      <button>A</button>
      <button>B</button>
      <button>C</button>
      <button>D</button>
      <button>E</button>
      <button>F</button>
      <button>G</button>
      <button>H</button>
      <button>I</button>
      <button>J</button>
      <button>K</button>
      <button>L</button>  
      <button>M</button>
      <button>N</button>
      <button>O</button>
      <button>P</button>
      <button>Q</button>
      <button>R</button>
      <button>S</button>
      <button>T</button>
      <button>U</button>
      <button>V</button>
      <button>W</button>
      <button>X</button>
      <button>Y</button>
      <button>Z</button>
    </div>
  }

  //Cuerpo de la pagina
  return (
    <div className="App">
      <h1> Le epic jeff</h1>
      <h2> he is real </h2>
      <input type='text' id='searchBar'></input>
      <button onClick = {() => conseguirResultados((document.getElementById('searchBar') as HTMLInputElement).value)}>Buscar</button>
      { botonesAbecedario() }
      <ListaResultados drinks={resultados}/>
    </div>
  );
}

export default App;
