import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import styles from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {
  const dispatcher = useDispatch();

  const nameId = useId();
  const phoneId = useId();

  const initialValues = {
    name: '',
    number: '',
  };

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  function onSubmit({ name, number }, { resetForm }) {
    dispatcher(addContact(name, number));
    resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={contactSchema}
    >
      <Form className={styles.contactForm}>
        <div className={styles.contactFormGroup}>
          <label htmlFor={nameId}>Name</label>
          <Field name="name" id={nameId} type="text"></Field>
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>
        <div className={styles.contactFormGroup}>
          <label htmlFor={phoneId}>Phone</label>
          <Field name="number" id={phoneId} type="phone"></Field>
          <ErrorMessage
            name="number"
            component="div"
            className={styles.error}
          />
        </div>
        <div className={styles.contactFormSubmit}>
          <button type="submit">Add contact</button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;