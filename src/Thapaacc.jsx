import Myacc from "./Myacc";
import { useState } from "react";
function Thapaacc(){

const [toggle, setToggle] = useState(null);
let handleToggle=(id)=>{
    if(toggle===id){
        console.log(id);
        setToggle(null);
        return false
    }
   setToggle(id)
   
}
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                <h3>React Accordion</h3>
                <Myacc handleToggle={handleToggle} toggle={toggle} />
                </div>
            </div>
        </div>
           
        
    )
}

export default Thapaacc;