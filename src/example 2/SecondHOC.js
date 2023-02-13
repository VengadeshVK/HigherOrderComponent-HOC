import React,{useState} from "react";

const SecondHOC = (Component) => {
    // Its for counter example
    const[count,setCount]=useState(0)

    const NewComponent = (props) => {
        return(
        <div className="color"><Component count={count} setCount={setCount} {...props} /></div>
        
        )
    }
    return NewComponent
}

export default SecondHOC