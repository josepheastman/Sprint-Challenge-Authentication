import React from "react";
import axios from "axios";

class Signin extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = ev => {
    const { name, value } = ev.target;
    this.setState({ [name]: value });
  };

  handleSubmit = ev => {
    ev.preventDefault();

    const endpoint = `${process.env.REACT_APP_API_URL}/api/login`;

    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        window.location.reload(true);
      })
      .catch(err => console.error(err));

    this.props.history.push("/jokes");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htlmfor="">Username</label>
          <input
            name="username"
            value={this.state.username}
            placeholder="Username"
            onChange={this.handleInputChange}
            type="text"
          />
        </div>
        <div>
          <label htlmfor="">Password</label>
          <input
            name="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleInputChange}
            type="text"
          />
        </div>
        <div>
          <button type="submit">Sign in</button>
        </div>
      </form>
    );
  }
}

export default Signin;
