import './Card.css'

export default function Card ({titulo, children}){    
    function mostrarAlerta() {
        alert(`Card ${titulo}`)
    }

    return(
        <div className='card' onClick={mostrarAlerta}>
            <div className="card-titulo">
                <h2>{titulo}</h2>
            </div>
            <div className="card-conteudo">
                {children}
            </div>
        </div>
    )
}