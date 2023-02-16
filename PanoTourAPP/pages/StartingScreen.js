//This page combines components to allow the user to begin the tour
import DescriptionMenu from "../organisms/DescriptionMenu.js"
import LocationMenu from "../organisms/LocationMenu.js"
function StartingScreen () {
    return(
        <div className="row">
            <DescriptionMenu/>
            <LocationMenu/>
        </div>
    )
}

export default StartingScreen;