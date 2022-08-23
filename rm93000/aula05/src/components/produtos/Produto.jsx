import React from "react";

export default function Produto(){
    const produto = {
        backgroundColor: '#bff',
        height: '85vh',
        textAlign: 'center',
        color: '#7cc'
    }

    return( 
        <div style={produto}>
            <h1>Página de Produtos</h1>
            <p>Exemplo de página de produtos</p>
        </div>
        
    )
}