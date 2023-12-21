function Row({movie}) {
    return(
        <tr>
          <td className="text-white">{movie.name}</td>
          <td className="text-white">{movie.email}</td>
          <td className="text-white">{movie.id}</td>
        </tr>
    )
}

export default Row;