const Image = ({ photo }) => {

    return (<figure>
        <img src={photo.path} alt={photo.title} />
        <figcaption>
            <h3>titulo</h3>
            <footer>
                <p>fonte</p>
                <button>Favorito</button>
                <button>Expandir</button>
            </footer>
        </figcaption>
    </figure>)
 
} 

export default Image;