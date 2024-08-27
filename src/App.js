import React, {Component, useState} from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, 
      step: 1
    };
  }

  increase = () => {
    this.setState({
      count: this.state.count + this.state.step
    });
  };

  decrease = () => {
    this.setState({
      count: this.state.count - this.state.step
    });
  };

  stepChange = (event) => {
    this.setState({
      step: Number(event.target.value) 
    });
  };

  render(){
    return (
      <div className="App">
        <h1>Counter App</h1>
        <div>
          <h2>{this.state.count}</h2>
          <button onClick={this.increase}>+</button>
          <button onClick={this.decrease}>-</button>
          <input 
            value={this.state.step} 
            onChange={this.stepChange}>
          </input>
        </div>
      </div>
    )
  }
};

export default App;
