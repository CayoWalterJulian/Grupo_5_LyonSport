import Card from "../components/ContentRow/Card/Card";
import react, {useState, useEffect} from "react"
import { useParams } from "react-router-dom";

function MovieView() {
    const { title } = useParams()
    const [ movie, setMovie ] = useState({})
    const [ loading, setLoading] = useState(true)

    useEffect(() => {
        async function getMovie() {
            
                const result = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=f441bd5c`)
                const data = await result.json();
                if(result.status == 200) {
                    setLoading(false)
                    setMovie(data)
                }
        }
        getMovie()
    }, []) 

        return (
            <>
            {
                loading && <h1>Cargando...</h1>

            }
            {
                !loading && <Card title={ movie?.Title }>
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

export default MovieView;