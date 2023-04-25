import React, {useState} from "react";
import styled from "styled-components";
import Menu from "../atoms/Menu";

//adds button and animation to menu to create the side menu

const StyledMenuBtn = styled.div`
    width: 2em;
    height: 2em;
    position: fixed;
    top: 20px;
    left: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 99;

        div{
            width: 2em;
            height: 0.25em;
            background-color: ${({open}) => open ? '#fff' : '#181818' };
            border-radius: 10px;
            transform-origin: 1px;

            &:nth-child(1){
                transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
                transition: all 0.3s linear;
            }

            &:nth-child(2){
                transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
                opacity: ${({open}) => open ? 0 : 1};
            }

            &:nth-child(3){
                transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
                transition: all 0.3s linear;
            }

        }
`;

const SideMenu = () => {
    const [open, setOpen] = useState(false);

    return(
        <>
        <StyledMenuBtn open ={open} onClick = {() => setOpen(!open)}>
           <div />
           <div />
           <div />
        </StyledMenuBtn>
        <Menu open ={open}/>
        </>

    )
}

export default SideMenu