import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  flex-basis: calc(100% / 2);
  padding: 5px 10px;

  color: #54585D;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 20px;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;

  background-color: transparent;


  transition: color 180ms ease;

  &.active {
    color: rgb(1, 123, 255);
  }

  :not(:last-child) {
    border-right: 1px solid #54585D;
  }
`

export const AuthContaiter = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;
`

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #54585D; 
`