import Card from "../components/ContentRow/Card/Card";
import react, { useState, useEffect } from "react"
import Input from "../components/Input/Input";

function Buscador() {

    const [ movie, setMovie ] = useState({})
    const [ loading, setLoading] = useState(false)

    async function getMovie(id) {
            setLoading(true)
            const result = await fetch(`http://localhost:3000/api/products/${id}`)
            const data = await result.json();
            if(result.status == 200) {
                setLoading(false)
                setMovie(data)
            }
    }


    useEffect(() => {

        getMovie("undefined")
        
    }, []) 

        return (
            <>
                <Input handleSearch={getMovie} />
            {
            loading && <h1>Cargando...</h1>
            }
            {
                !loading && !movie.Title == "" && <Card title={ movie?.Title }>
                <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '40rem' }} src={movie.Poster} alt=" Star Wars - Mandalorian " />
                </div>
                <p>{movie.Plot}</p>
                <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                </Card>
            }
            </>
            
        )
    
}

export default Buscador;