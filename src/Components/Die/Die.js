import  React,{ Component } from "react";
import "./Die.css";

class Die extends Component{
    render(){
        return(
            <div className="die">
                <i className={`fa-solid fa-dice-${this.props.face}`} />
            </div>
        );
    }

}

export default Die;