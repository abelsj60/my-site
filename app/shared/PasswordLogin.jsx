import React from 'react';
import styled from 'styled-components';

const FormHolder = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fd1172;
`;
const Feedback = styled.p`
  position: absolute;
  font-size: 50px;
  top: 10%;
`;
const ExplanationContainer = styled.div`
  max-height: 300px;
  max-width: 200px;
  overflow: auto;
  margin-bottom: 25px;

  @media (min-width: 425px) {
    max-width: 300px;
  }
`;
const ExplanationText = styled.p`
  color: yellow;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: center;
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
      <ExplanationContainer>
        <ExplanationText>
          Hi! Welcome to my prototype site. <br /><br /> As of 7/4/19, it's in the final
          stages of development! <br /><br /> A fantastically talented illustrator is
          hard at work on custom art. In the meantime, it relies on placeholder
          images from Shutterstock (on the home and chapter pages). <br /><br /> If
          you've got the password, check it out, but be sure to come back later
          this summer when the final artwork's done!
        </ExplanationText>
      </ExplanationContainer>
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
