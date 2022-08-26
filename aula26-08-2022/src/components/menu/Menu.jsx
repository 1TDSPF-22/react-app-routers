import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
	return (
		<>
			<header className="header">
				<nav>
					<ul className="menu">
						<li>
							<Link className="item" to="/">
								Home
							</Link>
						</li>
						<li>
							<Link className="item" to="/servicos">
								Serviços
							</Link>
						</li>
						<li>
							<Link className="item" to="/moda-feminina">
								Moda Feminina
							</Link>
						</li>
						<li>
							<Link className="item" to="/moda-masculina">
								Moda Masculina
							</Link>
						</li>
						<li>
							<Link className="item" to="/moda-infantil">
								Moda Infantil
							</Link>
						</li>
						<li>
							<Link className="item" to="/nv">
								Novo Valor
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
