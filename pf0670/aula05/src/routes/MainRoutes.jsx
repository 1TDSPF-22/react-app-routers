import React from 'react'
import Home from "../components/home/Home"
import Produtos from "../components/produtos/Produto"
import Servicos from "../components/servicos/Servicos"
import NovoValor from '../components/novoValor/NovoValor'
import { Routes, Route } from 'react-router-dom'
export default function MainRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/servicos" element={<Servicos />} />
                <Route path="/nv" element={<NovoValor/>} />
            </Routes>
        </>
    )
}
