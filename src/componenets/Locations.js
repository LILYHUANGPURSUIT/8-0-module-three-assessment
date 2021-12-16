import React from "react";
import "./Locations.css"

class Locations extends React.Component {
    constructor(){
        super();
        this.state = {
            allLocationsInfo: [],
            chooseOptions: "Show Locations",
            display: false,
        }
    }

    handleFetch = ()=> {
        fetch("https://ghibliapi.herokuapp.com/locations")
            .then(res => res.json())
            .then(data => {
                this.setState ({
                    allLocationsInfo: data,
                })
            })
    }

    componentDidMount =()=> {
        this.handleFetch();
    }
    
    handleShowOrHide = () =>{
        if(this.state.chooseOptions === "Show Locations"){
            this.setState ({
                chooseOptions: "Hide Locations"
            })
        } else {
            this.setState ({
                chooseOptions: "Show Locations"
            })
        }

        if(!this.state.display ){
            this.setState ({ 
                display: true,
            })
        } else {
            this.setState ({ 
                display: false,
            })
        }
            
        

    }

    render(){
        let {allLocationsInfo} = this.state;
        let displayLocations = allLocationsInfo.map(location => {
            return (
                <ul>
                    <li>
                        <div>Name: {location.name}</div>
                        <div>Climate: {location.climate}</div>
                        <div>Terrain: {location.terrain}</div>
                    </li>
                </ul>
            )
        })


        return(
            <div className="locations">
                <div id="LocationsPage-title">List of Locations</div>
                <button type="submit" onClick={this.handleShowOrHide}>{this.state.chooseOptions}</button>
                { this.state.display && 
                    <div>{displayLocations}</div>
                }
                { !this.state.display && 
                    <div></div>
                } 
            </div>
        )
    }
}

export default Locations;