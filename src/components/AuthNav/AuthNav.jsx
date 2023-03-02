import { Outlet } from 'react-router-dom';
import { AuthContaiter, Link, Nav } from './AuthNav.styled';

export const AuthNav = () => {
    return (
      <AuthContaiter>
        <Nav>
          <Link to="login">Log In</Link>
          <Link to="register">Register</Link>
        </Nav>
        <Outlet/>
      </AuthContaiter>
    );
  };