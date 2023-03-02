import { AppHeader } from 'components/AppHeader/AppHeader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <AppHeader />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
