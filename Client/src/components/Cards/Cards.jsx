import React from 'react';
import Card from '../Card/Card.jsx';
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
            image={character.image}
            onClose={onClose}
         />
      ))}
   </StyledCardContainer>
   )
}
