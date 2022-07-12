import React from "react";

const Footer = () => (
    <footer>
        Created by <span id="Chris">Chris</span>
        <br />
        <span>
            <i
                className="fab fa-github"
                onClick={() =>
                    window.open("https://github.com/chriss1610", "_blank")
                }
            ></i>{" "}
            
            
            
            
        </span>
    </footer>
);

export default Footer;
