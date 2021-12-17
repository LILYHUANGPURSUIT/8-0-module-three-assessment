import React from "react";
import "./People.css"

class People extends React.Component {
    constructor(){
        super();
        this.state = {
            allPeopleInfo: [],
            currentInput: "",
            searchResult: [],
        }
    }

    handleFetch = ()=> {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(data => {
                this.setState ({
                    allPeopleInfo: data,
                })
            })
    }

    componentDidMount =()=> {
        this.handleFetch();
    }

    handleInput =(e)=>{
        this.setState ({
            currentInput: e.target.value,
        })
    }

    handleSubmit =(e)=> {
        e.preventDefault();
        let userInput = this.state.allPeopleInfo.find(people => people.name.toLowerCase()===this.state.currentInput.toLowerCase());
            this.setState ({
                searchResult: userInput,
            }) 
    }
    
    render(){
        let {searchResult} = this.state;

        return(
            
            <div className="people">
                <div id="peoplePage-title">Search for a Person</div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onInput={this.handleInput} placeholder="Find Your Person"/>
                    <button type="submit">Submit</button>
                </form>
                { searchResult &&
                    <div className="selectedMovieInfo"> 
                        <h2>Name: {searchResult.name}</h2>
                        <h2>Age: {searchResult.age}</h2>
                        <h2>Gender: {searchResult.gender}</h2>
                    </div>
                } 
                { !searchResult && 
                    <div className="searchNotFound">Not Found!</div>
                }
            </div>
            
        )
    }
}

export default People;