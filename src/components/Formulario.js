import React, { useState } from "react";
import styled from "@emotion/styled";
import { calcularMarca, obtenerDiferenciaYear, obtenerPlan } from "../helper";
import PropTypes from 'prop-types'



const Formulario = ({guardarResumen, guardarCargando}) => {
  const [datos, guardarDatos] = useState({
    marca: "",
    year: "",
    plan: "basico",
  });
  //por defecto marcara el check de basico

  //Agrego STATE de Error
  const [error, guardarError] = useState(false);

  //extraer valores del state
  const { marca, year, plan } = datos;

  //Leer datos del formulario y colocarlos en el state
  const obtenerInfoDelFormulario = (e) => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  //Evento Submit, que no anduvo por lo que use onClick en el boton
  const cotizarSeguro = e => {
    e.preventDefault();

    if(marca.trim() === "" || year.trim() === "" || plan.trim() === ""){
      guardarError(true);
      return;
    }
    guardarError(false);
    
    //COTIZACION
    //como base usaremos 2000 dolares
    
    let resultado = 2000
    
    //obtener diferencia de años
    
    const diferencia = obtenerDiferenciaYear(year)
    
    //por cada año restar el 5%
    resultado -= ((diferencia * 3) * resultado ) / 100
    
    //el americano subira un 15%, el europeo un 30% y el asiatico un 5%
    resultado = calcularMarca(marca) * resultado  
    
    //calcular incremento segun plan
    const incrementoPlan = obtenerPlan(plan)
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2)  
    
    //Agrega Spinner
    guardarCargando(true)

    setTimeout(()=>{

      //elimina el spinner luego de la sentencia de tiempo 1500
      guardarCargando(false)
     
      //lo guardo en prop enviada desde App.js. Paso info al componente principal
      guardarResumen({
      cotizacion: Number(resultado),
      datos
      //ERROR aca la consola me tira que "ccotizacion espera un string". Lo arreglo convirtiendo a number el resultado
      //En App.js>En State Resumen tengo la cotizacion>voy a Formulario >GuardarResumen >Ahi lo convierto a number porque lo esta pasando como un string
    })
    //puedo ver en la herramienta component en App.js los cambios en mi state
    }, 1500)
    
  };
    
    return (
      <form
     onSubmit={cotizarSeguro}
    >
      {error ? <Error>Complete todos los campos</Error> : null}
      <Campo>
        <Label>Marca</Label>
        <Select name="marca" value={marca} onChange={obtenerInfoDelFormulario}>
          <option value="">--- Seleccione una opción ---</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiático</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Año</Label>
        <Select name="year" value={year} onChange={obtenerInfoDelFormulario}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={obtenerInfoDelFormulario}
        />{" "}
        Básico
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={obtenerInfoDelFormulario}
        />{" "}
        Completo
        {/* El name tiene que ser el mismo para que elija el uno o el otro */}
      </Campo>
      <Button type="button" onClick={cotizarSeguro}>Cotizar</Button>
      {/* realmente el type del button debe ser submit, pero no me funcionó por eso lo hice asi */}
    </form>
  );
}

Formulario.propTypes = {
  guardarResumen : PropTypes.func.isRequired,
  guardarCargando : PropTypes.func.isRequired,
}
//Vi en App.js que eran las dos funciones a documentar

export default Formulario;



const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
`;

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const Label = styled.div`
  flex: 0 0 100px;
  /* 0 para el grow 0 para el shrink y una base de 100px */
`;
const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
  /* appearance le quita el aspecto natural y permite pasarle nuevas propiedades como border, etc */
`;
const InputRadio = styled.input`
  margin: 0 1rem;
`;
const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  /* SINTAXIS SIMILAR A SASS */
  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;