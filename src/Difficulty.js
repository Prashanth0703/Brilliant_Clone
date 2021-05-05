import React from "react";
import { Link } from "react-router-dom";
import "./Difficulty.css";

function Difficulty() {
    return (
        <div className="difficulty">
            <img
                id="box"
                src="https://ds055uzetaobb.cloudfront.net/brioche/uploads/TvY8JiPVvOPqN1nhUDFL6d-Course-Logic-Reillustrated-1172-21754-irYAOI.png?width=400"
            />
            <br />
            <p style={{ fontSize: "18px" }}>
                The next three problems gradually increase in difficulty, and
                all of them are more challenging than the warm-ups you just
                solved.
            </p>
            <br />
            <p style={{ fontSize: "18px",marginBottom:"30px" }}>
                It's worth the effort. The most effective learning experiences
                are often those times when you get a problem wrong, and then
                challenge yourself to read, understand, and learn from the
                solution.
            </p>
            <Link to="/game3">Contninue</Link>
        </div>
    );
}

export default Difficulty;
