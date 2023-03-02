import { Form } from "formik";
import styled from "styled-components";

export const AuthFormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 30px;
  margin-top: 15px;
`;


export const AuthButton = styled.button`
  display: block;
  padding: 8px 15px;
  min-width: 50%;

  color: currentColor;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;

  background-color: rgb(1, 123, 255);
  border: 0;
  border-radius: 4px;

  transition: color 180ms ease;

  :hover,
  :focus {
    background-color: rgba(1, 123, 255, 0.8);
  }
`