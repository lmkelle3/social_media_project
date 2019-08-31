import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Input, InputGroup, Label } from "reactstrap";

class ConversationForm extends Component {
  state = {
    newConvo: ""
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // this.props.dispatch(postStatus({ content: this.state.newStatus }));
  };

  render() {
    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit}>
          <div>
            <Label>
              <h4 className="mt-2">Add New Conversation</h4>
            </Label>
          </div>
          <InputGroup>
            <Input
              id="newStatus"
              name="newStatus"
              //   value={this.state.newStatus}
              onChange={this.handleChange}
            />
            <Button
              //   disabled={!this.state.newStatus}
              className="btn-sm"
              type="submit"
              color="primary"
            >
              Send
            </Button>
          </InputGroup>
        </Form>
      </div>
    );
  }
}

export default connect()(ConversationForm);
