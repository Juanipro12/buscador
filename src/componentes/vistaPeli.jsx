import { Link } from "react-router-dom"

const VistaPeli = (props) => {
    const {nombre,anio,imagen,id} = props
    return(
        <Link to={id} className="card ">
            <div className="card">
                <div className="card-image">
                    <figure className="image">
                    <img src={imagen} alt="Placeholder image"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{nombre}</p>
                        <p className="subtitle is-6">{anio}</p>
                    </div>
                    </div>
                </div>
                </div>
        </Link>
    )
}

export default VistaPeli