import React, { useState } from 'react'

export default function UnUsuarioModal(props) {

    const { usuario, addUser, deleteUser } = props;
    const [select, setSelect] = useState(false);

    const selectUsu = () => {
        
        if(select)
        {
            deleteUser(usuario.id);
        }
        else
        {
            addUser(usuario.id, usuario.nombre, usuario.color);
        }

        setSelect(!select)
    };

    return (
        <div className="d-flex justify-content-start mb-2 divUnChat"
            style={{ backgroundColor: select ? "#DDF": "inherit" }}
            onClick={selectUsu}
        >
            <div className="avatarIcon" style={{ backgroundColor: usuario.color }} >
                {usuario.nombre.substr(0, 2).toUpperCase()}
            </div>
            <div className="nomUsuList">
                {usuario.nombre}
            </div>
        </div>
    )
}
