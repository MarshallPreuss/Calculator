import React, { Component } from 'react';
import Calc from './Components/Calc';
import Pad from './Components/Pad';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      result: ""
    }
  }

  onClick = button => {

    if(button === "="){
      this.calculate()
    }
    else if(button === "C"){
      this.reset()
    }
    else {
      this.setState({
        result: this.state.result + button
      })
    }
  }

  calculate = () => {
    let checkResult = ''
    if(this.state.result.includes('--')){
      checkResult = this.state.result.replace('--','+')
    }
    else {
      checkResult = this.state.result
    }

    try{
      this.setState({
        result: (eval(checkResult) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  }

  reset = () => {
    this.setState({
      result: ""
    })
  }

  render() {
    return(
      <div className="body">
        <Calc result={this.state.result}/>
        <Pad onClick={this.onClick}/>
      </div>
    )
  }
}

export default App;
