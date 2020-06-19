import React from 'react';
import {useEffect} from 'react';
//import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import MyRouter from './components/MyRouter';

import'bootstrap/dist/css/bootstrap.min.css';
//import $ from'jquery';
//import Popper from'popper.js';
import'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/css/navBar.css';

function App() {

    /*useEffect(() => {
        //$("#exampleModal").modal('toggle');
        //$("#modalEditar").modal('toggle');
    });*/

    return (
        <div>
            <MyRouter />
        </div>
    );
}

export default App;
