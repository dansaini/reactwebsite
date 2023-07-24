import React from "react";
import "./index.css";
import Apiacc from "./Apiacc";

const Myacc = ({handleToggle, toggle}) =>{
   
    return (
        <>
        {Apiacc.map((value)=>{
              const {id, qn, ans} = value;
              return(
            <div className="card" key={id}>
            <div className="question" onClick={()=>handleToggle(id)} > {qn} <span className="btn-acc" >{(id===toggle) ? " - " : " + "}</span></div>
            {(id===toggle) ? <div className='answer'> {ans} </div> : ""}
            </div>
              )
        })}
        </>
    )

}

export default Myacc;