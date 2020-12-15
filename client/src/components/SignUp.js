import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { Container, Button, Grid, FormLabel, RadioGroup, FormControlLabel, Radio, Input } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setViewerToken } from '../pages/Viewer';
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
class SignUp extends Component {

  handleSignUp = async (formValues) => {
    console.log(formValues);
    //{ username: 'Your enterereduseRName', password: 'your password' }
    try {
      const res = await axios.post('/auth/signup', formValues);
      console.log('I AM THE SIGNUP USERS TOKEN', res.data);
      localStorage.setItem('token', res.data);
      this.props.setViewerToken(res.data);
      this.props.history.push('/users');
      // sessionStorage.setItem('token', res.data);
    } catch (e) {
      throw new Error(e);
    }
  }

  render() {
    console.log(this.props);
    const { handleSubmit } = this.props;
    return (
      <form noValidate autoComplete="off">
        <Container maxWidth="xs">

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
            <Field
              name='nickname'
              label='nickname'
              component={TextFieldInput}
            />
          </Grid>
          <Grid item xs={12}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row defaultValue="female" aria-label="gender" name="customized-radios">
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other/Prefer not to say" />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
          {/* <FormLabel component="legend">Avatar</FormLabel>
            <Grid item xs={2}>
              <input type="image" src="../../public/Avatars/1bOMmJI.png"></input>
            </Grid>
            <Grid item xs={2}>
              <input type="image" src="../../public/Avatars/1r9b1v6.png"></input>
            </Grid>
            <Grid item xs={2}>
              <input type="image" src="../../public/Avatars/2TDBDRJ.png"></input>
            </Grid>
            <Grid item xs={2}>
              <input type="image" src="../../public/Avatars/1bOMmJI.png"></input>
            </Grid>
            <Grid item xs={2}>
              <input type="image" src="../../public/Avatars/1bOMmJI.png"></input>
            </Grid>
            <Grid item xs={2}>
              <input type="image" src="../../public/Avatars/1bOMmJI.png"></input>
            </Grid>
            <Grid item xs={2}>
              <input type="image" src="../../public/Avatars/1bOMmJI.png"></input>
            </Grid> */}
          </Grid>
          <Grid item xs={12} flexGrow={1}>
            <Button
              onClick={ handleSubmit(this.handleSignUp) }
              variant="contained"
              color="primary">
              Sign up
            </Button>
          </Grid>
        </Grid>
        </Container>
      </form>
    );
  }
}


// const SignUp = (props) => {
//   const { handleSubmit, history } = props;
//
//   console.log(props);
//   const handleSignUp = async (formValues) => {
//     console.log(formValues);
//     //{ username: 'Your enterereduseRName', password: 'your password' }
//     try {
//       const res = await axios.post('/auth/signup', formValues);
//       console.log('I AM THE SIGNUP USERS TOKEN', res.data);
//       localStorage.setItem('token', res.data);
//       history.push('/users');
//       // sessionStorage.setItem('token', res.data);
//     } catch (e) {
//       throw new Error(e);
//     }
//   }
//
//   return (
//     <form noValidate autoComplete="off">
//       <Field
//         name='username'
//         label='username'
//         component={TextFieldInput}
//       />
//       <Field
//         name='password'
//         label='password'
//         component={TextFieldInput}
//       />
//       <Button
//         onClick={ handleSubmit(handleSignUp) }
//         variant="contained"
//         color="primary">
//         Sign up
//       </Button>
//     </form>
//   );
// };
function mapStateToProps(state) {
  return { superman: state.viewer };
};

// mapDispatchToProps

// const composedComponent = connect(mapStateToProps, { setUserToken })(SignUp);
//
//
// export const WrappedSignUp = reduxForm({ form: 'signUpForm' })(composedComponent);


// export const WrappedSignUp = reduxForm({ form: 'signUpForm' })(connect(mapStateToProps, { setUserToken })(SignUp));

export const WrappedSignUp = compose(
  reduxForm({ form: 'signUpForm' }),
  connect(mapStateToProps, { setViewerToken })
)(SignUp);
