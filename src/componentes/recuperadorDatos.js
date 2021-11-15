import React,{ useState} from 'react'
import VistaPeli from './vistaPeli'

export const RecuperadorDatos = () => {
    const [pelis, setPelis] = useState([])
    const [busqueda, setBusqueda] = useState("")
    const datos = e =>{
        e.preventDefault()
        fetch(`http://www.omdbapi.com/?apikey=67a6157f&s=${busqueda}`)
        .then(response => response.json())
        .then(data => {
            
            const {Search} = data
            console.log(data)
            setPelis(Search)
            
            })
        
    }
    const cambiarState = e =>{
        setBusqueda(e.target.value)
        console.log(e.target.value)
       
    }
    return (
        <div className="">
        
        <form className="form-input" onSubmit={datos}>
            <input type="text" placeholder="buscar peliculas" onChange={cambiarState} />
            <button type="submit">Buscar</button>
        </form>
        <div className="resultados">
         {pelis.length === 0 ? 
        <p className="NoRes">no hay pelis</p>
        : pelis.map( peli =>{
            return( 
            <VistaPeli key={peli.imdbID} id={peli.imdbID} nombre={peli.Title} anio={peli.Year} imagen={peli.Poster} />
        )})}
        </div>
        </div>
    )
}
