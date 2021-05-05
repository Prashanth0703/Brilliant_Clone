import React from "react";
import { Link } from "react-router-dom";
import "./Logic.css";

function Logic() {
    return (
        <div className="logic">
            <div className="logic__left">
                <p id="back">&lt; Back to all courses</p>
                <h1 id="heading">Logic</h1>
                <br />
                <p id="intro">
                    Stretch your analytic muscles with knights, knaves, logic
                    gates, and more!
                </p>
                <br />
                <p className="lines">
                    The beginning of our introductory math journey is Logic.
                    Through these challenging problem solving exercises, you'll
                    construct the critical thinking skills that are the basis
                    for mathematical reasoning.
                </p>
                <br />
                <p className="lines">
                    You'll use limited information to make predictions –
                    eliminating the impossible to uncover the truth. This course
                    builds up to some truly mind-bending challenges!
                    <a href="">Read more</a>
                </p>
                <br />
                <p className="lines2">
                    <a href="">View prerequisites and next steps</a>
                </p>
            </div>
            <div className="logic__right">
                <img
                    class="imlogic"
                    src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png?width=254"
                />
                <div className="logic__right__bottom">
                    <div className="left">
                        <p style={{ fontSize: "30px", fontWeight: "500" }}>
                            37
                        </p>
                        <p style={{ fontWeight: "500", color: "#c0c0c0" }}>
                            Interactive quizzes
                        </p>
                    </div>
                    <div className="right">
                        <p style={{ fontSize: "30px", fontWeight: "500" }}>
                            265+
                        </p>
                        <p style={{ fontWeight: "500", color: "#c0c0c0" }}>
                            Concepts and exercises
                        </p>
                    </div>
                </div>
                <Link to="/game1">
                    <button id="but">Continue Course</button>
                </Link>
            </div>
        </div>
    );
}

export default Logic;
