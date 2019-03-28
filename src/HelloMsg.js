import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';

class HelloMsg extends Component {
    constructor(props){
        super(props);
        this.state={helloName:"Test App",name:props.name};
    }
    
    sayHello(appName){
      // this.props.name="Raghu";
      // this.helloName=appName;
      // console.log("value is" + this.helloName);
      // alert("Hello World");
      this.setState({helloName:appName,name:'Raghu'})
    }
  render() {
    console.log(">> render..");
    return (
      <div>
        <h2>{this.state.helloName}</h2>
        <h3>{this.state.name} {this.props.email}</h3>
        <button onClick={()=>this.sayHello('intro App')}>Click Me</button>
      </div>
    );
  }
}

export default HelloMsg;
