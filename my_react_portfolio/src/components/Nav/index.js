import React from "react";

export default function () {
    return (
        <nav className ="navbar navbar-expand-lg navbar-dark   bg-dark">
            <a className="navbar-brand" href="/">Nigar Abdullayeva</a>
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
        </nav>
    )
}