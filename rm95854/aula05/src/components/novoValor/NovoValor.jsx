import React, { useState } from "react"

//Nome da função sempre é o nome do componente
export default function NovoValor() {

     const[frase,setFrase] = useState('')
//     const minhaFuncao = ()=>{
//     setFrase('ALE')
// }

    return(
        <div>
            <h1>Vamos escrever uma frase.</h1>
            <div>
                <label>Motivação: </label>
                {/* Sempre utilizar atributo name*** para recuperar o input */}
                <input type="text" name="txtFrase" onChange={(e) => setFrase(e.target.value)}/>
                <p>Motivação do dia: <span>{frase}</span></p>
            </div>
        </div>
    )
}