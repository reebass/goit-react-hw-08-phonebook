import {
  Input,
  Label,
  ValidMessage,
} from 'components/ContactForm/ContactForm.styled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import * as yup from 'yup';
import { AuthButton, AuthFormContainer } from './RegisterForm.styled';

let schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const initualValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterFrom = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initualValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <AuthFormContainer>
        <Label>
          UserName
          <Input name="name" type="text" required />
          <ValidMessage name="name" component="div" />
        </Label>
        <Label>
          Email
          <Input name="email" type="email" required />
          <ValidMessage name="email" component="div" />
        </Label>
        <Label>
          Password
          <Input name="password" type="password" required />
          <ValidMessage name="password" component="div" />
        </Label>
        <AuthButton type={'submit'}>Register</AuthButton>
      </AuthFormContainer>
    </Formik>
  );
};
