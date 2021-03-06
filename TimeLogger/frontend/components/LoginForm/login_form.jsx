import React from "react";
import { Link, withRouter } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push("/");
    }
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  navLink() {
    return <Link to="/signup"> New? Sign Up!</Link>;
  }

  renderErrors() {
    return (
      <ul className="session-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to Straight Up
          <br />
          Please Log In
          <br />
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label className="login-username">
              <input
                type="text"
                placeholder="username"
                value={this.state.username}
                onChange={this.update("username")}
                className="login-input"
              />
            </label>
            <br />
            <label className="login-password">
              <input
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
              />
            </label>
            <br />
            <div className="submit-button">
              <button className="submit-button" type="submit">
                LOG IN
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
