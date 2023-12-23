import {NavLink} from "react-router-dom";
import "../navigation/nav.style.css"

const isActive = ({isActive})=>(isActive?"nav-item-active":"")

const Nav=()=>
{
    const allPng = require("../navigation/task.png")
    const newPng = require("../navigation/radio-button.png")
    const completedPng = require("../navigation/radio.png")
    return(
        <div>
            <nav className="nav-container">
                <div className="nav-item">
                    <NavLink to="/" className={isActive} ><img src={allPng} style={{height:"30px", marginTop:"5px"}} alt="all" /></NavLink>
                </div>
                <div className="nav-item" style={{opacity:{isActive}}}>

                <NavLink to="/new" className={isActive}><img src={newPng} style={{height:"27px", marginTop:"5px"}} alt="new"/></NavLink>
                </div>
                <div className="nav-item" style={{opacity:{isActive}}}>

                <NavLink to="/completed" className={isActive}><img src={completedPng} style={{height:"27px", marginTop:"5px"}} alt="completed"/></NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Nav;