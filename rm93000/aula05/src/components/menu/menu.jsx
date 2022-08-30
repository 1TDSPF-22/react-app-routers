import React from 'react';
import { Link } from 'react-router-dom'
import './Menu.css'

export default function Menu() {
    return (
        <header>
            <nav className="navBar1">
                <Link to='/'>Home</Link>
                <Link to='/produtos'>Produtos</Link>
                <Link to='/servicos'>Servicos</Link>
                <Link to='/motivacao'>Motivacao</Link>
                <Link to='/formulario'>Formulario</Link>
            </nav>
        </header>

    )
}
