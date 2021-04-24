import React, { Component } from "react";

export default class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      valid: false,
    };
  }

  onSignIn = (value) => {
    console.log(value);
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          this.props.logUpdate("signedin", res.name, res.points);
        } else {
          console.log(res);
        }
      });
  };

  render() {
    const { logUpdate } = this.props;
    return (
      <div>
        <article className="br2 ba dark-gray b--black-10 mv4 w-200 w-50-m w-25-l mw5 center shadow-3 bg-yellow">
          <form acceptCharset="utf-8">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
              <div className="mt3">
                <label className="db fw4 lh-copy f6">Email address</label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100 measure"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw4 lh-copy f6">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="mt3">
              <button
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                onClick={this.onSubmit}
              >
                Sign In
              </button>
            </div>
            <div className="mt3">
              <button
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                onClick={() => logUpdate("register", "", "")}
              >
                Register
              </button>
            </div>
          </form>
        </article>
      </div>
    );
  }
}
