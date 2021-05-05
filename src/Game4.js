import React from "react";
import { Link } from "react-router-dom";
import Game3 from "./Game3";
import "./Game4.css";
function Game4() {
    return (
        <>
            <div className="game4__content">
                <p style={{ fontSize: "18px" }}>
                    Five friends competed in a race.
                </p>
                <br />
                <ul style={{ fontSize: "18px" }}>
                    <li>Pyrrha finished faster than Blake.</li>
                    <li>
                        The smallest difference in finishing times was between
                        Pyrrha and Ruby.
                    </li>
                    <li>
                        The largest difference in finishing times was between
                        Ruby and Weiss.
                    </li>
                    <li>Yang finished either 1st or 3rd .</li>
                </ul>
                <br />
                <p style={{ fontWeight: "500" }}>
                    Drag the characters into the dotted boxes.
                </p>
                <Link to="/game5">Next</Link>
            </div>
        </>
    );
}

export default Game4;
