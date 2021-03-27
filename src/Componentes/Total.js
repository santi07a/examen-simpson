import { useContext } from "react";
import { contextPersonaje } from "../Contextos/ContextPersonaje";

const Total = () => {
  const { personaje } = useContext(contextPersonaje);
  return (
    <h3 className="total">Hay un total de {personaje.length} personajes</h3>
  );
};

export default Total;
