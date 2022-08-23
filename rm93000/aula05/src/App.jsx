import React from "react";
import Home from "./components/home/Home";
import Produto from "./components/produtos/Produto";
import Servicos from './components/servicos/Servicos'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

export default function App() {
    return (   
        <BrowserRouter>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/produtos'>Produtos</Link></li>
            <li><Link to='/servicos'>Serviços</Link></li>
        </ul>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/produtos" element={<Produto/>} />
            <Route path="/servicos" element={<Servicos/>} />
        </Routes>
        </BrowserRouter>
        
    )
}