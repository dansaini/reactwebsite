import React from "react";
import "./index.css";
import Apiacc from "./Apiacc";

const Testacc = () =>{
    return(
        <>
            <div className="center-b">
                <h1>Accordion</h1>

                {Apiacc.map((curdata)=>{
                    return(
                        <>
                            <div className="ques">{curdata.qn}</div>
                            <div className="ques">{curdata.ans}</div>
                        </>
                    )
                })}
                
            </div>
        </>
    )
}

export default Testacc;