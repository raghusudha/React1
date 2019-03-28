import React from 'react';
import ReactDOM from 'react-dom';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
 
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  componentDidMount() {
      this.startCounter();
   
  }

  componentWillUnmount() {
   this.stopCounter();
  }
  stopCounter(){
    
   
    clearInterval(this.interval);
    // console.log("interval is "+this.interval +" state:"+this.count);
  }
  startCounter(){
    this.interval = setInterval(() => this.tick(), 1);
      

  }
  resetCounter(){
    this.state.seconds=0;
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
        <div><button onClick={()=>this.stopCounter()}>STOP</button> | <button onClick={()=> this.startCounter()}>START</button> | <button onClick={()=> this.resetCounter()}>RESET</button></div>
      </div>
    );
  }
}

ReactDOM.render(<Timer />, document.getElementById('root'));