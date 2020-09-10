import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }

    click = () => {
        const newColor = "#333"
        this.setState({
            color: newColor
        })
    }

    render() {
        return (
            <div className="cell" onClick={this.click} style={{ backgroundColor: this.state.color }}></div>
        )
    }
}