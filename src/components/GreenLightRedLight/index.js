import { Component } from "react";

import { GameBox } from "./styledComponent";
import "./index.css";

class Game extends Component {
  state = { colorChange: false, score: 0 };
  componentDidMount() {
    this.timerFunction();
  }

  timerFunction = () => {
    this.timerId = setInterval(() => {
      this.setState((prevState) => ({ colorChange: !prevState.colorChange }));
    }, 1500);
  };

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  clickingBtn = () => {
    const { colorChange, score } = this.state;
    if (colorChange === false) {
      this.setState((prevState) => ({ score: prevState.score + 1 }));
    } else {
      clearInterval(this.timerId);
      alert(`your score is ${score}`);
    }
  };

  render() {
    this.timerFunction();
    const { colorChange } = this.state;

    return (
      <div className="bg-container-game">
        <div className="game-container">
          <img
            src="https://res.cloudinary.com/dr2jqbir9/image/upload/v1694862799/dd185d128625045.615b5e03b353b_rsoecd.png"
            alt="login"
            className="login-img"
          />
          <GameBox colorchange={colorChange} onClick={this.clickingBtn}>
            Click Me !
          </GameBox>
        </div>
      </div>
    );
  }
}

export default Game;
