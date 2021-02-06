import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

function Header() {
  return (
    <>
      <Grid container style={{ alignText: 'center' }}>
        <Grid item xs={12}>
          {' '}
          <Typography variant='h3' gutterBottom>
            Let's get started
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='subtitle1' gutterBottom color='textSecondary'>
            All data are protected and personal information will not be sold.
          </Typography>
        </Grid>
     
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(4),
      width: '35ch',
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <form className={classes.root} noValidate autoComplete='off'>
        <div>
          <TextField
            id='standard-select-currency'
            select
            label='Company Sales Range'
            variant='outlined'
          >
            <option>1-2 Million</option>
            <option>3-5 Million</option>
            <option>5-7 Million</option>
            <option>7-9 Million</option>
          </TextField>
          <TextField
            id='standard-select-currency-native'
            select
            label='EBITDA'
            variant='outlined'
          ></TextField>
        </div>
        <div>
          <TextField
            id='filled-select-currency'
            select
            label='Industry'
            variant='outlined'
          >
            <option>50,000 - 500,000</option>
            <option>500k-1 Million</option>
            <option>1-3 Million</option>
            <option>3-5 Million</option>
          </TextField>
          <TextField
            id='filled-select-currency-native'
            select
            label='Loan Type'
            variant='outlined'
          ></TextField>
        </div>
        <div>
          <TextField
            id='outlined-select-currency'
            select
            label='Loan Term'
            variant='outlined'
          ></TextField>
          <TextField
            id='outlined-select-currency-native'
            select
            label='Lorem Ipsum'
            variant='outlined'
          ></TextField>
        </div>
        <div>
          <TextField
            id='outlined-select-currency'
            select
            label='Lorem Ipsum'
            variant='outlined'
          ></TextField>
          <TextField
            id='outlined-select-currency-native'
            select
            label='Lorem Ipsum'
            variant='outlined'
          ></TextField>
        </div>
        <div>
          <TextField
            id='outlined-select-currency'
            select
            label='Lorem Ipsum'
            variant='outlined'
          ></TextField>
          <TextField
            id='outlined-select-currency-native'
            select
            label='Lorem Ipsum'
            variant='outlined'
          ></TextField>
        </div>
      </form>
    </>
  );
}
