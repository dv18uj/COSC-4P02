//This is a heading, larger font and in bold compared to a subheading
import React from 'react'
import styled from "styled-components"

const StyledHeading = styled.h2`
    font-weight: 700;
    font-size: 2em;
    color: #FFF;
    cursor: pointer;
    &:hover {
        font-weight:900;
    }
`;
export default function Heading(props){
    return(
        <StyledHeading>{props.text}</StyledHeading>
    )
}