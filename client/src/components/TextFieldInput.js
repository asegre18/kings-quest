import React, {useEffect, useState} from 'react';
import {TextField} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

 const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#7269EF',
      dark: '#464194',
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#3FF3CB',
      main: '#06D6A0',
     // dark: will be calculated from palette.secondary.main,
      contrastText: '#7269EF',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.9,
  },
});
export const TextFieldInput = ({ input, meta }) => {
  // console.log(input);
  return <TextField
    {...input}
    label={input.name}
    variant="filled"
  />;
};

export const PassInput = ({ input, meta }) => {
  // console.log(input);

    const dispatch = useDispatch();
  //  create local State
    const [ password, setPassword ] = useState('');
    useEffect(()=>{
        // put in logic for passwordStrength here
        dispatch(computeStrength({password}));
        console.log(password.length);
    },[password]);
    const changeHandler = (e) => {
        setPassword(e.target.value);

    }
  return <MuiThemeProvider theme={theme}><TextField
      {...input}
      value={password}
      label='password'
      onChange={ changeHandler}
      // label={label}
      variant="filled"
      type="password"
      color="secondary"
  />;</MuiThemeProvider>
};