import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }


  handleChange = event => {
    this.setState({
      "username": event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.state.username.length > 0 && this.state.password > 0
    ? this.props.onSubmit(this.state.username, this.state.password)
    : console.log("fields can't be empty")
  }

  render() {
    return (
      <form onSubmit= {this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
