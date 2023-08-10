import ImageComponent from "./ui/image";

const Experiencias = () => {
  return (
    <main className="experiencias contenedor seccion">
      <h2 className="experiencias__heading">Descubre Experiencias</h2>
      <p className="experiencias__descripcion">
        Actividades únicas con expertos locales, en persona o en línea.
      </p>

      <div className="experiencias__listado">
        <div className="experiencia">
          <ImageComponent
            className="experiencia__imagen"
            imageUrl="src/assets/experiencia_1.jpg"
            alt="imagen experiencia"
          />
          <p className="experiencia__titulo">Experiencias</p>
          <p className="experiencia__descripcion">
            Actividades estés donde estés
          </p>
        </div>

        <div className="experiencia">
          <ImageComponent
            className="experiencia__imagen"
            imageUrl="src/assets/experiencia_2.jpg"
            alt="imagen experiencia"
          />
          <p className="experiencia__titulo">Experiencias</p>
          <p className="experiencia__descripcion">
            Visíta y vive en una ciudad
          </p>
        </div>

        <div className="experiencia">
          <ImageComponent
            className="experiencia__imagen"
            imageUrl="src/assets/experiencia_3.jpg"
            alt="imagen experiencia"
          />
          <p className="experiencia__titulo">Experiencias en línea</p>
          <p className="experiencia__descripcion">Actividades interactivas</p>
        </div>
      </div>
    </main>
  );
};

export default Experiencias;
