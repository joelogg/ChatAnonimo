import React, { useState, useEffect } from 'react'
import UnUsuarioModal from './UnUsuarioModal';
import { useLocalStorage } from '@rehooks/local-storage';
import $ from 'jquery';

export default function NuevoChat(props) {

    const { guardarChat, usuarioActual, tipoListMensajesRealizado } = props;

    const [integrantes, setIntegrantes] = useState([]);
    const [esGrupo, setEsGrupo] = useState(false);
    const [nombreChat, setNombreChat] = useState('');
    const [nombreGrupo, setNombreChatGrupo] = useState('');
    const [colorChat, setColorChat] = useState('');


    const [usuarios] = useLocalStorage('usuarios', 0);


    useEffect(() => {
        setIntegrantes([usuarioActual.id]);
    }, []);

    const addUser = (idU, nombre, color) => {

        if (integrantes.length > 1) {
            setEsGrupo(true);
        }

        const newIntegrantes = [];
        for (let i = 0; i < integrantes.length; i++) {
            newIntegrantes.push(integrantes[i]);

        }
        newIntegrantes.push(idU);
        setIntegrantes(newIntegrantes);

        setNombreChat(nombre);
        setColorChat(color)
    };

    const deleteUser = (idU) => {
        if (integrantes.length <= 3) {
            setEsGrupo(false);
        }

        const newIntegrantes = [];
        for (let i = 0; i < integrantes.length; i++) {
            if (integrantes[i] !== idU) {
                newIntegrantes.push(integrantes[i]);
            }

        }
        setIntegrantes(newIntegrantes);

    };

    const crearChat = () => {
        $("#exampleModal").modal('toggle');

        if (esGrupo) {
            const idChatRealizado = "" + parseInt(Math.random() * 100000000000);
            const color = '#' + Math.random().toString(16).substr(2, 6);
            guardarChat(idChatRealizado, integrantes, nombreGrupo, color, 'mensajesRealizadosGrupal');
        }
        else {
            const idChatRealizado = "" + parseInt(Math.random() * 100000000000);
            guardarChat(idChatRealizado, integrantes[1], nombreChat, colorChat, 'mensajesRealizadosPrivados');
        }

    }

    return (
        <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body containerScroll" style={{ overflow: "auto", maxHeight: "400px" }} >

                        {
                            esGrupo === true &&
                            <div>
                                <label>Nombre del grupo: </label>
                                <input className="form-control" type="text" onChange={ (e) => {setNombreChatGrupo(e.target.value)}} />
                                <hr />
                            </div>
                        }


                        {usuarios &&
                            usuarios.map((usuario, index) => {
                                if (usuarioActual.id != usuario.id) {

                                    return (

                                        <UnUsuarioModal
                                            key={index}
                                            usuario={usuario}
                                            addUser={addUser}
                                            deleteUser={deleteUser}
                                        />

                                    );
                                }
                            })
                        }




                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" 
                            disabled={
                                esGrupo ? (nombreGrupo!=='' ? false : true) :
                                (integrantes.length >= 2 ? false : true)
                            } 
                            className="btn btn-primary" 
                            onClick={crearChat}
                        >
                            Crear Chat
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
