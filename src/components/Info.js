import React from "react";

import Socials from "./Socials";

export default function Info() {
    return (
        <div className="info">
            <h1>Karim Elsayad</h1>
            <p id="occupation">Software Engineer</p>
            <a href="portfolio.karimelsayad.me" id="website">portfolio.karimelsayad.me</a>
            <Socials/>
        </div>
    );
}