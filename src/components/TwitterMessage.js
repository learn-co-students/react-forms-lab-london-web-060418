import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet:""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name || "tweet"]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="tweet" onChange={this.handleChange} maxlength={this.props.maxChars.toString()} value={this.state.tweet}/>
        <p>Characters left: {this.props.maxChars - this.state.tweet.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
