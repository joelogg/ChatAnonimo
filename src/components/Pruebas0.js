import React, { useState } from 'react'
import Pruebas from './Pruebas1'

export default function Principal() {

    const [ingredienteFavorito, setIngredienteFavorito] = useState(null);


    var seleccionar = (ingrediente) => {
        setIngredienteFavorito(ingrediente);
    }

    return (
        <div>
            {ingredienteFavorito ? <p>
                <strong>Ha seleccsioansdo: </strong>
                {ingredienteFavorito}
            </p>: <p>No has seleccioando</p>}
            <Pruebas
                titulo="Hola"
                seleccionar={seleccionar}
            />
        </div>
    )
}







