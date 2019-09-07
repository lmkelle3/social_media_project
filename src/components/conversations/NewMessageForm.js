import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Button } from "reactstrap";
import { addMessage } from "../../store/messages/actions";
import PropTypes from "prop-types";

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
    this.props.addMessage({
      sender_id: this.props.loggedInUser.id,
      recipient_id: this.props.other_person,
      body: this.state.body
    });

    this.setState({ newMessage: "" });
  };

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <Input
          type="text"
          onChange={this.handleChange}
          name="body"
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

// SomeFormComponent.propTypes = {
//   someFunctionFromApp: PropTypes.func.isRequired
// }

export default connect(
  mapStateToProps,
  { addMessage }
)(NewMessageForm);
