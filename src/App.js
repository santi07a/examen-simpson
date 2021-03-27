import Formulario from "./Componentes/Formulario";
import Listado from "./Componentes/Listado";
import personajes from "../src/personajes";
import { contextPersonaje } from "./Contextos/ContextPersonaje";
import { useState } from "react";

function App() {
  const personajesSimpsons = personajes;
  const [personaje, setPersonaje] = useState([]);
  const [imagen, setImagen] = useState("img/nubes.jpg");

  return (
    <contextPersonaje.Provider value={{ personajesSimpsons, personaje, setPersonaje, imagen, setImagen }} >
      <div className="container">
        <header className="cabecera row">
          <h1 className="col">Personajes de Los Simpsons</h1>
        </header>
        <Formulario />
        <Listado />
      </div>
    </contextPersonaje.Provider>
  );
}

export default App;
