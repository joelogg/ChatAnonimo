import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Menu(props) {
    const { usuarioActual } = props;
    return (
        <div className="mb-3">
            <div className="d-flex justify-content-between mt-3">
                {usuarioActual &&
                    <React.Fragment>
                        <NavLink className="nav_link" to={'/privados/' + usuarioActual.id} activeClassName="activoMenuChat">Privados</NavLink>
                        <NavLink className="nav_link" to={'/grupal/' + usuarioActual.id} activeClassName="activoMenuChat">Grupal</NavLink>
                        <NavLink className="nav_link" to={'/categoria/' + usuarioActual.id} activeClassName="activoMenuChat">Categoria</NavLink>
                    </React.Fragment>
                }
            </div>
        </div>
    )
}
