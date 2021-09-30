import React from "react";
import './Spinner.css'

const Spinner = () => {
  return (
      //Copio el codigo fuente de la pagina: https://tobiasahlin.com/spinkit/
      //El CSS lo agregue en una hoja nueva, es otra forma a styled
      //Al final es Spinner lo configuro en el componente Formulario.js aplicando el timeout al state guardarResumen
    <div className="sk-chase">
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
    </div>
  );
};

export default Spinner;
