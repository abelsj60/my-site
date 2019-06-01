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
const PasswordForm = styled.form`
  display: flex;
`;
const Label = styled.label`
  margin-right: 15px;
  color: white;
`;
const Submit = styled.div`
  margin-left: 15px;
`;

export default function PasswordLogin(props) {
  // https://stackoverflow.com/a/36683831

  return (
    <FormHolder>
      <PasswordForm
        action=""
        onSubmit={props.handlePasswordSubmit}
      >
        <div>
          <Label>
            Password
          </Label>
          <input
            autoFocus
            required
            type="text"
            value={props.appState.password}
            onChange={props.handlePasswordEntry}
          />
        </div>
        <Submit>
          <input
            type="submit"
            value="Enter"
          />
        </Submit>
      </PasswordForm>
    </FormHolder>
  );
}
