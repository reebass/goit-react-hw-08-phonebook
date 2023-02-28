import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import 'yup-phone';
import {
  Input,
  Label,
  ValidMessage,
  FormContainer,
  Button,
  InputNumber,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';




let schema = yup.object().shape({
  name: yup.string().required(),
  number: yup
    .string()
    .phone('UA', true, 'Please enter a Ukrainian phone number.')
    .required('Phone number is required'),
});

const initualValues = {
  name: '',
  number: '+38',
};

const phoneMask = [
  '+',
  '3',
  '8',
  ' ',
  '(',
  '0',
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
];

export const ContactForm = ({onClose}) => {

  const arrContacts = useSelector(selectContacts);
  const dispatch = useDispatch()
  const handleSubmit = (values, { resetForm }) => {
      const { name } = values;
    if (
      arrContacts.some(
        contact => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact(values))
    resetForm();
    onClose()
  };

  return (
    <Formik
      initialValues={initualValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      {props => (
        <FormContainer>
          <Label>
            Name
            <Input
              name="name"
              placeholder="Robert Higgins"
              type="text"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ValidMessage name="name" component="div" />
          </Label>
          <Label>
            Number
            <Input name="number">
              {({ field }) => (
                <InputNumber
                  {...field}
                  mask={phoneMask}
                  type="tel"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
              )}
            </Input>
            <ValidMessage name="number" component="div" />
          </Label>
          <Button
            type="submit"
            disabled={
              (props.values.name !== '') & (props.values.number !== '')
                ? false
                : true
            }
          >
            Add contact
          </Button>
        </FormContainer>
      )}
    </Formik>
  );
};


ContactForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
