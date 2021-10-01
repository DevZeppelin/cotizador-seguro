import React from 'react'
import styled from '@emotion/styled'
import { primerMayuscula } from '../helper'
import PropTypes from 'prop-types'

//recibo datos de App.js
const Resumen = ({datos}) => {
    
    //extraigo valores para no poner .marca
    const {marca, year, plan} = datos

    if (marca===''||year===''||plan===''){
        return null
    }

    //de esta manera si detecta valores vacios nunca llega al otro return y no muestra el mensaje en el formulario. esta es una validacion muy comun que se suele ver en codigo ajeno, y no tenemos tantos ternarios (que era lo mas simple)   
    
    return (
        <ContenedorResumen>
            <h2>
                Resumen de Cotizacion
            </h2>
            <ul>
                <li>Marca: {primerMayuscula(marca)} </li>
                <li>Plan: {primerMayuscula(plan)} </li>
                <li>Año del auto: {year} </li>
                {/* voy a crear un helper para mostrar las primeras letras en mayuscula llamado primerMayuscula */}
            </ul>
        </ContenedorResumen>
    )
}

Resumen.propTypes = {
    datos : PropTypes.object.isRequired
}

export default Resumen

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem; 
`
