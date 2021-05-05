import React from "react";
import { Link } from "react-router-dom";
import './Game3.css'
function Game3() {
    return (
            <>
                <div className="game3__content">
                    <p style={{ fontSize: "18px" }}>
                    Arrange the cards to make the following true:
                    </p>
                    <ul style={{ fontSize: "18px" }}>
                        <li>The king is in one of the two middle spaces.</li>
                        <li>The queen is left of the jack and right of the ace.</li>
                        <li>The ace is directly next to the queen</li>
                    </ul>
                    <br />
                    <p style={{ fontSize: "18px" }}>
                    (Note: Left and right are from the player's perspective).
                    </p><br/>
                    <p style={{ fontWeight: "500" }}>
                        Drag the characters into the dotted boxes.
                    </p>
                    <Link to="/game4">Next</Link>
                </div>
            </>
    );
}

export default Game3;
