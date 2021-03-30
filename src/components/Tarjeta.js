import React from "react";

function Tarjeta(props) {
    return(
        <React.Fragment>
            <img src= {props.datoTarjeta.image} alt=""/>
            <div>
                <h3 style={{color:"blue", marginBottom:"2%"}}>{props.datoTarjeta.name}</h3>
                <p>{props.datoTarjeta.status + " - " + props.datoTarjeta.species} </p>
                <p>{"Origin: " + props.datoTarjeta.origin.name}</p>
            </div>
        </React.Fragment>
    );
};

export default Tarjeta;