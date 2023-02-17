/**
 * A clickable button
 */
import styled from "styled-components";

const StyledButton = styled.button`
    background: black;
    color: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid white;
    border-radius: 3px;
`;
function Button ({title}) {
    return(
        <StyledButton>{title}</StyledButton>
    )
}

export default Button;