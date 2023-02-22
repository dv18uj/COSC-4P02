import Heading from "../atoms/Heading"
import Subheading from "../atoms/Subheading"
import styled from styled.components

const Wrapper = styled.div`

`;

const StledMapKey = styled.div`

`;
const StyledImage = styled.img`
`;
function MapKey (props) {
    return (
        
            <StledMapKey>
                <StyledImage src={props.link} alt={props.alt}/>
                <Wrapper>
                    <Heading>{props.heading}</Heading>
                    <Subheading>{props.subheading}</Subheading>
                </Wrapper>
            </StledMapKey>
        
    )
}

export default MapKey;