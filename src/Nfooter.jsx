import React from "react";
import "./index.css";

const Nfooter = () =>{
    let year = new Date().getFullYear();
    return(
        <>
            <div className="footer">
            <h1>© {year} Mind Digital Group</h1>
            </div>
        </>
    )
}

export default Nfooter;