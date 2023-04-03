//this class can have an image of a location, heading and subheading with
// each being clickable and jumps to a tour location.
import Heading from "../atoms/Heading"
import Subheading from "../atoms/Subheading"
import styled from "styled-components"
import {useState} from "react"


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
    width: 95%;
    gap: 20px;
    font-size: 1em;
`;
const StyledImage = styled.img`
    height: 75px;
    display: ${({hidden}) => hidden ? 'none' : 'block'};
`;
function MapKey (props) {
    const[hidden,setHidden] = useState(props.hidden)
    const location = props.lid
    const sections = [
        {
            sid: 1,
            name: "sectionA"
        },
        {   
            sid: 2,
            name: "sectionB"
        },
        {
            sid: 3,
            name: "sectionC"
        }
    ]

    const[sectionsList,SetSections] =  useState(sections);
    return (
        
            <StyledMapKey>
                <StyledImage hidden={hidden} src={props.imgSource} alt={props.alt}/>
                <Wrapper>
                    <Heading text={props.text}/>
                    {sectionsList.map((item) =>(
                        <Subheading key={item.id} text={item.name}/>
                        ))}
                </Wrapper>
            </StyledMapKey>
        
    )
}

export default MapKey;