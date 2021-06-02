import React, { Component } from "react";

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
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
    return (
      <div>
        <article
          style={{ textAlign: "center", padding: "1rem" }}
          className="br2 ba white b--black-10 mv4 w-200 w-50-m w-25-l mw5 center shadow-3 bg-black"
        >
          <form acceptCharset="utf-8">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="ph0 mh0 fw6 clip">Register</legend>
              <div className="mt3">
                <label className="db fw4 lh-copy f6">Name</label>
                <input
                  className="b pa2 input-reset ba bg-white"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw4 lh-copy f6">Email address</label>
                <input
                  className="pa2 input-reset ba bg-white w-100 measure"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw4 lh-copy f6">Password</label>
                <input
                  className="b pa2 input-reset ba bg-white"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="mt3">
              <button
                className="b ph3 pv2 input-reset ba b--black bg-white grow pointer f6"
                onClick={this.onSubmit}
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