import React from 'react'

const Formulario = () => {
    return (
        <form>
            <div>
                <label>Marca</label>
                <select>
                    <option value="">--- Seleccione una opción ---</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiático</option>
                </select>
            </div>
        </form>
    )
}

export default Formulario
