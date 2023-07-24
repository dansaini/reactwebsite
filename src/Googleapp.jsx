import React, { useState } from "react";
import "./index.css";
import Header from "./Header";
import Nfooter from "./Nfooter";

const Googleapp = () =>{
const [check, setCheck] = useState(1);
const [curarr, setCurarr] = useState([]);
const [val, setVal] = useState({
    title: "",
    message:""
});

const inputHandler = (e) =>{
    let name = e.target.name;
    let value = e.target.value;

    setVal ((olddata)=>{
        return {
            ...olddata,
            [name] : value
        }
    })
}
const addEvent = () =>{
    setCheck(0)

    if(val.title !== "" && val.message !== ""){
    setCurarr((oldvalue)=>{
        return (
            [...oldvalue, val]
        )
    })
    setVal({
        title: "",
        message:""
    }) 
    setCheck(1)
}

}

const deleteItem = (id) =>{
    if (val ===""){
        alert();
    }
    setCurarr((olddata)=>{
        return olddata.filter((curarr, curid)=>{
            return curid !== id; 
        })
    })
}
let vv = curarr.sort((c1, c2)=> (c1.name > c2.name) ?1:-1)
    return(
        <>
        <Header />
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-6 col-sm-6 mt-4">
                    <div className="bg">
                        <input type="text" className="form-control mb-3" placeholder="Title" name="title"  onChange={inputHandler} value={val.title} />
                        {val.title === "" && check===0 ? <div className="error">Please enter the title</div> : ""}
                        <textarea className="form-control mb-3" placeholder="Message" rows="3" title="message" onChange={inputHandler} name="message" value={val.message}></textarea>
                        {val.message === "" && check===0 ? <div className="error">Please enter the message</div> : ""}
                        <div className="col-12 text-center">
                            <button className="btn btn-primary" onClick={addEvent} type="button">Add Message</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="container mt-4">  
                <div className="row">
                {vv.map((curdata, index)=>{
                    const {title, message} = curdata;
                    return(
                        <>
                        <div className="col-3" key={index}>
                            <div className="msg-box">
                                <h3>{title}</h3>
                                <p>{message}</p>
                                <div className="delete" onClick={()=>deleteItem(index)}>X</div>
                            </div>
                        </div>
                        </>
                    )
                })}
                    
                </div>
            </div>
        <Nfooter />
        </>
    )
}

export default Googleapp;