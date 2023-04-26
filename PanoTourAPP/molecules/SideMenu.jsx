import React, {useState, FunctionComponent} from "react";
import "./sidemenu.css";

//adds button and animation to menu to create the side menu

function SideMenu () {
    const [open, setOpen] = useState(false);
    
    const fetchData=()=>{
        return(
            [{
                lid: 1,
                name: "LocationA"
            },
            {
                lid: 2,
                name:"LocationB"
            },
            {
                lid: 3,
                name:"LocationC"
            },
            {
                lid: 4,
                name: "LocationD"
            },
            {
                lid: 5,
                name:"LocationE"
            },
            {
                lid: 6,
                name:"LocationF"
            }] 
            
        )
    }
    

    const location = fetchData()

    
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
    const[locationList,setList] = useState(location);
    const [hovered, setHover] = useState(false);

    return(
       

        <><div open={open} className={open != true ? 'navbar' : 'navbar_active'} onClick={() => setOpen(!open)}>
            <div className="top" />
            <div className="mid" />
            <div className="bot" />
        </div>
        <div className={open != true ? 'content' : 'content_active'}>
            <div className="currPos">
            <h2>Current building</h2>
            <p>Current section</p>
            </div>
                <div className={hovered ? 'list_active':'list'}
                    onPointerOver = {(event) => setHover(true)}
                    onPointerOut = {(event) => setHover(false)}>
                    {locationList.map((loc) => (
                        <div key={loc.lid}>  
                            <h2 className="location_head">{loc.name}</h2>
                            <ul className="section_list">
                                {sectionsList.map((sec) => (
                                    <li key={sec.sid}>{sec.name}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="login_button">
                    <p>Login: </p>
                    <button>Here</button>
                </div>
            </div></>
        
    )
}

export default SideMenu