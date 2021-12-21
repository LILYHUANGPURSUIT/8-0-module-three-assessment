import "./App.css";
import {Switch, Route} from "react-router-dom";
import NavBar from "./componenets/NavBar";
import Home from "./componenets/Home";
import Movies from "./componenets/Movies";
import People from "./componenets/People";
import Locations from "./componenets/Locations";


function App() {
  return (
    <div  className="app">
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/people" component={People} />
          <Route path="/locations" component={Locations} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
