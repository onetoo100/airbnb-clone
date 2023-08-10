import ImageComponent from "./ui/image";
import imagen1 from "../assets/vive_1.jpg";
import imagen2 from "../assets/vive_2.jpg";
import imagen3 from "../assets/vive_3.jpg";
import imagen4 from "../assets/vive_4.jpg";

const Lugares = () => {
  const lugaresData = [
    { title: "Escapadas al aire libre" },
    { title: "Alojamientos únicos" },
    { title: "Alojamientos enteros" },
    { title: "Con tu mascota" },
  ];
  return (
    <section className="lugares contenedor seccion">
      <h2 className="lugares__heading">Vive en cualquier lugar del mundo</h2>

      <div className="lugares__grid">
        {lugaresData.map((e, index) => (
          <div key={index} className="lugar">
            <ImageComponent
              className="lugar__imagen"
              imageUrl={
                index === 0
                  ? imagen1
                  : index === 1
                  ? imagen2
                  : index === 2
                  ? imagen3
                  : imagen4
              }
              alt="imagen"
            />
            <p className="lugar__nombre">{e.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Lugares;
