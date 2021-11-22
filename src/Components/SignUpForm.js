import React, { Component, useState } from "react";
import './Styles/SignUpForm.css';
import axios from 'axios';
import { Container, Form } from "react-bootstrap";
import { Flex, Heading, FormLabel, Input, Button, Text } from '@chakra-ui/react';

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: '',
      lName: '',
      email: '',
      username: '',
      password: '',
      statusMsg: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;
    const stateField = event.target.name;
    this.setState({
      [stateField]: inputValue,
    });
    console.log(this.state);
  }
  async handleSubmit(event) {
    event.preventDefault();
    const { fName, lName, username, password, email } = this.state;
    try {
      const response = await axios.post(
      'https://1y0i9irqr4.execute-api.us-east-2.amazonaws.com/default/serverlessAppFunction',
      {
        key1: `${fName}`,
        key2: `${lName}`,
        key3: `${username}`,
        key4: `${password}`,
        key5: `${email}`
      }
      );

      if (response.status === 200){
        this.setState({
          statusMsg: "Account created successfully",
        });
      }
    }
    catch {
      this.setState({
        stausMsg: "An error occured."
      })
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Flex height="100hv" alignItems="center" justifyContent="center">
            <Flex direction="column" background="teal.500" p={10} rounded={6}>
              <Button
                variant="back"
                type="button"
                onClick={() => this.props.setVisibleForm(0)}
              >
                Back
              </Button>
              <Heading mb={6}>Sign Up</Heading>
              <FormLabel>Email</FormLabel>
              <Input
                variant="filled" mb={3}
                type="text"
                placeholder="Enter email"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
              <FormLabel>Username</FormLabel>
              <Input
                placeholder="Create username"
                variant="filled"
                mb={3}
                type="text"
                name="username"
                onChange={this.handleChange}
                value={this.state.username}
              />
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="Create password"
                variant="filled"
                mb={3}
                type="password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
              <FormLabel>Re-enter Password</FormLabel>
              <Input
                variant="filled"
                mb={3}
                type="password"
                placeholder="Re-enter password"
                name="confirmPword"
              />

              <Button type="submit">Submit</Button>
              <Text
                color="black"
              >
                {this.state.statusMsg && this.state.statusMsg}
              </Text>
            </Flex>
          </Flex>
        </form>
      </div>
    );
  }
}
// export default SignUpForm;


// {/* <Form>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" placeholder="Enter email" />
//             <Form.Text className="text-muted">
//               We'll never share your email with anyone else.
//             </Form.Text>
//           </Form.Group>
//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </Form> */}