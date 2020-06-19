import React from 'react'

export default function UnMensaje(props) {
    const { unMensaje } = props;
    return (
        <div className="d-flex justify-content-start mb-2 divUnChat" >
            <div className="avatarIcon" style={{ backgroundColor: unMensaje.color }} >
                {unMensaje.nombre.substr(0, 2).toUpperCase()}
            </div>
            <div className="divUnMensaje">
                <div className="unMensajeTitle">{unMensaje.nombre}</div>
                <div className="unMensajeCOntenido">{unMensaje.mensaje}</div>


            </div>
        </div>
    )
}
