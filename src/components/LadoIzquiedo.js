import React, { useState } from 'react'
import { FcPlus } from "react-icons/fc";
import { useLocalStorage } from '@rehooks/local-storage';
import Menu from './Menu';
import UsuarioActual from './UsuarioActual';
import ChatsRealizado from './ChatsRealizado';
import NuevoChat from './NuevoChat';



export default function LadoIzquiedo(props) {

    const { seleccionarUnChat, usuarioActual, tipoListMensajesRealizado } = props;
    const [mensajesRealizadosPrivados, setMensajesRealizadosPrivados] = useLocalStorage('mensajesRealizadosPrivados');
    const [mensajesRealizadosGrupal, setMensajesRealizadosGrupal] = useLocalStorage('mensajesRealizadosGrupal');
    const [mensajesRealizadosCategoria, setMensajesRealizadosCategoria] = useLocalStorage('mensajesRealizadosCategoria');
    console.log(mensajesRealizadosCategoria);

    const [chatRealizadoSelect, setChatRealizadoSelect] = useState('');


    const guardarChat = (idChatRealizado, integrantes, nombreChat, colorChat, tipo) => {

        const mensajesRealizadosAux = [];

        if (tipo === 'mensajesRealizadosPrivados') {

            for (let i = 0; i < mensajesRealizadosPrivados.length; i++) {
                mensajesRealizadosAux.push(mensajesRealizadosPrivados[i]);
            }

            mensajesRealizadosAux.push({
                id: idChatRealizado,
                usu1: {
                    id: usuarioActual.id,
                    nombre: usuarioActual.nombre,
                    color: usuarioActual.color,
                },
                usu2: {
                    id: integrantes,
                    nombre: nombreChat,
                    color: colorChat,
                }
            });

            setMensajesRealizadosPrivados(mensajesRealizadosAux);
        }
        else if (tipo === 'mensajesRealizadosGrupal') {
            console.log(idChatRealizado, integrantes, nombreChat, colorChat);
            for (let i = 0; i < mensajesRealizadosGrupal.length; i++) {
                mensajesRealizadosAux.push(mensajesRealizadosGrupal[i]);
            }

            mensajesRealizadosAux.push({
                id: idChatRealizado,
                nombre: nombreChat,
                color: colorChat,
                integrantes: integrantes
            });

            setMensajesRealizadosGrupal(mensajesRealizadosAux);
        }

    }

    return (
        <div className="col-4 divLeft">
            <UsuarioActual usuarioActual={usuarioActual} tipoListMensajesRealizado={tipoListMensajesRealizado}/>

            <div className="preMenu" data-toggle="modal" data-target="#exampleModal">
                <span> Nuevo chat </span> <FcPlus />
            </div>

            <Menu usuarioActual={usuarioActual} />

            <hr />
            <div id="contenListChats" className="containerScroll">

                {mensajesRealizadosPrivados && mensajesRealizadosPrivados.length > 0 && tipoListMensajesRealizado === "mensajesRealizadosPrivados" &&
                    mensajesRealizadosPrivados.map((mensajeRealizado, index) => {

                        if (mensajeRealizado.usu1.id === usuarioActual.id) {
                            return (


                                <ChatsRealizado
                                    key={index}
                                    mensajeRealizadoId={mensajeRealizado.id}
                                    mensajeRealizado={mensajeRealizado.usu2}
                                    seleccionarUnChat={seleccionarUnChat}
                                    usuarioActual={usuarioActual}
                                    chatRealizadoSelect={chatRealizadoSelect}
                                    setChatRealizadoSelect={setChatRealizadoSelect}
                                />

                            );
                        }
                        else if (mensajeRealizado.usu2.id === usuarioActual.id) {
                            return (


                                <ChatsRealizado
                                    key={index}
                                    mensajeRealizadoId={mensajeRealizado.id}
                                    mensajeRealizado={mensajeRealizado.usu1}
                                    seleccionarUnChat={seleccionarUnChat}
                                    usuarioActual={usuarioActual}
                                    chatRealizadoSelect={chatRealizadoSelect}
                                    setChatRealizadoSelect={setChatRealizadoSelect}
                                />

                            );
                        }

                    })
                }

                {mensajesRealizadosGrupal && mensajesRealizadosGrupal.length > 0 && tipoListMensajesRealizado === "mensajesRealizadosGrupal" &&
                    mensajesRealizadosGrupal.map((mensajeRealizado, index) => {

                        for (let i = 0; i < mensajeRealizado.integrantes.length; i++) {
                            if (mensajeRealizado.integrantes[i] === usuarioActual.id) {
                                return (
                                    <ChatsRealizado
                                        key={index}
                                        mensajeRealizadoId={mensajeRealizado.id}
                                        mensajeRealizado={mensajeRealizado}
                                        seleccionarUnChat={seleccionarUnChat}
                                        usuarioActual={usuarioActual}
                                        chatRealizadoSelect={chatRealizadoSelect}
                                        setChatRealizadoSelect={setChatRealizadoSelect}
                                    />

                                );
                            }
                        }


                    })
                }

                {
                    mensajesRealizadosCategoria && mensajesRealizadosCategoria.length > 0 && tipoListMensajesRealizado === "mensajesRealizadosCategoria" &&
                    mensajesRealizadosCategoria.map((mensajeRealizado, index) => {
                        return (
                            <ChatsRealizado
                                key={index}
                                mensajeRealizadoId={mensajeRealizado.id}
                                mensajeRealizado={mensajeRealizado}
                                seleccionarUnChat={seleccionarUnChat}
                                usuarioActual={usuarioActual}
                                chatRealizadoSelect={chatRealizadoSelect}
                                setChatRealizadoSelect={setChatRealizadoSelect}
                            />

                        );


                    })
                }

            </div>
            <NuevoChat guardarChat={guardarChat} usuarioActual={usuarioActual} />
        </div>
    )
}
