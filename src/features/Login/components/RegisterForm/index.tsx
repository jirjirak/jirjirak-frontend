import { Fade } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import type { FormikConfig } from 'formik';
import { Field, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import { useTypeSafeTranslation } from 'hooks/useTypeSafeTranslation';
import type { ReactElement } from 'react';
import React from 'react';

import useStyles from './styles';

type FormValues = {
  username: string;
  password: string;
};
type Props = FormikConfig<FormValues>;

function RegisterForm({ onSubmit, initialValues, ...rest }: Props): ReactElement {
  const classes = useStyles();
  const { translate } = useTypeSafeTranslation();

  function registerValidate(values: FormValues) {
    const errors: Partial<FormValues> = {};
    if (!values.username?.trim()) errors.username = translate('ERROR_REQUIRED');
    if (!values.password?.trim()) errors.password = translate('ERROR_REQUIRED');
    return errors;
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validate={registerValidate} {...rest}>
      {({ handleSubmit }) => (
        <Fade in timeout={500}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Field component={TextField} label="Username" name="username" variant="outlined" />
            <br />
            <Field component={TextField} label="Password" name="password" variant="outlined" />
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              Sign up
            </Button>
          </form>
        </Fade>
      )}
    </Formik>
  );
}

RegisterForm.defaultProps = {
  initialValues: {
    username: '',
    password: '',
  },
};

export default RegisterForm;
