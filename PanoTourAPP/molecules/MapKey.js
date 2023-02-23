//this class can have an image of a location, heading and subheading with
// each being clickable and jumps to a tour location.
import Heading from "../atoms/Heading"
import Subheading from "../atoms/Subheading"
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const StyledMapKey = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    height: 100px;
    width: 95%;
    gap: 20px;
    font-size: 1em;
`;
const StyledImage = styled.img`
    height: 100%;
`;
function MapKey (props) {
    return (
        
            <StyledMapKey>
                <StyledImage src={props.imgSource} alt={props.alt}/>
                <Wrapper>
                    <Heading text={props.heading}/>
                    <Subheading text={props.subheading}/>
                </Wrapper>
            </StyledMapKey>
        
    )
}

export default MapKey;