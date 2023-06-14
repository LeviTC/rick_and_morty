import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';

function App() {
   const [characters, setCharacters] = useState([]);
   const [addedCharacterIds, setAddedCharacterIds] = useState([]);

   function onSearch(id) {
      if (addedCharacterIds.includes(id)) {
         window.alert('¡Este personaje ya está agregado!');
         return;
      }

      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
            setAddedCharacterIds((oldIds) => [...oldIds, id]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };

   const onClose = (id) => {
      const filteredCharacters = characters.filter((character) => character.id !== parseInt(id));
      setCharacters(filteredCharacters);
   };
   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
