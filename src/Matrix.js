import React, { Component } from 'react';
import Cell from "./Cell";

export default class Matrix extends Component {
  


  genRow = (vals) => {
    return vals.map(val => <Cell value={val}/>) 
  }
  
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  


  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}


let defaultValues = [];
for(let i = 0; i<10; i++){
  defaultValues[i] = [];
  for(let j = 0; j<10; j++){
    defaultValues[i].push("#F00");
  }
}
Matrix.defaultProps = {
  values: defaultValues
}