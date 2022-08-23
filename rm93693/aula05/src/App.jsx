import React from "react";
import Menu from "./components/menu/Menu";
import MainRoutes from "./routes/MainRoutes";
import "./index.css";
import Rodape from "./components/rodape/Rodape";
export default function App() {
  return (
    <>
      <Menu />
      <MainRoutes />
      <Rodape />
    </>
  );
}
