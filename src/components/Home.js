import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            home
            <NavLink className="nav_link" to='privados/' activeClassName="activoMenuChat">Ir a Chat</NavLink>
        </div>
    )
}
