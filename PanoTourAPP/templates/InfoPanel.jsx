import React from "react";
import styled from "styled-components";

//Still need to center on page
//move button to corner of div.a

const Container = styled.div`

    list-style: none;
    display: flex;
    flex-flow: row nowrap;

       
        background-color: #252525;
        transform: ${({open}) => open ? 'translateY(0)' : 'translateY(-500%)'};
        height: 35%;
        width: 50%;
        
        margin: auto;
        position: fixed;
        z-index: 100;
        
        display: block;
        .left{            
                float: left;
                width: 50%;
                height: 100%;
                color: white;
            }

        .right{
            float: right;
            width: 50%;
            height: 100%;
         }

         .A{
            height: 20%;
            width: 100%;
            background-color: blue;  
            
             }
        
          .B{
            height: 20%;
            width: 100%;
            background-color: red;  
             }

         .C{
            height: 60%;
            width: 100%;
            background-color: yellow;  
         }
                
`;

//

const Menu = ({ open }) => {
return(
    <Container open={open}>
        <div className="left">Images go here</div>
        <div className="right">
            <li className="A">Building/Exhibit
            </li>
            <li className="B">Title/Date</li>
            <li className="C">Sometimes it's the first moment of the day that catches you off guard.</li>
        </div>
    </Container>
)

}

export default Menu