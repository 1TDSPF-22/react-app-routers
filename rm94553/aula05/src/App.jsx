import React from "react";
import Home from "./components/home/home"
import Produtos from "./components/produtos/Produtos";
import Servicos from "./components/servicos/Servicos";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Menu from "./components/menu/Menu";

export default function App(){

    return(
        <BrowserRouter>
        <div><Menu/></div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/produtos" element={<Produtos/>}/>
                <Route path="/servicos" element={<Servicos/>}/>
            </Routes>
        </BrowserRouter>
        
        
    )
}