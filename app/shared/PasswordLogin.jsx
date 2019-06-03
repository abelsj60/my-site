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