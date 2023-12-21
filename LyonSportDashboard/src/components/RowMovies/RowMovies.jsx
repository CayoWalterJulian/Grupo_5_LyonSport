import Card from "./Card/Card";

function RowMovies() {
  const listado = [
    {
      titulo: "Total de productos: ",
      cifra: 21,
      color: "primary",
      icono: 'fas fa-tshirt fa-4x'
    },
    {
      titulo:'Total de usuarios: ',
      cifra: 11,
      color: "success",
      icono: "fas fa-users fa-4x",
    },
    {
      titulo: "Total de categorias: ",
      cifra: 0,
      icono: "fas fa-table fa-4x",
      
    }
  ]
  return (
    <div className="row">

      {
        Array.isArray(listado) && listado.map((movie, i) => <Card key={i+movie.titulo} titulo={movie.titulo} cifra={movie.cifra} color={movie.color} icono={movie.icono} config={movie.config} />)
      }

    </div>
  )
}

export default RowMovies;