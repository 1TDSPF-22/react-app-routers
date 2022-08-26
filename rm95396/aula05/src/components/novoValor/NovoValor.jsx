import React, { useState } from "react"

export default function NovoValor(){

    const[frase,setFrase] = useState('')
    
    // const minhaFuncao = ()=>{
    //     setFrase("INGRID")
    //}
    // => (isso significa que vc esta criando uma eronfuncition)

    return(

      <div>
        <h1>TESTE</h1>
        <div>
            <h2>Vamos escrever uma frase:</h2>
            <label For="fg">Motivação:</label>
            <input type="text" name="textFrase" onChange={(e)=> setFrase(e.target.value)}/>
            <p>Motivação do dia: <span>{frase}</span></p>

        </div>
        
      </div>
    )
    

}