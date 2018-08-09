import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: undefined,
      password: undefined
    };
  }

  // handleUsernameChange = (event) => {
  //   console.log(event.target.value)
  //   this.setState ={
  //     username: event.target.value
  //   }
  // }
  //
  // handlePasswordChange = (event) => {
  //   this.setState ={
  //     password: event.target.value
  //   }
  // }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // console.log('help!');
    if (this.state.username && this.state.password) {
      return this.props.onSubmit(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit" onSubmit={this.handleSubmit}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
