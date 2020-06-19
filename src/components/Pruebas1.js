import React, { useState } from 'react';


export const FruitContext = React.createContext();

const Pruebas = (props) => {

    const { titulo, seleccionar } = props
    const [contador, setCount] = useState(0);

    var receta = {
        ingredientes: ['Tomate', 'Queso', 'Jamonin']
    };

    var sumar = (e) => {
        setCount(contador + 1)
    }

    var restar = (e) => {
        setCount(contador - 1)
    }





    return (
        <div>
            <h1>{titulo}</h1>

            <ol>
                {
                    receta.ingredientes.map((ingrediente, i) => {
                        return (
                            <li key={i}>
                                {ingrediente}
                                <button onClick={() => { seleccionar(ingrediente) }}>Seleccionar</button>
                            </li>
                        );
                    })
                }
            </ol>

            <p>
                Cotador: {contador}
            </p>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>


        </div>
    )
}


export default Pruebas;