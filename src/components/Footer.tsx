const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grid contenedor">
        {[1, 2, 3, 4].map((e, index) => (
          <div key={index} className="footer__widget">
            <h3 className="footer__heading">
              {e === 1
                ? "Acerca de"
                : e === 2
                ? "Comunidad"
                : e === 3
                ? "Anfitrión"
                : "Asistencia"}
            </h3>
            <nav className="footer__menu">
              {[1, 2, 3, 4].map((index) => (
                <a key={index} className="footer__enlace" href="#">
                  Lorem ipsum dolor sit
                </a>
              ))}
            </nav>
          </div>
        ))}
      </div>

      <div className="footer__barra contenedor">
        <nav className="footer__barranav">
          <a className="footer__enlace footer__enlace--barra" href="#">
            Temporibus commodi aperiam.
          </a>
          <a className="footer__enlace footer__enlace--barra" href="#">
            Sint animi tempora!
          </a>
          <a className="footer__enlace footer__enlace--barra" href="#">
            Consectetur rerum.
          </a>
          <a className="footer__enlace footer__enlace--barra" href="#">
            Lorem ipsum dolor sit
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
