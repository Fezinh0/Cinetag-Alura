import Banner from 'components/Banner';
import styles from './Player.module.css'
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NaoEncontrada from 'pages/NaoEncontrada';

 function Player() {
    const [video, setvideo] = useState();
    const parametros = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Fezinh0/Cinetag-alura/videos?id=${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setvideo(...dados)
        })
    }, [])

    if (!video) {
        return <NaoEncontrada/>
    }
   
    return(
        <>
            <Banner imagem="player"/>
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
            <iframe 
            width="100%" 
            height="100%" 
            src={video.link} 
            title={video.titulo} 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
            </section>
        </>
    )
}
export default Player;