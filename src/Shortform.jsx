import React, { useState } from "react";
import "./index.css";

const Shortform = () =>{
    const [vals, setVals] = useState([]);
    const [val, setVal] = useState({Fname : "",Lname : "",Email : ""});

const inputval = (event) =>{
    let value = event.target.value;
    let name = event.target.name;

    setVal((setVal)=>{
        return{
            ...setVal,
            [name] : value,
        }
    })
}

const Submit =() =>{
    setVals([...vals, val])
    console.log(vals);
}
    return(
        <>
            <div className="center-b">
                <h1>Contact form </h1>
                <input type="text" autoComplete="off" onChange={inputval} placeholder="Please enter first name" className="input" name="Fname" value={val.Fname} />
                <input type="text" autoComplete="off"  onChange={inputval} placeholder="Please enter last name" className="input" name="Lname" value={val.Lname}/>
                <input type="text" autoComplete="off"  onChange={inputval} placeholder="Please enter email" className="input" name="Email" value={val.Email}/>
                <button type="submit" onClick={Submit} className="btn2">Submit</button>
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                    {vals.map((curvalue, curindex)=>{
                        let {Fname,Lname,Email} = curvalue
                        return(
                            <>
                            <tr>
                                <td>{Fname}</td>
                                <td>{Lname}</td>
                                <td>{Email}</td>
                            </tr>
                            </>
                        )
                    })}
                </table>

            </div>
        </>
    )
}

export default Shortform;