import React from 'react';
import { reduxForm, Field } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { Button, Grid } from '@material-ui/core';

import { setViewerToken } from '../ViewerReducer';
// The Field components job is to render out input html
// and pass down functions for updating the state
// as well as check to see if the values being passed are valid
// and it will do this by passing down props to the component they render
// nombre de usuario
// gebruiksnaam
// const TextFieldInput = ({ input, meta, label }) => {
//   console.log(meta);
//   // console.log('FIELD COMPONENT PROPS', props);
//   return <TextField
//     {...input}
//     label={ language === 'Dutch' ? 'gebruiksnaam':'nombre de usuario'}
//     // label={label}
//   />;
// };

const TextFieldInput = ({ input, meta, label }) => {
  // console.log('FIELD COMPONENT PROPS', props);
  return <TextField
    {...input}
    label={label}
  />;
};

// What Redux form does for us
// It will write the functions for updating form state
// It will also write state to determine the current state of each field
// It also gives us a function for getting the values out of the input
// and then putting it in out submit function

//what handleSubmit will do is pass the forms Values as the first parameter
// handleSubmit also preventsDefault for us right away
// to the function that it's calling
const SignIn = (props) => {
  const { handleSubmit, history } = props;

  console.log(props);
  const handleSignIn = async (formValues, dispatch) => {
    console.log(formValues);
    //{ username: 'Your enterereduseRName', password: 'your password' }
    try {
      const res = await axios.post('/auth/signin', formValues);
      localStorage.setItem('token', res.data);
      dispatch(setViewerToken(res.data));
      history.push('/users');
    } catch (e) {
      throw new Error(e);
    }
  }

  return (
    <form noValidate autoComplete="off">

      <Grid container spacing={3} direction="row" justify="space-evenly" alignItems="center">
       <Grid item xs={6}>
          <Field
            name='email'
            label='email'
            component={TextFieldInput}
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            name='password'
            label='password'
            component={TextFieldInput}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={ handleSubmit(handleSignIn) }
            variant="contained"
            color="primary"
            width="100%">
            Sign in
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export const WrappedSignIn = reduxForm({ form: 'signInForm' })(SignIn);
