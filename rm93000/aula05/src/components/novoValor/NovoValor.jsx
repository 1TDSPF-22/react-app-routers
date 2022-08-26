import React, {useState} from "react";

export default function NovoValor(){
    
    const [frase, setFrase] = useState('')

    return(
        <>
            <h2>Vamos escrever uma frase</h2>
            <label>Motivação: </label>
            <input type="text" name="txtFrase" placeholder="Digite uma frase!" onChange={(e)=>setFrase(e.target.value)} />
            <p>Motivação do dia: {frase}</p>
        </>
    )
}