import React, { useState, useEffect } from 'react'
import { useLocalStorage } from '@rehooks/local-storage';
import DivMensajes from './DivMensajes';

export default function LadoDerecho(props) {

    const { nombreChat, usuActual, idChatSeleccionado, tipoListMensajes } = props;

    const [listMensajesPrivados, setListMensajesPrivados] = useLocalStorage('usulistMensajesPrivados');
    const [listMensajesGrupal, setListMensajesGrupal] = useLocalStorage('usulistMensajesGrupal');
    const [listMensajesCategoria, setListMensajesCategoria] = useLocalStorage('usulistMensajesCategoria');

    const mensajeNew = React.createRef();
    const [listMensajes, setListMensajes] = useState([]);

    useEffect(() => {

        if (nombreChat !== null) {
            const listMensajesAux = [];
            if (tipoListMensajes === 'usulistMensajesPrivados') {
                for (let i = 0; i < listMensajesPrivados.length; i++) {
                    if (listMensajesPrivados[i].idChat === idChatSeleccionado) {
                        listMensajesAux.push(listMensajesPrivados[i]);
                    }
                }
                setListMensajes(listMensajesAux);
            }

            else if (tipoListMensajes === 'usulistMensajesGrupal') {
                for (let i = 0; i < listMensajesGrupal.length; i++) {
                    if (listMensajesGrupal[i].idChat === idChatSeleccionado) {
                        listMensajesAux.push(listMensajesGrupal[i]);
                    }
                }
                setListMensajes(listMensajesAux);
            }
            else if (tipoListMensajes === 'usulistMensajesCategoria') {
                for (let i = 0; i < listMensajesCategoria.length; i++) {
                    if (listMensajesCategoria[i].idChat === idChatSeleccionado) {
                        listMensajesAux.push(listMensajesCategoria[i]);
                    }
                }
                setListMensajes(listMensajesAux);
            }

        }

    }, [idChatSeleccionado, listMensajesPrivados, listMensajesGrupal, listMensajesCategoria]);


    const crearMensaje = () => {
        const mensaje = mensajeNew.current.value;

        if (mensaje !== "") {
            const listMensajesAux = [];
            if (tipoListMensajes === 'usulistMensajesPrivados') {
                for (let i = 0; i < listMensajesPrivados.length; i++) {
                    listMensajesAux.push(listMensajesPrivados[i]);
                }

                listMensajesAux.push({
                    id: "" + parseInt(Math.random() * 100000000000),
                    idChat: idChatSeleccionado,
                    idCreador: usuActual.id,
                    nombre: usuActual.nombre,
                    color: usuActual.color,
                    mensaje: mensaje,
                    eliminados: []
                });

                setListMensajesPrivados(listMensajesAux);


                const listMensajesAux2 = [];
                for (let i = 0; i < listMensajesAux.length; i++) {
                    if (listMensajesAux[i].idChat === idChatSeleccionado) {
                        listMensajesAux2.push(listMensajesAux[i]);
                    }
                }

                setListMensajes(listMensajesAux2);

            }
            else if (tipoListMensajes === 'usulistMensajesGrupal') {

                for (let i = 0; i < listMensajesGrupal.length; i++) {
                    listMensajesAux.push(listMensajesGrupal[i]);
                }

                listMensajesAux.push({
                    id: "" + parseInt(Math.random() * 100000000000),
                    idChat: idChatSeleccionado,
                    idCreador: usuActual.id,
                    nombre: usuActual.nombre,
                    color: usuActual.color,
                    mensaje: mensaje,
                    eliminados: []
                });

                setListMensajesGrupal(listMensajesAux);


                const listMensajesAux2 = [];
                for (let i = 0; i < listMensajesAux.length; i++) {
                    if (listMensajesAux[i].idChat === idChatSeleccionado) {
                        listMensajesAux2.push(listMensajesAux[i]);
                    }
                }

                setListMensajes(listMensajesAux2);

            }
            else if (tipoListMensajes === 'usulistMensajesCategoria') {

                for (let i = 0; i < listMensajesCategoria.length; i++) {
                    listMensajesAux.push(listMensajesCategoria[i]);
                }

                listMensajesAux.push({
                    id: "" + parseInt(Math.random() * 100000000000),
                    idChat: idChatSeleccionado,
                    idCreador: usuActual.id,
                    nombre: usuActual.nombre,
                    color: usuActual.color,
                    mensaje: mensaje,
                    eliminados: []
                });

                setListMensajesCategoria(listMensajesAux);


                const listMensajesAux2 = [];
                for (let i = 0; i < listMensajesAux.length; i++) {
                    if (listMensajesAux[i].idChat === idChatSeleccionado) {
                        listMensajesAux2.push(listMensajesAux[i]);
                    }
                }

                setListMensajes(listMensajesAux2);

            }


            document.getElementById('inputMensaje').value = "";
        }
    }

    const precionarEnter = (e) => {
        if (e.key === 'Enter') {
            crearMensaje()
        }
    }
    return (
        <div className="col-8 divRight">
            <div id="divTitChat">
                <span>{nombreChat}</span>
            </div>

            <DivMensajes listMensajes={listMensajes} />


            {nombreChat &&
                <div id="divEnviar" className="d-flex">
                    <input type="text" className="form-control" id="inputMensaje" ref={mensajeNew}
                        onKeyUp={precionarEnter}
                    />
                    <button className="btn btn-outline-secondary" onClick={crearMensaje}> Enviar</button>
                </div>
            }
        </div>
    )
}
