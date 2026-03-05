import React, { Component } from 'react';
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';

const exercises = [
  { name: "Push Ups",  type: "repetition" },
  { name: "Sit Ups",   type: "repetition" },
  { name: "Squats",    type: "repetition" },
  { name: "Plank",     type: "duration"   },
  { name: "Wall Sit",  type: "duration"   },
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedExercise: null
    };
  }

  render() {
    let screen = (
      <div>
        <h1>Choose an Exercise</h1>
        {exercises.map(ex => (
          <div key={ex.name}>
            <button onClick={() => this.setState({ selectedExercise: ex })}>
              {ex.name} ({ex.type})
            </button>
          </div>
        ))}
      </div>
    )

    if (this.state.selectedExercise) {
      let exerciseComponent = <RepetitionExercise name={this.state.selectedExercise.name} />
      if (this.state.selectedExercise.type === 'duration') {
        exerciseComponent = <DurationExercise name={this.state.selectedExercise.name} />
      }

      screen = (
        <div>
          {exerciseComponent}
          <button onClick={() => this.setState({ selectedExercise: null })}>Back</button>
        </div>
      )
    }

    return screen;
  }
}

export default App;
