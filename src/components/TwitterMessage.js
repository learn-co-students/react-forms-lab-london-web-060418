import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message:"",
      remainingChars: 140,
    };
  }

  handleChange = (event) => {
    if(this.state.remainingChars > 0) {
    this.setState({
      message: event.target.value,
      remainingChars: (140 - event.target.value.length),
    })
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" onChange={this.handleChange} value={this.state.message}/>
        <p> {this.state.remainingChars} remaining chars... </p>
      </div>
    );
  }
}

export default TwitterMessage;
