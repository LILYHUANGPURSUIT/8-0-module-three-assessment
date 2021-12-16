import React from "react";
import {Link} from "react-router-dom";
import "./NavBar.css"

class NavBar extends React.Component {
 
    render(){
        return(
            <div className="links">
                <Link to="/"><img id="home-logo"src="https://i.ytimg.com/vi/Qeufc790Lrw/maxresdefault.jpg" alt="home-logo"/></Link>
                <Link to="/movies">Movies</Link>
                <Link to="/people">People</Link>
                <Link to="/locations">Locations</Link>
            </div>
        )
    }
}

export default NavBar;