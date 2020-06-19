import React, { useState } from 'react'
import $ from'jquery';

export default function EditUsuario(props) {

    const { usuarioActual, editarUsuBD } = props;
    const [newNombre, setNewNombre] = useState("");

    const editarUsu = () => {
        if(newNombre!==usuarioActual.nombre && newNombre!=="")
        {
            editarUsuBD(newNombre);
        }

        $("#modalEditar").modal('toggle');
    }

    return (
        <div className="modal " id="modalEditar" role="dialog" aria-labelledby="modalEditar" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Cambia tu nombre</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body containerScroll" style={{ overflow: "auto", height: "70px" }} >
                     
                        <input type="text" className="form-control" 
                            onChange={(e) => {
                                
                                setNewNombre(e.target.value);
                                
                              }} 
                        />



                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary" onClick={() => {editarUsu()}}>Editar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
