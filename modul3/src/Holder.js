import React, {Component} from "react";

class Holder extends Component {
    intervalId = 0;

    state = {
        holdTime : 0
    }

    holdDown = () => {
        this.intervalId = setInterval(() => {
            this.setState(state => {
                return {holdTime : state.holdTime + 1}
            })
        }, 200)
    }

    release = () => {
        clearInterval(this.intervalId)
    }

    render() {
        return (
            <div>
                <center>
                    <span>{this.state.holdTime}</span>
                    <button onMouseDown={this.holdDown} onMouseUp={this.release}>Hold Me!</button>
                </center>
            </div>
        )
    }
}

export default Holder