import React, {useState} from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';

import styled from '@emotion/styled';


function App() {

  /* este resumen lo vamos a pasar hacia el forulario, va a tomar los datos que hay en el formulario y se van a guardar en el resumen para luego pasarlo a otros componentes mas */
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  })
  //Para mostrar el componente Resumen podria haber hecho un ternario, pero vamos a ver otra forma, por eso agregue el objeto con valores vacios a "resumen"
  
  //extraer datos xq en resumen no necesito la cotizacion, y le paso la prop al comp Resumen const {datos} = resumen
  
  //ahora para Resultado.js necesito la cotizacion por eso extraigo ambos y le paso la prop al componente Resultado

  const {cotizacion,datos}=resumen

  return (
    <Contenedor>
      <Header
        titulo="Cotizador de seguros"
      />
      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
        /> 
        <Resumen
          datos={datos}
        />     
        <Resultado
          cotizacion={cotizacion}
        />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const ContenedorFormulario = styled.form`
  background-color: #FFF;
  padding: 3rem;
`