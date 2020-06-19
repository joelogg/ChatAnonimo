import React from 'react'

export default function ChatsRealizado(props) {
    const { mensajeRealizadoId, mensajeRealizado, seleccionarUnChat, chatRealizadoSelect, setChatRealizadoSelect} = props;
    
    return (
        <div className="d-flex justify-content-start mb-2 divUnChat"
            style={{ backgroundColor: chatRealizadoSelect=== mensajeRealizado.id? "rgb(142, 45, 226)": "inherit" }}
            onClick={() => 
            {
                seleccionarUnChat(mensajeRealizadoId, mensajeRealizado.nombre);
                setChatRealizadoSelect(mensajeRealizado.id)
            }}>
            <div className="avatarIcon" style={{ backgroundColor: mensajeRealizado.color }} >
                {mensajeRealizado.nombre.substr(0, 2).toUpperCase()}
            </div>
            <div className="nomUsuList">
                {mensajeRealizado.nombre}
            </div>
        </div>
    )
}
