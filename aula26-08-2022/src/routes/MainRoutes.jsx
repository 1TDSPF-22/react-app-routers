import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import ModaFeminina from "../components/modaFeminina/ModaFeminina";
import ModaInfantil from "../components/modaInfantil/ModaInfantil";
import ModaMasculina from "../components/modaMasculina/ModaMasculina";
import NovoValor from "../components/novoValor/NovoValor";
import Servicos from "../components/servicos/Servicos";

export default function MainRoutes() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/moda-feminina" element={<ModaFeminina />} />
				<Route path="/moda-masculina" element={<ModaMasculina />} />
				<Route path="/moda-infantil" element={<ModaInfantil />} />
				<Route path="/servicos" element={<Servicos />} />
				<Route path="/nv" element={<NovoValor />} />
			</Routes>
		</>
	);
}
