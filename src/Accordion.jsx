import React from "react";
import "./index.css"
import Accdata from "./Accdata";

const Accordion = () =>{
    return(
        <>
<div className="accordion" id="accordionExample">
{Accdata.map((curval, index)=>{
    return(
        <>
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className={`accordion-button ${index === 0 ? "" : "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${index}collapseOne`} aria-expanded={index === 0 ? "true" : "false"} aria-controls={`${index}collapseOne`}>
       {curval.Question}
      </button>
    </h2>
    <div id={`${index}collapseOne`} className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        {curval.Answer}
      </div>
    </div>
  </div>
        </>
    )
})}
  
</div>





        </>
    )
}

export default Accordion;