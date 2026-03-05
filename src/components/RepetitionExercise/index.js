import React, { Component } from 'react';

class RepetitionExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reps: 0
    };
    this.addRep = this.addRep.bind(this);
    this.reset = this.reset.bind(this);
  }

  addRep() {
    this.setState({ reps: this.state.reps + 1 });
  }

  reset() {
    this.setState({ reps: 0 });
  }

  render() {
    let display = (
      <div>
        <p>{this.props.name}</p>
        <p>Reps: {this.state.reps}</p>
        <button onClick={this.addRep}>Add Rep</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );

    return display;
  }
}

export default RepetitionExercise;
