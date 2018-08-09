import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      remainingCharacters: 140,
      messageContent: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      messageContent: event.target.value,
      remainingCharacters: (140 - event.target.value.length)
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleChange(event)} value={this.state.messageContent} />
        <p>{this.state.remainingCharacters} remaining characters</p>
      </div>
    );
  }
}

export default TwitterMessage;
