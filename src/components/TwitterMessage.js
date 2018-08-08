import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { remaining: props.maxChars };
  }

  handleChange = (event) => {
    this.setState({
      tweet: event.target.value,
      remaining: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.tweet}
          onChange={this.handleChange}
        />
        <p>{this.state.remaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
