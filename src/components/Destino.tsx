import ImageComponent from "./ui/image";
import destino1 from "../assets/icono_destino_1.png";
import destino2 from "../assets/icono_destino_2.png";
import destino3 from "../assets/icono_destino_3.png";
import destino4 from "../assets/icono_destino_4.png";
import destino5 from "../assets/icono_destino_5.png";
import destino6 from "../assets/icono_destino_6.png";
import destino7 from "../assets/icono_destino_7.png";
import destino8 from "../assets/icono_destino_8.png";
import { destinoData } from "../data/data";

const Destino = () => {
  return (
    <section className="destinos contenedor seccion">
      <h2 className="destinos__heading">Descubre alojamientos populares</h2>

      <ul className="destinos__grid">
        {destinoData.map((e, index) => (
          <li key={index} className="destino">
            <div className="destino__imagen">
              <ImageComponent
                imageUrl={
                  index === 0
                    ? destino1
                    : index === 1
                    ? destino2
                    : index === 2
                    ? destino3
                    : index === 3
                    ? destino4
                    : index === 4
                    ? destino5
                    : index === 5
                    ? destino6
                    : index === 6
                    ? destino7
                    : destino8
                }
                alt="imagen destino"
              />
            </div>

            <div className="destino__informacion">
              <h3 className="destino__nombre">{e.title}</h3>
              <p className="destino__distancia">{e.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Destino;
