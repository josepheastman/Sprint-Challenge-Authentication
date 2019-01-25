import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, NavLink } from "react-router-dom";
import styled from "styled-components";

import Signup from "./components/Signup.js";
import Signin from "./components/Signin.js";
// import Jokes from "./components/Jokes.js";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <header>
            <nav>
              <NavLink to="/signup">Sign up</NavLink>
              <NavLink to="/signin">Sign in</NavLink>
              &nbsp;|&nbsp;
              <NavLink to="/jokes">Jokes</NavLink>
              <button onClick={this.signout}>
                <NavLink to="/signin">Sign out</NavLink>
              </button>
            </nav>
          </header>
          <main>
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
          </main>
        </div>
      </div>
    );
  }

  signout = () => {
    localStorage.removeItem("jwt");
  };
}

export default App;
