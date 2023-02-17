// This menu has a the museum logo, app description and starting button
import museumLogo from "../assets/Museum_logo.svg";
import Button from '../atoms/Button.js';
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:100%;
    width:100%;
    gap:20px;
`;

const Paragraph = styled.p`
    color: white;
    font-size: 12;
`;
function DescriptionMenu () {
    return (
        <Wrapper>
            <img src = {museumLogo} alt = "NOTL Museum Logo"/>
            <Paragraph>
            <Paragraph>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut et massa mi. Aliquam in
            hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices
            mauris. Maecenas vitae mattis tellus. Nullam
            quis imperdiet augue. Vestibulum auctor
            ornare leo.
            </Paragraph>
            <Paragraph> 
            non suscipit magna interdum eu. Curabitur
            pellentesque nibh nibh, at maximus ante
            fermentum sit amet. Pellentesque commodo
            lacus at sodales sodales. Quisque sagittis orci
            ut diam condimentum, vel euismod erat
             placerat. In iaculis arcu eros, eget tempus orci
            facilisis id.Lorem ipsum dolor sit amet, consectetur
             adipiscing elit. Ut et massa. 
            </Paragraph>
            </Paragraph>
            <Button/>
        </Wrapper>
    );
}

export default DescriptionMenu;