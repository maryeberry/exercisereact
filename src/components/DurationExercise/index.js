import React, { Component } from 'react';

class DurationExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      running: false
    };
    this.interval = null;
    this.startTimer = this.startTimer.bind(this);
    this.reset = this.reset.bind(this);
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
    this.setState({ running: true });
  }

  reset() {
    clearInterval(this.interval);
    this.setState({ seconds: 0, running: false });
  }

  formatTime() {
    const minutes = Math.floor(this.state.seconds / 60);
    const secs = this.state.seconds % 60;

    let paddedMinutes = '' + minutes;
    if (minutes < 10) {
      paddedMinutes = '0' + minutes;
    }

    let paddedSeconds = '' + secs;
    if (secs < 10) {
      paddedSeconds = '0' + secs;
    }

    return paddedMinutes + ':' + paddedSeconds;
  }

  render() {
    let actionButton = <button onClick={this.startTimer}>Start</button>;

    if (this.state.running) {
      actionButton = <button onClick={this.reset}>Reset</button>;
    }

    let display = (
      <div>
        <p>{this.props.name}</p>
        <p>Time: {this.formatTime()}</p>
        {actionButton}
      </div>
    );

    return display;
  }
}

export default DurationExercise;
