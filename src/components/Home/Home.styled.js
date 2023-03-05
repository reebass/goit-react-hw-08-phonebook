import { Link } from "react-router-dom";
import styled from "styled-components";

export const WelcomeText = styled.p`
    & > span {
      display: block;
      font-weight: 600;
      font-size: 18px;
      margin-bottom: 6px;
      color: rgb(1, 140, 255);
    }
    display: block;
    font-size: 16px;
    font-weight: 500px;
    text-align: center;
    margin: 40px auto 20px auto;
    width: 270px;
    
` 

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`

export const AuthLink = styled(Link)`
  display: block;
  padding: 5px 10px;
  min-width: 120px;

  color: currentColor;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;

  background-color: rgb(1, 123, 255);
  border: 1px solid rgb(1, 123, 255);
  border-radius: 4px;

  transition: color 180ms ease;


  :hover,
  :focus {
    background-color: rgba(1, 123, 255, 0.8);
  }


`