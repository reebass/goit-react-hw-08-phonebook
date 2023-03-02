import { Layout } from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { Contacts } from 'pages/Contacts';
import { Authentication } from 'pages/Authentication';
import { Home } from './Home/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Home />} />
            }
          />
          <Route path="authentication" element={<Authentication />}>
            <Route
              path="login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />
          </Route>
          <Route
            path="contacts"
            element={
              <PrivateRoute
                redirectTo="/authentication/login"
                component={<Contacts />}
              />
            }
          />
        </Route>
      </Routes>
    )
  );
};


