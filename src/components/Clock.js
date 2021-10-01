import React, { Component } from 'react'

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    return (
      <div>
        <h3>Class Clock</h3>
        <div>Seconds: {this.state.seconds}</div>
        <button
          onClick={() => this.componentWillUnmount()}
        >Stop Clock</button>
        <button
          onClick={() => this.componentDidMount()}
        >Start Clock</button>
      </div>
    )
  }
}

export { Clock }