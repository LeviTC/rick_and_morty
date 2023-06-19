import React from 'react';
import Card from './Card';
import styled from "styled-components"

const StyledCardContainer = styled.div`
   display: flex;
   flex-flow: wrap row;
   justify-content: space-around;
`;

export default function Cards({characters, onClose}) {
   return (
      <StyledCardContainer>
      {characters.map(character => (
         <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={onClose}
         />
      ))}
   </StyledCardContainer>
   )
}
