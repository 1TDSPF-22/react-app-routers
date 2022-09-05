import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'
export default function Menu() {
    return (
        <header>
            <nav className='navbar1'>
                    <Link to='/'>Home</Link>
                    <Link to='/produtos'>Produtos</Link>
                    <Link to='/servicos'>Serviços</Link>
                    <Link to='/nv'>Novo Valor</Link>
                    <Link to='/form'>Formulário</Link>      
            </nav>
        </header>
    )
}