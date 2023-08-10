import "./scss/app.scss";
import Header from "./components/Header";
import Destino from "./components/Destino";
import Lugares from "./components/Lugares";
import Anfitrion from "./components/Anfitrion";
import Experiencias from "./components/Experiencias";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Destino />
      <Lugares />
      <Anfitrion />
      <Experiencias />
      <Footer />
    </>
  );
}

export default App;
