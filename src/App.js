import "./App.css";
import {Switch, Route} from "react-router-dom";
import NavBar from "./componenets/NavBar";
import Home from "./componenets/Home";
import Movies from "./componenets/Movies";
import People from "./componenets/People";
import Locations from "./componenets/Locations";


function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/people" component={People} />
          <Route exact path="/locations" component={Locations} />
        </Switch>
      </main>
    </div>
  );
}

export default App;