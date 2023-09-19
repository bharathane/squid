import { Component } from "react";

import "./index.css";

class RegistrationForm extends Component {
  state = { name: "", email: "", number: "", level: "Easy" };

  navigettingToGame = () => {
    const { history } = this.props;
    const { name, email, number } = this.state;
    if (name === "") {
      alert("please enter your name");
    } else if (email === "") {
      alert("please enter your email");
    } else if (number === "") {
      alert("please enter your number");
    } else {
      history.replace("/game");
      window.location.reload();
    }
  };

  formSubmission = (event) => {
    event.preventDefault();

    this.navigettingToGame();
  };

  settingEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  settingNumber = (e) => {
    this.setState({ number: e.target.value });
  };

  settingNameInput = (e) => {
    this.setState({ name: e.target.value });
  };

  settingLevelInput = (e) => {
    this.setState({ level: e.target.value });
  };

  render() {
    return (
      <div className="bg-container">
        <img
          src="https://res.cloudinary.com/dr2jqbir9/image/upload/v1694862799/dd185d128625045.615b5e03b353b_rsoecd.png"
          alt="login"
          className="login-img"
        />
        <form onSubmit={this.formSubmission}>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" id="name" onChange={this.settingNameInput} />
          <br />

          <label htmlFor="email">Email</label>
          <br />
          <input type="email" id="email" onChange={this.settingEmail} />
          <br />

          <label htmlFor="number">Mobile Number</label>
          <br />
          <input type="tel" id="number" onChange={this.settingNumber} />
          <br />
          <label id="comboBox">Difficulty Level</label>
          <br />
          <select id="comboBox" onChange={this.settingLevelInput}>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <br />
          <button type="submit" className="start-btn">
            Start
          </button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
