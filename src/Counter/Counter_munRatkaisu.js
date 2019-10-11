import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
    state = {
        counter: 0,
        background: "evenNumbers"
    }

    addHandler = (event) => {
        let number = this.state.counter % 2;
        this.setState({counter: this.state.counter+1});
        this.setState(number === 0 ? {background: "oddNumbers"} : {background: "evenNumbers"});
    }

    removeHandler = (event) => {
        if (this.state.counter > 0) {
            let number = this.state.counter % 2;
            this.setState({counter: this.state.counter-1});
            this.setState(number === 0 ? {background: "oddNumbers"} : {background: "evenNumbers"});
        }
    }

    resetHandler = (event) => {
        this.setState({counter: 0, background: "evenNumbers"});
    }

    render () {
        return (
            <div>
                <div id="circle" className={this.state.background}>{this.state.counter}</div>
                <div>
                    <button onClick={this.addHandler}>Add one</button> 
                    <button onClick={this.removeHandler}>Remove one</button>
                    <button onClick={this.resetHandler}>Reset counter</button>
                </div>
            </div>
        );
    }

}

export default Counter;