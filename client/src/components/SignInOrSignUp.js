import React from 'react';
import { WrappedSignIn } from './SignIn';
import { WrappedSignUp } from './SignUp';
import { Container, Grid } from '@material-ui/core';




export default function SignInSignUp() {
  return (
    <div>
      <Container maxWidth="xs">
       <Grid container spacing={3} direction="row" justify="space-evenly" alignItems="center">
       <Grid item xs={12}>
          <WrappedSignIn />
        </Grid>
        <Grid item xs={12}>
          <p text-align="center">OR</p>
        </Grid>
        <Grid item xs={12}>
          <WrappedSignUp />
        </Grid>
      </Grid>
      </Container>
    </div>
  );
}
