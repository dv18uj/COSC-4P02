//This is a template that holds information on an artifact: image, description, and dates etc.
import styled from 'styled-components'
import Button from '../atoms/Button'

const Modal = styled.div`
    z-index: auto;
    display: ${({show})} => ( show ? 'block' : 'none')};
    psotion: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0,0,0,0.5);
`
const Container = styled.div`
    position:fixed;
    background: antiquewhite;
    width: 33%;
    height: auto;
     
    top: ${({openPos}) => (
    {
        [CM_CENTER_CENTER]: '50%',
        [CM_TOP_LEFT]: '10%',
        [CM_TOP_CENTER]: '10%',
        [CM_TOP_RIGHT]: '10%'
    }[openPos])};
     
    left: ${({openPos}) => (
    {
        [CM_CENTER_CENTER]: '50%',
        [CM_TOP_LEFT]: '5%',
        [CM_TOP_CENTER]: '50%',
        [CM_TOP_RIGHT]: '95%'
    }[openPos])};
  
    transform: ${({openPos}) => (
    {
        [CM_CENTER_CENTER]: 'translate(-50%,-50%)',
        [CM_TOP_LEFT]: 'translate(0,0)',
        [CM_TOP_CENTER]: 'translate(-50%,0)',
        [CM_TOP_RIGHT]: 'translate(-100%,0)'
    }[openPos])};
 
    border-radius: 10px;
    padding: 0.75rem;
    color: rgba(0,0,139, 0.7);
`;

const Header = styled.div`
    font-size: 2.4rem;
    color: rgba(0,0,139, 0.7);;
`;

const HBar = styled.div`
    width: 100%;
    height: 1px;
    border: solid 1px rgba(80,80,150, 0.4);
    background-color: rgba(80,80,150, 0.4);
`;

const ButtonBar = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1 0 auto;
    justify-content: flex-end;
`;

const Slot = styled.div`
    font-size: 1.6rem;
    color: inherit;
`;

function InfoPanel(props) {
    const {
        handleClose, // renderProp fn expects truthy or falsey
        show,             // boolean - visible/invisible

        openPos       // placement choice
    } = {...props};
 
    const sendYes = () => handleClose(true);
 
    const sendNo = () => handleClose(false);

    return(
        <Modal show={show}>
            <Container openPos={openPos}>
                <Button onClick={} title = "close"/>
            </Container>
        </Modal>
    )
}

export default InfoPanel; 

InfoPanel.propTypes = {
    handleClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    headerText: PropTypes.string.isRequired,
    detailText: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    openPos: PropTypes.symbol.isRequired
};