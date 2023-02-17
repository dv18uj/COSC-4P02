//This page combines components to allow the user to begin the tour
import DescriptionMenu from "../organisms/DescriptionMenu.js"
import LocationMenu from "../organisms/LocationMenu.js"
import styled from "styled-components";
import React from "react";
import background from "../assets/museum_background.jpeg"

const OuterWrapper =styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    background:linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background});
    background-size: cover;
`;
const Wrapper = styled.div`
    padding: 75px;
    height: 100%;
    width: 50%;
`;

const StyledLine = styled.div`
    height: 95%;
    width: 5px;
    background-color: white;

`;

function StartingScreen () {
    return(
        <OuterWrapper>
        <Wrapper><DescriptionMenu/></Wrapper>
        <Wrapper><LocationMenu/></Wrapper>
        </OuterWrapper>
    )
}

export default StartingScreen;