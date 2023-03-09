import React from "react";
import styled from "styled-components";

//creates side column for menu

const Ul = styled.ul`

    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
        position: relative;
        padding: 10px 10px;
        top: 4em;
        color: #fff;
        
        
    }
        margin: 0;
        padding: 0;
        flex-flow: column nowrap;
        background-color: #252525;
        opacity: 0.99;
        position: fixed;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
        top: 0;
        left: -250;
        z-index: 90;
        height: 100%;
        width: 250px;
        transition: transform 0.3s ease-in-out; 
    
`;

const Menu = ({ open }) => {
return(
    <Ul open={open}>
        <li>Building 1</li>
        <li>Building 2</li>
        <li>Building 3</li>
    </Ul>
)

}

export default Menu