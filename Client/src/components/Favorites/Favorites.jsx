import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./Favorites.css"

import Card from "../Card/Card.jsx";

function Favorites ({onClose}) {

    const myFavorites = useSelector(state => state.myFavorites)

    return (
        <div className="containerFav">
        {myFavorites.map(character => 
             <Card
             key={character.id}
             id={character.id}
             name={character.name}
             image={character.image}
             onClose={onClose}
          />
        )}
        </div>
    )
}

export default Favorites;