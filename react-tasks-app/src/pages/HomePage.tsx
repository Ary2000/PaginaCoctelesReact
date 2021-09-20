import React, { useState, useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging'
import logo from './logo.svg';
import './HomePage.css';
import '../realizarConsulta';
import { consultarApi } from '../realizarConsulta';
import ListaResultados from '../components/ListaResultados';
import { IResultados } from '../interfaces/IResultados';

import { realizarConsultaCoctel } from '../HandlerConsultas';


export const HomePage: React.FunctionComponent<IPage> = props => {

  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [props.name])

  //const handlerConsultas = new HandlerConsultas();

  const [resultados, setResultados] = useState<IResultados['drinks']>([]);
  //const consultate = ;

  // Realiza la consulta a la api
  // Async para que await funcione
  // Hay que manejar cuando no hay resultados
  async function conseguirResultados( nombreCoctail:string , URLdeseado:string) {
  //  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + nombreCoctel)
  //    .then(respuesta => respuesta.json())
  //    .then(datos => {
  //      setResultados(datos.drinks);
  //    });
    realizarConsultaCoctel( nombreCoctail, URLdeseado).then(datos => {
      setResultados(datos.drinks);
    });
  }

  const botonesAbecedario = () => {
    return <div>
      <button onClick = {() => conseguirResultados('A', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=')}>A</button>
      <button onClick = {() => conseguirResultados('B', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=')}>B</button>
      <button onClick = {() => conseguirResultados('C', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=')}>C</button>
      <button onClick = {() => conseguirResultados('D', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=')}>D</button>
      <button onClick = {() => conseguirResultados('E', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=')}>E</button>
      <button onClick = {() => conseguirResultados('F', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=')}>F</button>
      <button onClick = {() => conseguirResultados('G', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=')}>G</button>
      <button onClick = {() => conseguirResultados('H', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=')}>H</button>
      <button onClick = {() => conseguirResultados('I', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=')}>I</button>
      <button onClick = {() => conseguirResultados('J', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=')}>J</button>
      <button onClick = {() => conseguirResultados('K', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=')}>K</button>
      <button onClick = {() => conseguirResultados('L', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=')}>L</button>  
      <button onClick = {() => conseguirResultados('M', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=')}>M</button>
      <button onClick = {() => conseguirResultados('N', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=')}>N</button>
      <button onClick = {() => conseguirResultados('O', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=')}>O</button>
      <button onClick = {() => conseguirResultados('P', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=')}>P</button>
      <button onClick = {() => conseguirResultados('Q', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=')}>Q</button>
      <button onClick = {() => conseguirResultados('R', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=')}>R</button>
      <button onClick = {() => conseguirResultados('S', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=')}>S</button>
      <button onClick = {() => conseguirResultados('T', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=')}>T</button>
      <button onClick = {() => conseguirResultados('U', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=')}>U</button>
      <button onClick = {() => conseguirResultados('V', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=')}>V</button>
      <button onClick = {() => conseguirResultados('W', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=')}>W</button>
      <button onClick = {() => conseguirResultados('X', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=')}>X</button>
      <button onClick = {() => conseguirResultados('Y', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=')}>Y</button>
      <button onClick = {() => conseguirResultados('Z', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=')}>Z</button>
    </div>
  }

  //Cuerpo de la pagina
  return (
    <div className="App">
      <h1>Busqueda Cocteles</h1>
      <input type='text' id='searchBar'></input>
      <button onClick = {() => conseguirResultados((document.getElementById('searchBar') as HTMLInputElement).value, 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')}>Buscar</button>
      { botonesAbecedario() }
      <ListaResultados drinks={resultados}/>
    </div>
  );
}

export default HomePage;
