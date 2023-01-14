import React from 'react';

import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { initialValue, validationString, message } from '../settings';

import Notification from 'components/Notification';
import { Box } from 'components/Box';

import {
  LabelStyled,
  FieldStyled,
  ButtonStyled,
  ButtonIconStyled,
} from './ContactForm.styled';

const PhonebookEditor = ({ onSubmit }) => {
  const handelSubmit = (values, { resetForm }) => {
    const id = nanoid();

    onSubmit({ id, ...values });

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handelSubmit}
      validationSchema={validationShema}
    >
      <Form>
        <Box
          display="flex"
          flexDirection="column"
          mt="4"
          backgroundColor="third"
          borderRadius="standart"
          p="4"
        >
          <LabelStyled htmlFor="name">Name</LabelStyled>

          <Box mb="3" display="flex" flexDirection="column">
            <FieldStyled
              name="name"
              placeholder="Name"
              id="name"
              title="Name may contain only letters, apostrophe, dash and spaces."
            />

            <ErrorMessage name="name">
              {message => <Notification message={message} />}
            </ErrorMessage>
          </Box>

          <LabelStyled htmlFor="phone">Phone number</LabelStyled>

          <Box mb="5" display="flex" flexDirection="column">
            <FieldStyled
              name="phone"
              type="tel"
              placeholder="Phone number"
              id="phone"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />

            <ErrorMessage name="phone">
              {message => <Notification message={message} />}
            </ErrorMessage>
          </Box>

          <ButtonStyled type="submit">
            <ButtonIconStyled size="26" /> Add contact
          </ButtonStyled>
        </Box>
      </Form>
    </Formik>
  );
};

export default PhonebookEditor;

const validationShema = yup.object().shape({
  name: yup
    .string()
    .matches(validationString.name, message.wrongInput)
    .required(message.isRequired),
  phone: yup
    .string()
    .matches(validationString.phone, message.wrongInput)
    .required(message.isRequired),
});

PhonebookEditor.propTypes = {
  onSubmit: PropTypes.func,
}