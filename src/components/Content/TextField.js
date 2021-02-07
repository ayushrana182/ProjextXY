import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

import InputLabel from '@material-ui/core/InputLabel';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function MultilineTextFields() {
  const [progress, setProgress] = useState(0);
  const changeProgress = () => {
    setProgress((prevProgress) => prevProgress + 10);
  };
  const classes = useStyles();

  return (
    <>
      <Header />

      <Grid container className={classes.root} spacing={4}>
        {/* ------------1------------ */}
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor='grouped-native-select'>Lorem Ipsum</InputLabel>
            <Select
              onChange={changeProgress}
              defaultValue=''
              id='grouped-select'
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>

              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>

              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* ------------2------------ */}
        <Grid item xs={6} style={{ textAlign: 'left' }}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor='grouped-select'>Lorem Ipsum</InputLabel>
            <Select
              onChange={changeProgress}
              defaultValue=''
              id='grouped-select'
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>

              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>

              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* ------------3------------ */}
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor='grouped-select'>Lorem Ipsum</InputLabel>
            <Select
              onChange={changeProgress}
              defaultValue=''
              id='grouped-select'
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>

              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>

              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* ------------4------------ */}

        <Grid item xs={6} style={{ textAlign: 'left' }}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor='grouped-select'>Lorem Ipsum</InputLabel>
            <Select
              onChange={changeProgress}
              defaultValue=''
              id='grouped-select'
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>

              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>

              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* ------------5------------ */}
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor='grouped-select'>Lorem Ipsum</InputLabel>
            <Select
              onChange={changeProgress}
              defaultValue=''
              id='grouped-select'
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>

              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>

              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* ------------6------------ */}
        <Grid item xs={6} style={{ textAlign: 'left' }}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor='grouped-select'>Lorem Ipsum</InputLabel>
            <Select
              onChange={changeProgress}
              defaultValue=''
              id='grouped-select'
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>

              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>

              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* ------------7------------ */}
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor='grouped-select'>Lorem Ipsum</InputLabel>
            <Select
              onChange={changeProgress}
              defaultValue=''
              id='grouped-select'
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>

              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>

              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* ------------8------------ */}
        <Grid item xs={6} style={{ textAlign: 'left' }}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor='grouped-select'>Lorem Ipsum</InputLabel>
            <Select
              onChange={changeProgress}
              defaultValue=''
              id='grouped-select'
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>

              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>

              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* ------------9------------ */}
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor='grouped-select'>Lorem Ipsum</InputLabel>
            <Select
              onChange={changeProgress}
              defaultValue=''
              id='grouped-select'
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>

              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>

              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* ------------10------------ */}

        <Grid item xs={6} style={{ textAlign: 'left' }}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor='grouped-select'>Lorem Ipsum</InputLabel>
            <Select
              onChange={changeProgress}
              defaultValue=''
              id='grouped-select'
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>

              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>

              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* <div
          style={{ width: '100%', height: '50px', backgroundColor: 'black' }}
        >
          <div
            style={{
              width: progress,
              height: '50px',
              backgroundColor: 'green',
            }}
          ></div>
        </div>
        {progress > 99 ? (
          <button
            style={{
              backgroundColor: 'green',
              color: 'white',
              padding: '10px',
            }}
          >
            Submit
          </button>
        ) : (
          <button
            style={{
              backgroundColor: 'red',
              color: 'white',
              padding: '10px',
            }}
            disabled
          >
            Submit
          </button>
        )} */}
      </Grid>
    </>
  );
}
