import React, { Component} from 'react'
import { writeStorage} from '@rehooks/local-storage';

import '../assets/css/general.css';
import LadoIzquiedo from './LadoIzquiedo';
import LadoDerecho from './LadoDerecho';

export default class Categorias extends Component {

    state = {}
    
    constructor(props) 
    {
        super(props);
        this.idUEntrante = props.match.params.idU;

        this.state = 
        {
            usuActual: {
                id: ""+parseInt(Math.random() * 100000000000),
                nombre: "Anónimo",
                color: '#' + Math.random().toString(16).substr(2, 6)
        
            },

            usuarios: JSON.parse(localStorage.getItem('usuarios')),
            mensajesRealizados: JSON.parse(localStorage.getItem('mensajesRealizadosCategoria')),
            listMensajes: JSON.parse(localStorage.getItem('usulistMensajesCategoria')),

            nombreChat: null,
            idChatSeleccionado: null,
            tipoListMensajesRealizado: 'mensajesRealizadosCategoria',
            tipoListMensajes: 'usulistMensajesCategoria'
        }
        
    }
    
    componentWillMount()
    {    
        if(!this.state.usuarios)
        {
            writeStorage('usuarios', [])
        }

        if(!this.state.mensajesRealizados)
        {
            console.log("creando");
            
            writeStorage('mensajesRealizadosCategoria', [
                {
                    id:  ""+parseInt(Math.random() * 100000000000),
                    nombre: "Alimentos",
                    color: '#' + Math.random().toString(16).substr(2, 6)
                },
                {
                    id:  ""+parseInt(Math.random() * 100000000000),
                    nombre: "Casas",
                    color: '#' + Math.random().toString(16).substr(2, 6)
                },
                {
                    id:  ""+parseInt(Math.random() * 100000000000),
                    nombre: "Trabajo",
                    color: '#' + Math.random().toString(16).substr(2, 6)
                }
            ]);
        }

        if(!this.state.listMensajes)
        {
            writeStorage('usulistMensajesCategoria', [])
        }

        // Para crear un usario nuevo
        if(!this.idUEntrante)
        {
            const newUsuarios = [];
            if(this.state.usuarios)
            {
                for (let i = 0; i < this.state.usuarios.length; i++) 
                {
                    newUsuarios.push(this.state.usuarios[i])
                }
            }

            newUsuarios.push(this.state.usuActual);
            writeStorage('usuarios', newUsuarios )
        }
        else
        {
            const newUsuarios = [];
    
            var existe = false;
            var posUsuActual = 0;
            
            if(this.state.usuarios)
            {
                for (let i = 0; i < this.state.usuarios.length; i++) {
                    newUsuarios.push(this.state.usuarios[i])
                    if (this.state.usuarios[i].id === this.idUEntrante) {
                        existe = true;
                        posUsuActual = i
                    }
                }
            }
    
            if (existe) 
            {
                this.setState({
                    usuActual: newUsuarios[posUsuActual]
                });
            }
            else {
                const newUsu = {
                    id: ""+this.idUEntrante,
                    nombre: this.state.usuActual.nombre,
                    color: this.state.usuActual.color
            
                };

                this.setState({
                    usuActual: newUsu
                });
                newUsuarios.push(newUsu);
                writeStorage('usuarios', newUsuarios )
            }

        }
        



    }



    seleccionarUnChat = (id, nombre) => 
    {
        this.setState({
            idChatSeleccionado: id,
            nombreChat: nombre
        });
    };

    render() {

        return (
            <React.Fragment>
                <LadoIzquiedo
                    usuarioActual={this.state.usuActual}
                    seleccionarUnChat={this.seleccionarUnChat}   
                    tipoListMensajesRealizado = {this.state.tipoListMensajesRealizado} 
                />
                <LadoDerecho
                    nombreChat={this.state.nombreChat}
                    usuActual={this.state.usuActual}
                    idChatSeleccionado={this.state.idChatSeleccionado}
                    tipoListMensajes={this.state.tipoListMensajes}
                />
            </React.Fragment>
        )
    }
    
}

