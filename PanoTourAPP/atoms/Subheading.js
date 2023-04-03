//Smaller and no bold compared to heading
import React from 'react'
import styled from "styled-components"

const StyledSubheading = styled.p`
    font-size: 1em;
    padding:2px 0px;
    margin: 3px 0px 3px 25px;
    cursor: pointer;
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
