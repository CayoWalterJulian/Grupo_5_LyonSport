import { useRef } from "react"

function Input(props) {

    const {
        handleSearch = () => {}
    } = props

    const inputRef = useRef()

    const search = () => {
        let title = inputRef.current.value

        handleSearch(title)
    }

    return(
        <div>
            <label  className="mr-2" htmlFor="buscador">Introducir titulo de la pelicula: </label>
            <input type="text" id="buscador" onBlur={ search } ref={inputRef}/>
        </div>
    )
}

export default Input;