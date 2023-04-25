import React from "react";
import styled from "styled-components";

//creates side column for menu

const Ul = styled.ul`

    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    z-index: 2;
    li {
        padding: 10px 10px;
    }

        flex-flow: column nowrap;
        background-color: #252525;
        opacity: 0.99;
        position: fixed;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
        top: 0;
        left: -250;
        height: 100%;
        width: 250px;
        padding-top: 3em;
        transition: transform 0.3s ease-in-out;
    
        li{
            color: #fff;
        }
    
`;

const Wrapper = styled.div`

    display: flex;
    flex-direction: column;
    height: 100%;
    width: 20%;
    position: absolute;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
    opacitiy: ${({open}) => open ? 0 : 1};
    z-index: 2;
    background-color: grey;
    transition: transform 1s ease, opacity 1s ease;
`

const Menu = ({ open }) => {
return(
    <Wrapper open={open}>
    test
    </Wrapper>
)

}

export default Menu