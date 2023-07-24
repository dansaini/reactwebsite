import React, { useState } from "react";
import "./index.css";
import Apiacc from "./Apiacc";

const Newacc = () =>{
    const [toggle, setToggle] = useState(null);
    


    const handleToggle = (id) =>{
        console.log(toggle);
        if (toggle === id){
            setToggle(null);
            return false;
        }
        setToggle(id)
    }
    const Myacc = ({handleToggle, toggle}) =>{
        return (
            <>
            {Apiacc.map((curval)=>{
                    const {id, qn, ans} = curval;
                    return(
                        <>
                            <div className="card" >
                                <div className="question" onClick={()=>handleToggle(id)}>{qn} <span className="btn-acc"> {(id === toggle) ? "-" : "+" } </span></div>
                                 {(id === toggle) ? <div className='answer'> {ans} </div> : "" } 
                            </div>
                        </>
                    )
                })}
            </>
        )
    
    }
    

    const Myaccs = ({ques, answ}) =>{
        const [toggles, setToggles] = useState(false);
        const Accopen = () =>{
            setToggles(!toggles);
        }
        return (
                <>
                    <div className="card" >
                        <div className="question" onClick={Accopen}>{ques} <span className="btn-acc"> {(toggles === true) ? "-" : "+" } </span></div>
                            {(toggles === true) ? <div className='answer'> {answ} </div> : "" } 
                    </div>
                </>     
        )
    }

    return(
        <>
            <div className="center-b">
                <h1>React Accordion</h1>
                <Myacc handleToggle={handleToggle} toggle={toggle} />
            </div>

            <div className="center-b">
                <h1>React Accordion 2</h1>
                {Apiacc.map((curvals)=>{
                    const {id, qn, ans} = curvals;
                    return(
                    <Myaccs  ques={qn} answ={ans}/>
                    )
                }) }
            </div>
        </>
    )
}

export default Newacc;