import React from "react";
import "./Game5.css";
function Game5() {
    return (
        <>
            <div className="game5__content">
                <ol style={{ fontSize: "18px" }}>
                    <li>There is exactly 1 false statement in this list.</li>
                    <li>There are exactly 2 false statements in this list.</li>
                    <li>There are exactly 3 false statements in this list.</li>
                </ol><br/>
                <p style={{ fontSize: "18px" ,marginLeft:"10px"}}>How many <b>false</b> statements are there int the list above?</p>
            </div>
        </>
    );
}

export default Game5;
