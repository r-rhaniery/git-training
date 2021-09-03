import React from "react";


function Footer(){
    const currentYear = new Date().getFullYear();
    return (
        <footer>
        <p>Developed by Pedro Colares</p>
        <p>C
            opyright © {currentYear}</p>
        </footer>
        );
}

export default Footer;