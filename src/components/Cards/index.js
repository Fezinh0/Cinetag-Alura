import { useFavoritoContext } from "contextos/Favoritos";
import styles from "./Cards.module.css";
import iconeFavoritar from './favoritar.png';
import inconeDesfavoritar from './desfavoritar.png'
import { Link } from "react-router-dom";

function Card({ id, titulo, capa}){
    const { favorito , adcionarFavorito} = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = !ehFavorito ? iconeFavoritar : inconeDesfavoritar;
    return(
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
            <img src={capa} alt={titulo} className={styles.capa}></img>
            <h2>{titulo}</h2>
            </Link>
            <img src={icone} alt="Favoritar filme" className={styles.favoritar} onClick={() => {
                adcionarFavorito({ id, titulo, capa})
            }}/>  
            </div>
    )
}
export default Card;