import React, { useState } from "react";
import "./index.css";

const Todolist = () =>{
    const [vals, setVals] = useState([]);
    const [val, setVal] = useState("");

    const getVal = (e) =>{
        setVal(e.target.value)
    }

    const Submit =()=>{
        setVals((olddata)=>{
            return (
                [...olddata, val]
            )
        })
        setVal("");
    }

    const deleted = (id) =>{
        setVals((olddata)=>{
            return olddata.filter((curarr, curindex2)=>{
                return curindex2 !== id;
            })
        })
    }

    return(
        <>
            <div className="center-b todo-list">
                <h2>TO DO List</h2>
                <p>Enter Value {val}</p>
                <input type="text" placeholder="Please enter to do list" className="input" onChange={getVal} value={val} />
                <button type="button" className="btn" onClick={Submit}>Add List</button>
                <ul>
                {vals.map((curvalue, curindex)=>{
                    return(
                        <li key={curindex}><div className="close" onClick={()=>deleted(curindex)}>X</div>{curvalue}</li>
                    )
                })}
                </ul>
            </div>
        </>
    )
}

export default Todolist;