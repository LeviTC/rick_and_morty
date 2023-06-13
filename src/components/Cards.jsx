import React from 'react';
import Card from './Card';
import styled from "styled-components"

const StyledCardContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   color: white
`;

export default function Cards(props) {
   return (
      <StyledCardContainer>
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
   </StyledCardContainer>
   )
}
