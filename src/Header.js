import React from "react";
import './App.css';
import { FaUserLarge } from "react-icons/fa6";
import { IoMenuSharp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

function Nav(){
    return(
        <div id="nav">
            <header className="header">
            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <button>Search</button>
            </div>
        </header> 
        </div>
    )
}
export default Nav;