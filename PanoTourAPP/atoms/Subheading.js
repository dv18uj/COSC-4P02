//Smaller and no bold compared to heading
import React from 'react'
import styled from "styled-components"

const StyledSubheading = styled.p`
    font-size: .5em;
    color: rgba(255,255,255,0.75);
    &hover {
        color: rgba(255,255,255,1);
    } 
`;

export default function Subheading(props){
    return(
        <StyledSubheading>{props.text}</StyledSubheading>
    )

}
