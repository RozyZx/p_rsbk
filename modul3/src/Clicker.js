import React, {Component} from "react";

class Clicker extends Component {
    
    render() {
        return (
            <div>
                <center>
                    <span>{this.state.clickCount}</span>
                    <button onClick={this.countUp}>Click Me!</button>
                </center>
            </div>
        )
    }

    state = {
        clickCount : 0
    }

    countUp = () => {
        this.setState(state => {
            return {clickCount : state.clickCount + 1}
        })
    }
}

export default Clicker;