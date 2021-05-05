import React from "react";
import Difficulty from "./Difficulty";
import Game1 from "./Game1";
import Game2 from "./Game2";
import Game3 from "./Game3";
import Game4 from "./Game4";
import Game5 from "./Game5";
import "./LogicGame.css";
const games=[Game1,Game2,Difficulty,Game3,Game4,Game5]
function LogicGame() {
    return (
        <div className="logicGame">
            <div className="logicGame__sidebar">
                <p id="arrow">&lt; Back</p>
                <p id="head">Logic</p>
            </div>
        </div>
    );
}

export default LogicGame;
