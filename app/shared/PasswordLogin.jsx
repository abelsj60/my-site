import React from 'react';
import styled from 'styled-components';

const FormHolder = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fd1172;
`;
const Feedback = styled.p`
  position: absolute;
  font-size: 50px;
  top: 10%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Label = styled.label`
  margin-bottom: 15px;
  font-size: 20px;
  color: white;
`;
const PasswordInput = styled.input`
  font-size: 16px;
`;
const Submit = styled.div`
  margin-top: 15px;
`;
const Enter = styled.input``;

export default function PasswordLogin(props) {
  // Excellent primer on form use in React:
  // https://stackoverflow.com/a/36683831

  return (
    <FormHolder>
      <Feedback>
        {props.appState.wrongPassword}
      </Feedback>
      <Form
        action=""
        onSubmit={props.handlePasswordSubmit}
      >
        <p>
          Welcome to my prototype site. As of 7/4/19, it's in the final stages of development! The fantastically talented illustrator
          is hard at work on the custom images. In the meantime, the home page, and story chapters make use of placeholder artwork
          from Shutterstock. Drop me a line (abelsj60__at__gmail.com) if you want me to holler when it's all done...or, if you've
          got the password, feel free to check it out now! Just be sure to come back later this summer to see the finished
          version — the artwork promises to out-of-this world!
        </p>
        <InputContainer>
          <Label>
            Password
          </Label>
          <PasswordInput
            autoFocus
            required
            type="text"
            value={props.appState.password}
            onChange={props.handlePasswordEntry}
          />
        </InputContainer>
        <Submit>
          <Enter
            type="submit"
            value="Enter"
          />
        </Submit>
      </Form>
    </FormHolder>
  );
}
