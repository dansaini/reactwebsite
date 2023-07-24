import React, { useState } from "react";
import "./index.css";

const Testtodolist = ()=>{
    const [val, setVal] = useState("");
    const [list, setList] = useState([]);

    const inputval = (e)=>{
        setVal(e.target.value);
    }

    const storeList = () => {
        setList((oldlist)=>{
            return [...oldlist, val]
        })
        setVal("")
    }

    const deleteItem = (id) =>{
        setList((oldlist)=>{
            return(
                oldlist.filter((curarr, index)=>{
                    return index !== id;
                })
            )
        })
    }



return(
    <>
        <div className="center-b">
            <h1>To Do List</h1>
            <input type="text" placeholder="Enter To DO list" className="input" onChange={inputval} value={val} />
            <button className="btn" onClick={storeList}>Add List</button>
        </div>

        <div className="center-b todo-list">
            <h1>To Do List</h1>
            <ul>
                {list.map((curval, index)=>{
                    return(
                    <li key={index}><div className="close" onClick={()=>deleteItem(index)}>X</div> {curval}</li>
                    )
                })}
            </ul>
        </div>
    </>
)
}

export default Testtodolist;