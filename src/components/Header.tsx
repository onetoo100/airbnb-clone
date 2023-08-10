import Nav from "./Nav";

const Header = () => {
  return (
    <header className="header">
      <Nav />

      <form className="formulario contenedor">
        <div className="formulario__campo">
          <label className="formulario__label" htmlFor="ubicacion">
            Ubicación
          </label>
          <input
            type="text"
            className="formulario__input"
            id="ubicacion"
            placeholder="¿A donde viajas"
          />
        </div>

        <div className="formulario__campo">
          <label className="formulario__label" htmlFor="llegada">
            Llegada
          </label>
          <input type="date" className="formulario__input" id="llegada" />
        </div>

        <div className="formulario__campo">
          <label className="formulario__label" htmlFor="salida">
            Salida
          </label>
          <input type="date" className="formulario__input" id="salida" />
        </div>

        <div className="formulario__campo">
          <label className="formulario__label" htmlFor="huespedes">
            Huéspedes
          </label>
          <input
            type="number"
            className="formulario__input"
            id="huespedes"
            placeholder="¿Cuántos?"
          />
        </div>

        <div className="formulario__campo">
          <input
            type="submit"
            className="formulario__submit"
            value="Buscar"
            onClick={(e) => e.preventDefault()}
          />
        </div>
      </form>

      <div className="header__busqueda contenedor">
        <p className="header__busqueda-label">¿No sabes a donde ir?</p>
        <a href="#" className="header__busqueda-boton">
          Búsqueda Flexible
        </a>
      </div>
    </header>
  );
};

export default Header;
