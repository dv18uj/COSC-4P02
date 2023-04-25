import BuildingA from "../assets/Building_A.png"
import BuildingB from "../assets/Building_B.png"
import BuildingC from "../assets/Building_C.png"
import MapKey from "../molecules/MapKey"
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:100%;
    width:100%;
    gap:20px;
    font-size: 20px;
`;

function LocationMenu () {
    return(
        <Wrapper>
        <MapKey imgSource={BuildingA} heading="Building A" subheading =" Exhibit A\n Exhibit B\n Exhibit C"/>
        <MapKey imgSource={BuildingB} heading="Building B" subheading =" Exhibit A\n Exhibit C"/>
        <MapKey imgSource={BuildingC} heading="Building C" subheading =" Exhibit A"/>
        </Wrapper>
    );
}

export default LocationMenu;