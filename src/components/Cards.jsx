import React from 'react';
import Card from './Card';

export default function Cards(props) {
   return (
      <div>
         {props.characters.map(character => (
            <Card
               onClick={() => window.alert('Emulamos que se cierra la card')}
               key={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.name}
               image={character.image}
            />
         ))}
      </div>
   )
}
