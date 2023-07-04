import React from "react";
import { NavLink} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import "./Nav.css"


export default function Nav({onSearch, setAccess}) {
    
   function addRandomCharacter() {
        const randomId = Math.floor(Math.random() * 826) + 1;
        onSearch(randomId);
    };

    const handleLogOut = () => {
        setAccess(false);

    }
    return (
        <div>
            
            <SearchBar onSearch={onSearch} />
            <button className="buttonsSearchBar" onClick={addRandomCharacter}>Agregar Personaje Aleatorio</button>

            <NavLink to="/home">
                <button className="buttonsSearchBar" >Home</button>
            </NavLink>

            <NavLink to="/about">
                <button className="buttonsSearchBar" >About</button>
            </NavLink>

            <NavLink to="/favorites">
                <button className="buttonsSearchBar">Favorites</button>
            </NavLink>

            <NavLink to="/">
                <button className="buttonsSearchBar" onClick={handleLogOut}>Log Out</button>
            </NavLink>
            
        </div>
    )
}