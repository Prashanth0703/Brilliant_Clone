import React from "react";
import "./Game1.css";

function Game1() {
    return (
        <div className="game1">
            <div className="game1__content">
                <p style={{ fontSize: "18px" }}>
                    Joseph, Kevin, and Nicholas are 3 brothers, and the
                    following statements about them are all true:
                </p>
                <ul style={{ fontSize: "18px" }}>
                    <li>Joseph is not the youngest.</li>
                    <li>Kevin is the oldest.</li>
                    <li>Nicholas is not the oldest.</li>
                </ul>
                <br />
                <p style={{ fontWeight: "500" }}>
                    Drag the characters into the dotted boxes.
                </p>
                <a href="/game2">Next</a>
            </div>
            <div className="game1__sidebar">
                <p id="lesson">Lesson1 </p>
                <p id="chal">WARMUP PUZZLES</p>
                <br />
                <p>&lt; &gt;</p>
            </div>
        </div>
    );
}

export default Game1;
