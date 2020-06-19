import React, {useEffect} from 'react'
import UnMensaje from './UnMensaje';
import $ from'jquery';

export default function DivMensajes(props) {
    const { listMensajes } = props;

    useEffect(() => {
        $('#divMensajes').scrollTop($('#divMensajes').height()+1000);
        
    });

    return (
        <div id="divMensajes" className="containerScroll">
            {listMensajes &&
                listMensajes.map((unMensaje, index) => {
                    return (
                        <UnMensaje
                            key={index}
                            unMensaje={unMensaje}
                        />

                    );
                })
            }
        </div>
    )
}


