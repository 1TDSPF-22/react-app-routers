import React from "react";

export default function Formulario(){
    const [carro, setCarro] = useState({'marca':'', 'modelo': ''})

    const mostraCarro = (e)  => {

        const{ name, value } = e.target
        if (name == 'marca') {
            setCarro({"marca": value, "modelo": carro.modelo})
        }else if(name == 'modelo'){
            setCarro({"marca":carro.marca,"modelo": value})
        }


    }

    return(
        <div>
            <h2>DADOS DO VEÍCULO</h2>
            <label>Marca:</label>
            <input type="text" name="marca" onChange={mostraCarro} /><br/>
            <label>Modelo:</label>
            <input type="text" name="modelo" onChange={mostraCarro}/><br/>
            <button onClick={mostraCarro}>DESTRUCTURING</button>
            
            <p>Meu carro é um <span>Marca: <b>{carro.marca}</b></span> - <span>Modelo: 
            <b>{carro.modelo}</b></span></p>
        </div>
    )

}