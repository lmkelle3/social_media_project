import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Button } from "reactstrap";
import { addMessage } from "../../store/messages/actions";
import { withRouter } from "react-router-dom";

class NewMessageForm extends Component {
  state = {
    newMessage: ""
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("CURRENTUSER:", this.props.loggedInUser.id);
    console.log("Recipient:", this.props.match.params.id);
    this.props.addMessage({
      recipient_id: Number(this.props.match.params.id),
      sender_id: this.props.loggedInUser.id,
      body: this.state.newMessage
    });

    this.setState({ newMessage: "" });
  };

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <Input
          type="text"
          onChange={this.handleChange}
          name="newMessage"
          placeholder="New Message"
          value={this.state.newMessage}
        />
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    loggedInUser: state.users.loggedInUser
  };
};

export default connect(
  mapStateToProps,
  { addMessage }
)(withRouter(NewMessageForm));
