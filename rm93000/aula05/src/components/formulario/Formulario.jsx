import React, { useState } from "react";
import "./Formulario.css";

export default () => {
  const [carro, setCarro] = useState({ marca: "", modelo: "" }); // Objeto Json

  const mostraCarro = (e) => {
    // const pessoa = {
    //     nome: 'Mateus',
    //     idade: 20
    // }

    // const { nome,idade } = pessoa
    // console.log("O nome é : ", nome, " e a idade é ", idade

    //Realizando a desestruturação do formulario
    const { name, value } = e.target;

    //Criar uma validação para descobrir qual o campo correto para preenchimento
    if (name == "marca") {
      setCarro({ marca: value, modelo: carro.modelo });
    } else if (name == "modelo") {
      setCarro({ marca: carro.marca, modelo: value });
    }
  };

  return (
    <div>
      <h2>Dados do veículo</h2>
      <div>
        <form action="" method="get">
          <div className="row">
            <div className="label1">
              <label>Marca: </label>
            </div>
            <div className="input1">
              <input type="text" name="marca" onChange={mostraCarro} placeholder='Digite a marca aqui'/>
            </div>
          </div>
          <div className="row">
            <div className="label1">
              <label>Modelo</label>
            </div>
            <div className="input1">
              <input type="text" name="modelo" onChange={mostraCarro} placeholder="Digite o modelo aqui"/>
            </div>
          </div>
        </form>
      </div>
      <button onClick={mostraCarro}>Desestruturação</button>
      <p>
        Meu carro é um <span>Marca: {carro.marca}</span> -{" "}
        <span>Modelo: {carro.modelo}</span>
      </p>
    </div>
  );
};
