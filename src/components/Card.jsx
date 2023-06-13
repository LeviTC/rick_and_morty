import React from "react";
import styled from "styled-components"


const StyledCard = styled.div`
   border: 2px solid blue;
   background-color: rgba(0, 0, 255, 0.1);
   padding: 5px; 
   width: calc(25% - 10px); 
   margin-bottom: 20px;
   font-color: white
`;

export default function Card(props) {
   return (
         <StyledCard>
            <button onClick={props.onClick}>X</button>
            <h2>name: {props.name}</h2>
            <h2>status: {props.status}</h2>
            <h2>species: {props.species}</h2>
            <h2>gender: {props.gender}</h2>
            <h2>origin: {props.origin}</h2>
            <img src={props.image} alt='' />
         </StyledCard>
   );
}
