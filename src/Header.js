import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ReorderIcon from "@material-ui/icons/Reorder";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="header">
                <Link to="/">
                <img
                    className="logo"
                    src="https://www.pandemicpods.org/assets/partners/brilliant-logo.png"
                />
                </Link>
                
                <a href="" style={{ fontWeight: "100" }}>
                    TODAY
                </a>
                <a href="" style={{ fontWeight: "500" }}>
                    COURSES
                </a>
                <a href="" style={{ fontWeight: "100" }}>
                    PRACTICE
                </a>
                <div className="header__search">
                    <SearchIcon id="search__icon" />
                    <input type="text" />
                </div>
                <button id="trial">START TRIAL</button>
                <div id="dropdown">
                    <ReorderIcon id="list" />
                </div>
            </div>
            <div className="logic__countdown">
                <p id="star">🌟 Excel in math and Science</p>
                <p id="premium">
                    Try Premium free for 7 days and save 20%. Offer ends in 1d
                    05h 23m 28s. <a href=""><b>Start Trial</b></a>
                </p>
            </div>
        </>
    );
}

export default Header;
