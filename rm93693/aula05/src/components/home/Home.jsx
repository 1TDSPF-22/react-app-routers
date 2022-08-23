import React from "react";
import Menu from "../menu/Menu";

export default function Home() {
  const home = {
    backgroundColor: "#ffb",
    height: "85vh",
    textAlign: "center",
    color: "orange",
  };

  return (
    <div style={home}>
      <h1>Página Principal</h1>
      <p>Exemplo da página principal do projeto.</p>
    </div>
  );
}
