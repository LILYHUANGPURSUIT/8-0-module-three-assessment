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
            this.setState ({
                chooseOptions: "Hide Locations",
                display: true,
            })
        
    }

    // handleHide = () =>{
    //     if(this.state.chooseOptions){
    //         this.setState ({
    //             chooseOptions: "Show Locations",
    //             showOrHide: true,
    //         })
    //     }
    // }

    render(){
        let {allLocationsInfo} = this.state;
        let displayLocations = allLocationsInfo.map(location => {
            return (
                <ul className="locations">
                    <li>Name: {location.name}</li>
                    <li>Climate: {location.climate}</li>
                    <li>Terrain: {location.terrain}</li>
                </ul>
            )
        })


        return(
            <div id="Locations-page">
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