import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";



export default function Detail() {
    const {id} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);


    return(
        <div>
            {character.name && <h1>{character.name}</h1>}
            {character.status && <h2>Satus: {character.status}</h2>}
            {character.species && <h2>Specie: {character.species}</h2>}
            {character.gender && <h2>Gender: {character.gender}</h2>}
            {character.origin && character.origin.name && <h2>Origin: {character.origin.name}</h2>}
            {character.image && <img src={character.image} alt={character}/>}
        </div>
    )
}

