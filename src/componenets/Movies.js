import React from "react";
import "./Movies.css"

class Movies extends React.Component {
    constructor(){
        super();
        this.state = {
            allMoviesInfo: [],
            currentSelected: null,
        }
    }

    handleFetch = ()=> {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(data => {
                this.setState ({
                    allMoviesInfo: data,
                })
            })
    }

    componentDidMount =()=> {
        this.handleFetch();
    }

    handleSelected =(e)=>{
        this.setState ({
            currentSelected: e.target.value,
        })
    }
    
    render(){
        let {allMoviesInfo} = this.state;
        let movieOptions = allMoviesInfo.map(movie => {
            return <option className="movies">{movie.title}</option>
        })

        let selected = allMoviesInfo.find(movie => movie.title===this.state.currentSelected);

        return(
            <div id="movies-page">
                <h1 id="moviesPage-title">Select a Movie</h1>
                <select onChange={this.handleSelected}>
                    <option></option>
                    {movieOptions}
                </select>
                {   selected && 
                    <div>
                        <h2>Title: {selected.title}</h2>
                        <h2>Release Date: {selected.release_date}</h2>
                        <h2>Descrition: {selected.description}</h2>
                    </div> 
                }
            </div>
        )
    }
}
export default Movies;