import React from 'react'
import { useState } from 'react'

export default function Formulario(){

    const [carro, setCarro] = useState({ "marca": "", "modelo": "" })

    const mostraCarro = (e) => {

        //Realixando a destruturação
        const{name, value} = e.target

        //Criar uma validação para descobrir qual é o campo
        // para pode realizar o preenchimento correto.
        if (name == 'marca'){
            setCarro({"marca":value, "modelo": carro.modelo})
        }else if(name == 'modelo') {
            setCarro({"marca":carro.marca,"modelo": value})
        }

    }

    return(
        <div>
            <h2>DADOS DO VEÍCULOS</h2>
            <label>Marca :</label>
            <input type="text" name="marca" onChange={mostraCarro} /><br/>
            <label>Modelo :</label>
            <input type="text name="modelo" /><br/>
    
            <p>Meu carro é um <span>Marca: <b>{carro.marca}</b> </span> - <span>Modelo> <b>{carro.modelo}</b> </span></p>
        </div>

    )
}