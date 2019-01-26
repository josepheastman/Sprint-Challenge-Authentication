import React from "react";
import axios from "axios";

class Jokes extends React.Component {
  state = {
    jokes: []
  };

  async componentDidMount() {
    const endpoint = `${process.env.REACT_APP_API_URL}/api/jokes`;
    console.log("endpoint", endpoint);
    try {
      const token = localStorage.getItem("jwt");
      const requestOptions = {
        headers: {
          authorization: token
        }
      };

      const response = await axios.get(endpoint, requestOptions);

      this.setState({ jokes: response.data });
    } catch (error) {
      console.error("we ran into an issue getting the jokes");
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.jokes.map(joke => (
            <li key={joke.id}>{joke.joke}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Jokes;
