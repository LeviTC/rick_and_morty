import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

//COMPONENTS
import Form from './components/Form/Form.jsx';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Error404 from './components/Error404/Error404.jsx';


const EMAIL = "erletaco@outlook.com";
const PASSWORD = "hola123";

function App() {
   let navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   const location = useLocation();

   function onSearch(id) {
      if (characters.some(character => character.id === Number(id))) {
         window.alert('¡Este personaje ya está agregado!');
         return;
      }

      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };

   const login = (userData) => {
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true);
         navigate("/home")
      }
   }

   const onClose = (id) => {
      const filteredCharacters = characters.filter((character) => character.id !== parseInt(id));
      setCharacters(filteredCharacters);
   };

   return (
      <div className='App'>
         {
            location.pathname !== "/" && <Nav onSearch={onSearch} setAccess={setAccess} />
         }

         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path='*' element={<Error404 />} />
         </Routes>
      </div>
   );
}

export default App;
