import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, NavLink } from "react-router-dom";
import styled from "styled-components";

import Signup from "./components/Signup.js";
import Signin from "./components/Signin.js";
import Jokes from "./components/Jokes.js";

const StyledNav = styled.div`
  // display: flex;
  // flex-direciton: row;
  // margin-left: auto;
  // margin-right: auto;
  // display: inline-block;
  // height: 100%;
  margin-left: 500px;
  font-family: cursive;
  font-size: 20px;
`;

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <header>
            <StyledNav>
              <NavLink
                to="/signup"
                style={{
                  fontWeight: "bold",
                  color: "black",
                  textDecoration: "none",
                  marginRight: "300px"
                }}
              >
                Sign up
              </NavLink>
              <NavLink
                to="/signin"
                style={{
                  fontWeight: "bold",
                  color: "black",
                  textDecoration: "none",
                  marginRight: "300px"
                }}
              >
                Sign in
              </NavLink>
              <NavLink
                to="/jokes"
                style={{
                  fontWeight: "bold",
                  color: "black",
                  textDecoration: "none",
                  marginRight: "20px",
                  marginRight: "300px"
                }}
              >
                Jokes
              </NavLink>
              <button onClick={this.signout}>
                <NavLink
                  to="/signin"
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    textDecoration: "none"
                  }}
                >
                  Sign out
                </NavLink>
              </button>
            </StyledNav>
          </header>
          <main>
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/jokes" component={Jokes} />
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
