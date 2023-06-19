import React from "react";
import styled from "styled-components"
import { NavLink } from "react-router-dom";


const StyledCard = styled.div`
   border: 2px solid rgba(0, 255, 255);
   background-color: rgba(0, 255, 255, 0.2);
   color: rgba(0, 255, 255); 
   padding: 5px 5px 5px 5px;
   margin: 10px 10px 10px 10px;
   border-radius: 20px;
   width: 200px;
   display: flex;
   flex-direction: column;
   flex-wrap: nowrap;
   align-items: center;

   &:hover {
      transform: translateY(-5px);
      background-color: rgba(0, 255, 255, 0.3);
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
      color: rgba(0, 255, 255);
    }
`;
const StyledText = styled.div`
    margin: 0;
`;
const CloseButton = styled.button`
   border-radius: 10px;
   border: 2px solid rgba(150, 0, 0);
   background-color: rgba(150, 0, 0, 0.3);
   color: rgba(200, 0, 0);
   width: 70px;
   height: 30px;
   margin-right: 68%;
   font-size: 130%;

   &:hover {
      background-color: rgba(150, 0, 0, 0.6);
      border: 2px solid rgba(255, 0, 0);
      color: rgba(255, 0, 0);
   }
`;

const Image = styled.img`
   width: calc(100% - 10px);
   margin: 3px 3px 3px 3px;
   border-radius: 20px;
   border: 2px solid rgba(0, 255, 255);
`;

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   const handleCardClose = () => {
      onClose(id);
    };
   
   return (
         <StyledCard>
            <CloseButton onClick={handleCardClose}>X</CloseButton>
            <StyledText>
            <NavLink to={`/detail/${id}`}><p>Name: {name}</p></NavLink>
            </StyledText>
            <Image src={image} alt={name} />
         </StyledCard>
   );
}
