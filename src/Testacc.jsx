import React, { useState } from "react";
import "./index.css";
import Apiacc from "./Apiacc";

const Testacc = () =>{
const [toggle, setToggle] = useState(0);
const toggleSet = (accid) =>{
    
    console.log(toggle, `toggle--`)
    console.log(accid, `id--`)

    if (toggle === accid){
        setToggle(null);
        return false;
    }
    setToggle(accid)
}
const Acclist = ({accid, ques, ans}) =>{
    return(
        <>
            <div className="card" id={accid}>
             <div className="ques"  onClick={()=>toggleSet(accid)}>{ques}  <span className="aac-btn">{accid === toggle ? "-" : "+"}</span></div>
               {accid === toggle ? <div className="ans">{ans}</div> : ""}
               </div>
        </>
    )
}

    return(
        <>
            <div className="center-b">
                <h1>Accordion</h1>

                {Apiacc.map((curdata, index)=>{
                    let {id, qn, ans} = curdata;
                    return(
                           <Acclist key={id} accid={index}  ques={qn} ans={ans} />
                    )
                })}

                
            </div>
        </>
    )
}

export default Testacc;