import React from "react";
import SearchBar from "./SearchBar";

export default function Nav({onSearch}) {
    
   function addRandomCharacter() {
    const randomId = Math.floor(Math.random() * 826) + 1;
    onSearch(randomId);
 }
    return (
        <div>
            <SearchBar onSearch={onSearch} />
            <button onClick={addRandomCharacter}>Agregar Personaje Aleatorio</button>
        </div>
    )
}