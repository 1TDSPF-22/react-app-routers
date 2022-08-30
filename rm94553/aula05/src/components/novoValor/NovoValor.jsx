import React from "react"
import { useState } from "react"

export default function NovoValor() {

    const[frase,setFrase] = useState('')

    // const minhaFuncao = ()=>{
    //     setFrase("ALE")
    // }

    return(
        <div>
            <h1>Vamos escrever uma frase.</h1>
            <div>
                <label>MOTIVAÇÃO: </label>
                <input type="text" name="txtFrase" onChange={(e) => setFrase(e.target.value)}/>
                <p>Motivação do dia : <span>{frase}</span></p>
            </div>
            <div>
                
            </div>
        </div>
        )
}
