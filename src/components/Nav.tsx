import React from "react";

const Nav = () => {
  return (
    <div className="barra contenedor">
      <div className="barra__logo">
        <p className="barra__nombre">Viaje</p>
      </div>

      <nav className="barra__navegacion">
        <a className="barra__link" href="#">
          Lugares para hospedarte
        </a>
        <a className="barra__link" href="#">
          Experiencias
        </a>
        <a className="barra__link" href="#">
          Experiencias en línea
        </a>
      </nav>

      <nav className="barra__login">
        <a className="barra__link" href="#">
          Hazte Anfitrión
        </a>
      </nav>
    </div>
  );
};

export default Nav;
