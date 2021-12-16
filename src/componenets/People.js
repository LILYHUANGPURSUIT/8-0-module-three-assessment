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
        let userInput = this.state.allPeopleInfo.filter(people => people.name===this.state.currentInput);
        this.setState ({
            searchResult: userInput,
        })
    }
    
    render(){
       
        let displayList = this.state.searchResult.map(people => {
            return (
                <div className="people"> 
                    <h2>Name: {people.name}</h2>
                    <h2>Age: {people.age}</h2>
                    <h2>Gender: {people.gender}</h2>
                </div>
            )
        })

        

        return(
            <div id="people-page">
                <form onClick={this.handleSubmit}>
                    <div id="peoplePage-title">Search for a Person</div>
                    <input type="text" onInput={this.handleInput} placeholder="Find Your Person"/>
                    <button type="submit">Submit</button>
                </form>
                {displayList}
            </div>
            
        )
    }
}

export default People;