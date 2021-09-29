import React from 'react'
import styled from '@emotion/styled'

//extraigo la cotizacion desde App.js
const Resultado = ({cotizacion}) => {

    //misma validacion que hice recien pero de otra forma
   return (
       
            
            (cotizacion === 0)
            ? <Mensaje>Elige marca, año y plan</Mensaje>
            : (
            <ResultadoCotizacion>
                <TextoCotizacion>El total es: $ {cotizacion}</TextoCotizacion>
            </ResultadoCotizacion>
            )
       
    )
}

export default Resultado

const TextoCotizacion = styled.p`
    color: darkblue;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26c6da;
    background-color: rgb(127,224,237);
    margin-top: 1rem;
    position: relative;
`

const Mensaje = styled.p`
    background-color: rgb(127,224,237);
    margin-top: 1rem;
    padding: 1rem;
    text-align: center;
`
