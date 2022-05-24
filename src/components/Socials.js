import React from "react";

import email_icon from "../images/email_icon.svg"
import linkedin_icon from "../images/linkedin.svg"

export default function Socials() {
    return (
        <div className="social-links">
            <a href="mailto:karimelsayad1999@gmail.com" id="email">Email</a>
            <a href="http://github.com/karimElsayad247/" id="github">GitHub</a>
            <a href="https://www.linkedin.com/in/karimelsayad247/" id="linkedin">LinkedIn</a>
        </div>
    );
}