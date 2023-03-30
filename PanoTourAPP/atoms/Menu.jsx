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