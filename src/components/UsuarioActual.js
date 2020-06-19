import React, { useState, useEffect } from 'react'
import { useLocalStorage } from '@rehooks/local-storage';
import { FaEdit } from "react-icons/fa";
import EditUsuario from './EditUsuario';


export default function UsuarioActual(props) {
    const { usuarioActual, tipoListMensajesRealizado } = props;

    const [usuarios, setUsuarios] = useLocalStorage('usuarios');
    const [usuarioActualAux, setUsuarioActualAux] = useState(usuarioActual);

    const [mensajesRealizadosPrivados, setMensajesRealizadosPrivados] = useLocalStorage('mensajesRealizadosPrivados');
    const [usulistMensajesPrivados, setUsulistMensajesPrivados] = useLocalStorage('usulistMensajesPrivados');

    const [usulistMensajesGrupal, setUsulistMensajesGrupal] = useLocalStorage('usulistMensajesGrupal');
    const [usulistMensajesCategoria, setUsulistMensajesCategoria] = useLocalStorage('usulistMensajesCategoria');


    const editarUsuBD = (newNom) => {
        //Cambio Usuario ACtual
        const usuariosAux = [];
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].id === usuarioActual.id) {
                usuariosAux.push({
                    id: usuarioActual.id,
                    nombre: newNom,
                    color: usuarioActual.color
                });
                setUsuarioActualAux({
                    id: usuarioActual.id,
                    nombre: newNom,
                    color: usuarioActual.color
                });


            }
            else {
                usuariosAux.push(usuarios[i]);
            }
        }

        cambiarListMensajesRealizados(usuarioActual.id, newNom);
        cambiarListMensajes(usuarioActual.id, newNom);
        setUsuarios(usuariosAux);
    }

    const cambiarListMensajesRealizados = (idUsu, nombre) => {

        const listAux = [];
        if (mensajesRealizadosPrivados) {
            for (let i = 0; i < mensajesRealizadosPrivados.length; i++) {
                const menAux = mensajesRealizadosPrivados[i];

                if (menAux.usu1.id === idUsu) {
                    listAux.push({
                        id: menAux.id,
                        usu1: { id: menAux.usu1.id, nombre: nombre, color: menAux.usu1.color },
                        usu2: { id: menAux.usu2.id, nombre: menAux.usu2.nombre, color: menAux.usu2.color }
                    });
                }
                else if (menAux.usu2.id === idUsu) {
                    listAux.push({
                        id: menAux.id,
                        usu1: { id: menAux.usu1.id, nombre: menAux.usu1.nombre, color: menAux.usu1.color },
                        usu2: { id: menAux.usu2.id, nombre: nombre, color: menAux.usu2.color }
                    });
                }
                else {
                    listAux.push(menAux);
                }
            }

            setMensajesRealizadosPrivados(listAux);
        }

    };

    const cambiarListMensajes = (idUsu, nombre) => {

        if (usulistMensajesPrivados) {
            const listAux = [];
            for (let i = 0; i < usulistMensajesPrivados.length; i++) {
                const menAux = usulistMensajesPrivados[i];

                if (menAux.idCreador === idUsu) {
                    listAux.push({
                        id: menAux.id,
                        idChat: menAux.idChat,
                        idCreador: menAux.idCreador,
                        nombre: nombre,
                        mensaje: menAux.mensaje,
                        color: menAux.color,
                        eliminados: menAux.eliminados,
                    });
                }
                else {
                    listAux.push(menAux);
                }
            }

            setUsulistMensajesPrivados(listAux);
        }

        if (usulistMensajesGrupal) {
            const listAux2 = [];
            for (let i = 0; i < usulistMensajesGrupal.length; i++) {
                const menAux = usulistMensajesGrupal[i];

                if (menAux.idCreador === idUsu) {
                    listAux2.push({
                        id: menAux.id,
                        idChat: menAux.idChat,
                        idCreador: menAux.idCreador,
                        nombre: nombre,
                        mensaje: menAux.mensaje,
                        color: menAux.color,
                        eliminados: menAux.eliminados,
                    });
                }
                else {
                    listAux2.push(menAux);
                }
            }

            setUsulistMensajesGrupal(listAux2);
        }

        if (usulistMensajesCategoria) {
            const listAux3 = [];
            for (let i = 0; i < usulistMensajesCategoria.length; i++) {
                const menAux = usulistMensajesCategoria[i];

                if (menAux.idCreador === idUsu) {
                    listAux3.push({
                        id: menAux.id,
                        idChat: menAux.idChat,
                        idCreador: menAux.idCreador,
                        nombre: nombre,
                        mensaje: menAux.mensaje,
                        color: menAux.color,
                        eliminados: menAux.eliminados,
                    });
                }
                else {
                    listAux3.push(menAux);
                }
            }

            setUsulistMensajesCategoria(listAux3);
        }

    };

    return (
        <React.Fragment>
            <div className="d-flex justify-content-start divUsuActual"
                data-toggle="modal" data-target="#modalEditar"
            >
                {
                    usuarioActualAux &&
                    <React.Fragment>
                        <div className="iconPrincipal" style={{ backgroundColor: usuarioActualAux.color }} >
                            {usuarioActualAux.nombre.substr(0, 2).toUpperCase()}
                        </div>
                    </React.Fragment>
                }
                <div className="nomUsuPrincipal">
                    {usuarioActualAux && usuarioActualAux.nombre}
                    <FaEdit className="ml-2" />
                </div>
            </div>
            <EditUsuario usuarioActual={usuarioActualAux} editarUsuBD={editarUsuBD} />
        </React.Fragment>
    )
}
