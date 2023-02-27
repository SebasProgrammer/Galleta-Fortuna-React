const Card = ({title, album, band, fecha, genero}) => {
    return (
        <div className="card-song">
            <h2>{title}</h2>
            <p><span>Álbum:</span> {album}</p>
            <p><span>Banda:</span> {band}</p>
            <p><span>Fecha de Lanzamiento:</span> {fecha}</p>
            <p><span>Género:</span> {genero}</p>
        </div>
    );
};

export default Card;