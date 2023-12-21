import react, { Component } from "react";
import UsersRow from "./UsersRow";
import { getMovies } from "../../services/usersService";
import '../RowMovies/Card/card.css'

class Table extends Component {

    constructor() {
        super()
        this.state = {
            movies: []
        }
    }

    async componentDidMount() {
        const response = await getMovies()
        this.setState({movies: response})
    }

    render() {
        return (
            <table className="table table-striped bg-negro">
                <thead>
                    <tr>
                        <th className="text-white">Nombre</th>
                        <th className="text-white">Email</th>
                        <th className="text-white">ID</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.isArray(this.state.movies) && this.state.movies.map((movie, i) => <UsersRow key={i + movie.name} movie={movie} />)
                    }
                </tbody>
    
            </table>
        )
    }

}

export default Table;