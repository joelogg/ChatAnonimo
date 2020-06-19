import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Principal from './Pruebas0';
import User from './Pruebas2';
import Chat from './Pruebas3';
import Error from './Error';
import Privados from './Privados';
import Grupal from './Grupal';
import Categorias from './Categorias';

import '../assets/css/general.css';




export default function MyRouter() {


    return (
        <div className="col-lg-8 main-content mt-3">
            <div className="row main-content-row">
                {
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/:idU?' component={Privados}></Route>

                        <Route exact path='/privados/:idU?' component={Privados}></Route>
                        <Route exact path='/grupal/:idU?' component={Grupal}></Route>
                        <Route exact path='/categoria/:idU?' component={Categorias}></Route>

                        <Route exact path='/prueba2' component={Principal}></Route>
                        <Route exact path='/rutaPrueba' component={User}></Route>
                        <Route exact path='/chat' component={Chat}></Route>



                        <Route component={Error}></Route>
                    </Switch>
                </BrowserRouter>
                }
            </div>
        </div>

    )
}
