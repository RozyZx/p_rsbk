import React, {Component} from "react";
import Clicker from "./Clicker";
import Holder from "./Holder";

class Time extends Component {
    state = {
        date : null
    }

    constructor(props) {
        super(props);
        this.state = {date : new Date()};
        //setInterval()
    }

    render() {
        return (
            <div>
                <p>{this.state.date.getHours()} : {this.state.date.getMinutes()} : {this.state.date.getSeconds()}</p>
                <Clicker />
                <Holder />
            </div>
        )
    }

    componentDidMount() {
        setInterval(() => {
            this.setState(() => {
                return {
                    date : new Date()
                }
            })
        }, 1000)
    }
}

export default Time;