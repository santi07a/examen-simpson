import Personaje from "./Personaje";
import Total from "./Total";

const Listado = () => {
  return (
    <section className="listado">
      <Total />
      <table className="personajes table table-bordered">
        <thead>
          <tr>
            <th>Nombre completo</th>
            <th>Edad aprox.</th>
            <th>Gif</th>
          </tr>
        </thead>
        <Personaje />
      </table>
    </section>
  );
};


export default Listado;
