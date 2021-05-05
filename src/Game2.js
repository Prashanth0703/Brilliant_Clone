import React from "react";
import { Link } from "react-router-dom";
import "./Game2.css";

function Game2() {
    return (
        <div className="game2">
            <div className="game2__content">
                <img
                    id="kaylee"
                    src="https://ds055uzetaobb.cloudfront.net/brioche/uploads/TvY8JiPVvOPqN1nhUDFL6d-Course-Logic-Reillustrated-1571-95-OYBsYF.png?width=480"
                />
                <br />
                <p style={{ fontSize: "18px" }}>
                    One of the women above is named Kaylee and the other is
                    named Inara. They each make a statement about who they are
                    as shown.
                </p>
                <br />
                <p style={{ fontSize: "18px" }}>
                    We know that <b>at least one of them is lying</b>. What
                    color is Inara's dress"?"
                </p>
            </div>
            <div className="game2__sidebar">
                <p id="lesson">Lesson1 </p>
                <p id="chal">WARMUP PUZZLES</p>
                <br />
                <p>&lt; &gt;</p>
                <br />
                <label class="container">
                    
                    <input type="radio" value="Black" id="1"name="radio" />Black
                    <span className="checkmark"></span>
                </label>
                <label className="container">
                    
                    <input value="White" type="radio" id="2" name="radio" />White
                    <span className="checkmark"></span>
                </label>
                <label className="container">
                    <input value="There isn't enough information to be certain." id="3" type="radio" name="radio" />
                    <span className="checkmark">There isn't enough information to be certain.</span>
                </label>
                <Link to="/difficulty">Next</Link>
            </div>
        </div>
    );
}

export default Game2;
