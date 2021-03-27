import { useContext, useEffect, useState } from "react";
import { contextPersonaje } from "../Contextos/ContextPersonaje";
import { useFetch } from "../hooks/useFetch";

const Formulario = () => {
  const { personaje, setPersonaje } = useContext(contextPersonaje);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const { datos, pideDatos } = useFetch();

  const url = (`https://api.giphy.com/v1/gifs/random?api_key=WGnjW2L9QE23gCnmOKIxjuBRtYbzQU1D&tag=${encodeURI(`${nombre} ${apellido}`)}`);

  useEffect(() =>
    pideDatos(url), [pideDatos, url]);

  const getNombre = e => {
    setNombre(e.target.value);
  };
  const getApellido = e => {
    setApellido(e.target.value);
  };
  const getEdad = e => {
    setEdad(e.target.value);
  };

  const nuevoPersonaje = (e) => {
    e.preventDefault();
    setPersonaje([...personaje, {
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      gif: datos.data.images.original.url
    }]);
    setNombre("");
    setApellido("");
    setEdad("");
  };
  return (
    <section className="crear-personaje row">
      <form onSubmit={nuevoPersonaje} className="col">
        <div className="form-group row align-items-center">
          <label htmlFor="nombre" className="col-1"  >Nombre: </label>
          <input type="text" value={nombre} onChange={getNombre} className="form-control  col-4" id="nombre" required />
          <label htmlFor="apellido" className="col-1" >Apellido: </label>
          <input type="text" value={apellido} className="form-control col" onChange={getApellido} id="apellido" required />
        </div>
        <div className="form-group row align-items-center">
          <label htmlFor="edad" className="col-1">Edad: </label>
          <select id="edad" value={edad} onChange={getEdad} className="form-control col-4">
            <option value="">Selecciona edad</option>
            <option value="menos de 5 años">menos de 5 años</option>
            <option value="menos de 10 años">menos de 10 años</option>
            <option value="menos de 20 años">menos de 20 años</option>
            <option value="menos de 40 años">menos de 40 años</option>
            <option value="menos de 60 años">menos de 60 años</option>
            <option value="menos de 80 años">menos de 80 años</option>
            <option value="menos de 100 años">menos de 100 años</option>
            <option value="menos de 110 años">menos de 110 años</option>
          </select>
          <button className="btn btn-info col" type="submit">Añadir personaje</button>
        </div>
      </form>
    </section>
  );
};

export default Formulario;
