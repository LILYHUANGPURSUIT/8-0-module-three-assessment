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
        console.log(e.target);
        // this.setState ({
        //     searchResult: [...this.state.searchResult,{name: }]
        // })
    }
    
    render(){
        let {allPeopleInfo} = this.state;
        // let peopleOptions = allPeopleInfo.map(people => {
        //     return <div> </div>
        // })

        let userInput = allPeopleInfo.find(people => people.name===this.state.currentInput);
        return(
            <form onClick={this.handleSubmit}>
                <div id="peoplePage-title">Search for a Person</div>
                <input type="text" onInput={this.handleInput} placeholder="Find Your Person"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default People;