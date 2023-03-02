import {
    Input,
    Label,
    ValidMessage,
  } from 'components/ContactForm/ContactForm.styled';
import { AuthButton, AuthFormContainer } from 'components/RegisterFrom/RegisterForm.styled';
  import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
  import * as yup from 'yup';
  
  let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });
  
  const initualValues = {
    email: '',
    password: '',
  };
  
  export const LoginFrom = () => {
    const dispatch = useDispatch()
    const handleSubmit = (values, { resetForm }) => {
      dispatch(logIn(values))
      resetForm()
    };
    return(
    <Formik
      initialValues={initualValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <AuthFormContainer>
        <Label>
          Email
          <Input
            name="email"
            type="email"
            required
          />
          <ValidMessage name="email" component="div" />
        </Label>
        <Label>
          Password
          <Input name="password" type="password" required />
          <ValidMessage name="password" component="div" />
        </Label>
        <AuthButton type="submit">Log In</AuthButton>
      </AuthFormContainer>
    </Formik>
    )
  };
  