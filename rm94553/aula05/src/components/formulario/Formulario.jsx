import React from "react";
import { useState } from "react";
import './Formulario.css'

export default function Formulario() {

    const [carro, setCarro] = useState({ "marca": "", "modelo": "" })

    const mostraCarro = (e) => {

        //Realizando a desestruturação
        const { name, value } = e.target

        //Criar uma validação para descobrir qual é o campo
        //para poder realizar o preenchimento correto
        if (name == 'marca') {
            setCarro({ "marca": value, "modelo": carro.modelo })
        } else if (name == 'modelo') {
            setCarro({ "marca": carro.marca, "modelo": value })
        }

    }

    return (
        <div>
            <h2>DADOS DO VEÍCULO</h2>
            <div>
                <form action="" method="get">
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="">Marca</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="marca" placeholder="marca" onChange={mostraCarro} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="">Modelo</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="modelo" placeholder="modelo" onChange={mostraCarro} />
                        </div>
                    </div>

                </form>
            </div>
            <p>Meu carro é um <span>Marca:{carro.marca} </span> <span>Modelo:{carro.modelo}</span></p>
        </div>
    )
}

