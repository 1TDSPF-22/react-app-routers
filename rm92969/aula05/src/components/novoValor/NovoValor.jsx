import React from "react"
import { useState } from "react"

export default function NovoValor(){

    const [frase, setFrase] = useState('')

   // const minhaFuncao = ()=>{
     //   setFrase("ALE")
    // }
    

    return(
        <div>
            <h1>Vamos escrever uma frase</h1>
            <div>
                <label>Motivação</label>
                <input type="text" name="txtFrase" onChange={()=> setFrase(e.target.value)} id="" />
                <p>Motivação do dia : <span>{frase}</span></p>
            </div>
            <div>
               
            </div>
        </div>
    )
}