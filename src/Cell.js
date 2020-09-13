import React, {Component} from "react"

export default class Cell extends Component {
    constructor(props) {
        super(props)
        // console.log("sad",this.props)
        this.state = {
            color: this.props.values
        }
    }

    clickListener = () => {
        this.setState({
            color: "#333"
        })
    }

    render () {
        // console.log(this.state)
        return <div className="cell" onClick= {this.clickListener} style={{backgroundColor: this.state.color}}></div>
    }
}

Cell.defaultProps = {
    values: "#fff"
}