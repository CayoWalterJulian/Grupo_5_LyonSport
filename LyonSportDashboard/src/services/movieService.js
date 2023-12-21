export async function getMovies() {
    try {
        const response = await fetch("http://localhost:3000/api/products")
        const data = await response.json()

        if (response.status != 200) throw new Error("Error al conectarse con la DB")

        return data.data

    } catch (error) {
        console.log(error)
    }
}
