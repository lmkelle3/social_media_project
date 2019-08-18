import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Input, InputGroup, Label } from "reactstrap";
import { postStatus } from "../../store/statuses/actions";

class NewStatusForm extends Component {
  state = {
    newStatus: ""
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(postStatus({ content: this.state.newStatus }));
  };

  render() {
    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit}>
          <div>
            <Label>
              <h4 className="mt-2">Add New Status</h4>
            </Label>
          </div>
          {/* <span className="d-flex"> */}
          {/* <div> */}
          {/* <Input
                type="text"
              /> */}
          <InputGroup>
            <Input
              addonType="append"
              id="newStatus"
              name="newStatus"
              value={this.state.newStatus}
              onChange={this.handleChange}
            />
            <Button
              disabled={!this.state.newStatus}
              className="btn-sm"
              type="submit"
              color="primary"
            >
              Post Status
            </Button>
          </InputGroup>
          {/* </div> */}
          {/* <Button
              disabled={!this.state.newStatus}
              className="btn-sm"
              type="submit"
              color="primary"
            >
              Post Status
            </Button> */}
          {/* </span> */}
        </Form>
      </div>
    );
  }
}

export default connect()(NewStatusForm);
