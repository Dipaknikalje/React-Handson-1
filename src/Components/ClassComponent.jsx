import { Component } from "react";

class ComponentOne extends Component{
    render(){
        return(
            <div className="Classcompodiv">
            <h1>This is created using Class Component</h1>
            <p>This is done using external CSS</p>
            <p style={{backgroundColor:"red"}}>This is done using internal CSS</p>
            </div>
        )
    }
}

export default ComponentOne