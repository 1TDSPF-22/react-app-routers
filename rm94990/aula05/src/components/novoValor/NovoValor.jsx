import React from "react";

export default function NovoValor(){
    return(
        <div>
            <h1>Vamos escrever uma frase.</h1>
            <div>
                <label>MOTIVAÇÃO: </label>
                <input type="text" name="txtFrase" />
                <p>Motivação do dia: <span></span></p>
            </div>
        </div>

    )
}