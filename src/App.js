import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';

class App extends Component {

  state = {
    correctAnswer: 0,
    numQuestions: 0,
  };

  handleAnswer = answerWasCorrect => {
    if (answerWasCorrect) {
      this.setState(currState => ({
        correctAnswer: currState.correctAnswer + 1,
      }));
    }
    this.setState(currState => ({
      numQuestions: currState.numQuestions + 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <Game
         handleAnswer={this.handleAnswer}
         numCorrect={this.state.correctAnswer}
         numQuestions={this.state.numQuestions} />
        {/* <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button>True</button>
          <button>False</button>
          <p className="text">
            Your Score: {numCorrect}/{numQuestions}
          </p>
        </div> */}
      </div>
    );
  }
}

export default App;
