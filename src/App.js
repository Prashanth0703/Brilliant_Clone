import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogicGame from "./LogicGame";
import Header from "./Header";
import Logic from "./Logic";
import Game1 from "./Game1";
import Game2 from "./Game2";
import Game3 from "./Game3";
import Game4 from "./Game4";
import Game5 from "./Game5";
import Difficulty from "./Difficulty";
function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/game1">
                        <Header />
                        <LogicGame />
                        <Game1/>
                    </Route>
                    <Route path="/game2">
                        <Header />
                        <LogicGame />
                        <Game2/>
                    </Route>
                    <Route path="/game3">
                        <Header />
                        <LogicGame />
                        <Game3/>
                    </Route>
                    <Route path="/game4">
                        <Header />
                        <LogicGame />
                        <Game4/>
                    </Route>
                    <Route path="/game5">
                        <Header />
                        <LogicGame />
                        <Game5/>
                    </Route>
                    <Route path="/difficulty">
                        <Header />
                        <LogicGame />
                        <Difficulty/>
                    </Route>
                    <Route path="/">
                        <Header />
                        <Logic />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
