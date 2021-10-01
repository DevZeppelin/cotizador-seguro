import React from 'react'
import styled from '@emotion/styled'
//agrego libreria de animacion: npm i react-transition-group
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'

//extraigo la cotizacion desde App.js
const Resultado = ({cotizacion}) => {

    //misma validacion que hice recien pero de otra forma
   return (
       
            
            (cotizacion === 0)
            ? <Mensaje>Elige marca, año y plan</Mensaje>
            :   (
                <TransitionGroup
                    component="span"
                    className="resultado"
                >
                {/* ERROR: aca en consola me sale un p dentro de otro p, que es imposible por eso cambio el componente de Transition Group por un span, y creo u span que envuelva cotizacion en TextoCotizacion */}
            
                    <CSSTransition
                        classNames="resultado"
                        key={cotizacion}
                        timeout={{enter: 500, exit: 500}}
                    >
                        <ResultadoCotizacion>
                        <TextoCotizacion>El total es: $ <span>{cotizacion}</span></TextoCotizacion>
                        </ResultadoCotizacion>
                    </CSSTransition>
                </TransitionGroup>
                )
       
    )
}

Resultado.propTypes = {
    cotizacion : PropTypes.number.isRequired
}
// en propTypes no hay enteros ni float, todo es number

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
