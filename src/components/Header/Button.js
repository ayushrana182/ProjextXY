import { AppBar, Button, Grid, Toolbar } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: 'none',
  },
  
  appbarTitle: {
    flexGrow: '1',
  },
}));

const CtaButton = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <AppBar className={classes.appbar} elevation={0} position="absolute">
        <Toolbar>
          <Grid item xs={6} sm={6} style={{ textAlign: 'center' }}>
            {' '}
            <h1>Project XY</h1>
          </Grid>
          <Grid item xs={4} style={{ marginTop: 15, textAlign: 'end' }}>
            <Button variant='contained' color='primary'>
              {' '}
              Apply Now
            </Button>
            <Grid item xs={2} />
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default CtaButton;
