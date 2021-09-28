import React from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';

import styled from '@emotion/styled';


function App() {
  return (
    <Contenedor>
      <Header
        titulo="Cotizador de seguros"
      />
      <ContenedorFormulario>
        <Formulario />      
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto
`

const ContenedorFormulario = styled.form`
  background-color: #FFF;
  padding: 3rem;
`