// This menu has a the museum logo, app description and starting button
import museumLogo from "../assets/Museum_logo.svg"
import Button from '../atoms/Button.js'
function DescriptionMenu () {
    return (
        <div>
            <img src = {museumLogo} alt = "NOTL Museum Logo"/>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <p>adipiscing elit. Ut et massa mi. Aliquam in</p>
            <p>hendrerit urna. Pellentesque sit amet sapien</p>
            <p>fringilla, mattis ligula consectetur, ultrices</p>
            <p>mauris. Maecenas vitae mattis tellus. Nullam</p>
            <p>quis imperdiet augue. Vestibulum auctor</p>
            <p>ornare leo.</p>
            <br></br> 
            <p>non suscipit magna interdum eu. Curabitur</p>
            <p>pellentesque nibh nibh, at maximus ante</p>
            <p>fermentum sit amet. Pellentesque commodo</p>
            <p>lacus at sodales sodales. Quisque sagittis orci</p>
            <p>ut diam condimentum, vel euismod erat</p>
            <p> placerat. In iaculis arcu eros, eget tempus orci</p>
            <p>facilisis id.Lorem ipsum dolor sit amet, consectetur</p>
            <p> adipiscing elit. Ut et massa. </p>
            <Button></Button>
        </div>
    );
}

export default DescriptionMenu;