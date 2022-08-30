import React from "react";
import './formulario.css'
import { useState } from "rect";

export default function Formulario(){

    const[carro, setCarro] = useState({"marca":'', "modelo": ""})

    const mostrarCarro = (e) =>{
        //Realizando a desestruturação
        const{ name, value } = e.target

        if(name == 'marca'){
        setCarro({"marca": value, "modelo": carro.modelo})
        }else if(name == 'modelo'){
            setCarro({"marca": carro.marca, "modelo": value})

        }

    }
    return(
        <div>   
            <h2>Dados do Carro</h2>
            <div>
                <form action="">
                    <div className="row">
                        <div className="col-25">
                            <label>Marca :</label>
                        </div>
                            <div className="col-75">    
                                <input type="text" name="marca" onChange={mostrarCarro}/>
                            </div>    
                            <div className="col-50">
                                <label>Modelo :</label>
                            </div>
                            <div className="col-50">
                            <input type="text" name="modelo" onChange={mostrarCarro}/>
                            </div>
                </form>
            </div>
                <p>Meu carro é um 
                    <span>Marca: <b>{mostrarCarro}</b> </span> - <span>Modelo: <b>{mostrarCarro}</b></span></p>
        </div>
    )
}