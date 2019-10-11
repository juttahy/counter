import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
    state = {
        counter: 0
    }

    addHandler = () => {
        this.setState({counter: this.state.counter+1});
    }

    removeHandler = () => {
        if (this.state.counter > 0) {
            this.setState({counter: this.state.counter-1});
        }
    }

    resetHandler = () => {
        this.setState({counter: 0});
    }

    render () {
        return (
            <div>
                <div id="circle" className={this.state.counter % 2 === 0 ? "evenNumbers" : "oddNumbers"}>
                {this.state.counter}
                </div>
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