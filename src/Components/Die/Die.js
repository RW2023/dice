import { Component } from "react";
import "./Die.css";

class Die extends Component{
    render(){
        this.setState({value: this.props.value});
        return(
            <div className="die">
                <i class="fa-solid fa-dice-five"></i>
            </div>
        );
    }

}

export default Die;