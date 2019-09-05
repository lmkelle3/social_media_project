import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Input, InputGroup, Label, Row, Col } from "reactstrap";

class ConversationForm extends Component {
  state = {
    newMessage: ""
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { newMessageTo, newMessage, messages } = this.state;
    this.setState({
      messages: [...messages, newMessage, newMessageTo],
      newMessageTo: { content: this.state.newMessageTo },
      newMessage: { content: this.state.newMessage }
    });
    // this.props.dispatch(postMessage({ content: this.state.newMessage }));
  };

  render() {
    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit}>
          <div>
            <Label>
              <h4 className="mt-2">Start New Conversation</h4>
            </Label>
          </div>
          <InputGroup>
            <Col>
              <Row>
                <p>To:</p>
                <Input
                  id="newMessageTo"
                  name="newMessageTo"
                  value={this.state.newMessageTo}
                  onChange={this.handleChange}
                />
              </Row>
              <Row>
                <p className="mt-2">Body:</p>
                <Input
                  id="newMessage"
                  name="newMessage"
                  value={this.state.newMessage}
                  onChange={this.handleChange}
                />
              </Row>
              <Row>
                <Button
                  disabled={!this.state.newMessage}
                  className="btn-sm mt-2"
                  type="submit"
                  color="primary"
                >
                  Send
                </Button>
              </Row>
            </Col>
          </InputGroup>
        </Form>
      </div>
    );
  }
}

export default connect()(ConversationForm);
