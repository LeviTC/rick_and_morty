import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./Nav.css"


export default function Nav({onSearch}) {
    
   function addRandomCharacter() {
    const randomId = Math.floor(Math.random() * 826) + 1;
    onSearch(randomId);
 }
    return (
        <div>
            <SearchBar onSearch={onSearch} />
                <button onClick={addRandomCharacter}>Agregar Personaje Aleatorio</button>
            <NavLink to="/about">
                <button>About</button>
            </NavLink>
            <NavLink to="/home">
                <button>Home</button>
            </NavLink>
        </div>
    )
}