function App() {
  return (
    <>
      <div className="container">
        <header className="cabecera row">
          <h1 className="col">Personajes de Los Simpsons</h1>
        </header>
        <section className="crear-personaje row">
          <form className="col">
            <div className="form-group row align-items-center">
              <label htmlFor="nombre" className="col-1">Nombre: </label>
              <input type="text" className="form-control col-4" id="nombre" />
              <label htmlFor="apellido" className="col-1">Apellido: </label>
              <input type="text" className="form-control col" id="apellido" />
            </div>
            <div className="form-group row align-items-center">
              <label htmlFor="edad" className="col-1">Edad: </label>
              <select id="edad" className="form-control col-4">
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
        <section className="listado">
          <h3 className="total">Hay un total de 3 personajes</h3>
          <table className="personajes table table-bordered">
            <thead>
              <tr>
                <th>Nombre completo</th>
                <th>Edad aprox.</th>
                <th>Gif</th>
              </tr>
            </thead>
            <tbody>
              <tr className="personaje">
                <td>Marge Simpson</td>
                <td>Menos de 50 años</td>
                <td><img className="gif" src="https://media4.giphy.com/media/26tjZvLX08nC7KTpm/giphy.gif?cid=8f9de43ba14aa7caf8bb1ec6fd2f035977fd22568b8a82a8&rid=giphy.gif&ct=g" alt="Marge Simpson" /></td>
              </tr>
              <tr className="personaje">
                <td>Lisa Simpson</td>
                <td>Menos de 10 años</td>
                <td><img className="gif" src="https://media2.giphy.com/media/3orieTkwE82zCJ6qFa/giphy.gif?cid=8f9de43b16d3e357ec0cf4301aa33ffb259ab268473454b8&rid=giphy.gif&ct=g" alt="Lisa Simpson" /></td>
              </tr>
              <tr className="personaje">
                <td>Mr Burns</td>
                <td>Menos de 110 años</td>
                <td><img className="gif" src="img/nubes.jpg" alt="Mr Burns" /></td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}

export default App;
