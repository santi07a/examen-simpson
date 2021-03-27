import { useContext, useEffect } from "react";
import { contextPersonaje } from "../Contextos/ContextPersonaje";


const Personaje = () => {
  const { personaje } = useContext(contextPersonaje);

  return (
    <tbody>
      {personaje?.map(personaje =>
        <tr className="personaje" key={personaje.nombre + Date(toString)}>
          <td >{`${personaje.nombre} ${personaje.apellido}`} </td>
          <td>{personaje.edad}</td>
          <td><img className="gif" src={personaje.gif} alt={`${personaje.nombre + personaje.apellido}`} /></td>
        </tr>)}
    </tbody>
  );
};
export default Personaje;
