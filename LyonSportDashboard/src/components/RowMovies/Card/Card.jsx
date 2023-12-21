import './card.css'
function Card(props) {
    const {
        titulo = "Titulo por defecto",
        cifra = 0,
        icono = "fas fa-comment-slash fa-2x",
        config = {},
    } = props;

    
    return (
        <div className="col-md-4 mb-4">
            <div className={`card shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-s font-weight-bold negro dark text-uppercase mb-1`}>{titulo}</div>
                            <div className="h5 mb-0 font-weight-bold negro ">{cifra}</div>
                            <div className="h5 mb-0 font-weight-bold negro ">{config.nombre}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`${icono} negro`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;