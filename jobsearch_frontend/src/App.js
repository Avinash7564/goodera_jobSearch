import "./App.css";
import Hero from "./components/Hero";
import { Switch, Route } from "react-router-dom";
import Post from "./components/Post";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Hero />
      </Route>
      <Route exact path="/post">
        <Post />
      </Route>
    </Switch>
  );
}

export default App;
