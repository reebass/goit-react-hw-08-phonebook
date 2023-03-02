import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${props => {
    if(props.login) {
      return  'space-around'
    } else {
        return 'center'
    }
  }};
  margin-bottom: 200px;
`;

export const Logo = styled(Link)`
  font-size: ${props => {
    if (props.login) {
      return '20px';
    } else {
      return '35px';
    }
  }};
  font-weight: 600;
  color: currentColor;
  text-decoration: none;
  margin: 0;
`;
