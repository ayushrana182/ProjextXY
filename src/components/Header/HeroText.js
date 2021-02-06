import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: 150,
    color: 'white',
  },
  textWrapper: {
    width: '80%',
    margin: '0 auto',
  },
}));

const MainHeroText = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={1} className={classes.root} maxWidth={'xl'}>
        <Grid item xs={6} style={{ textAlign: 'center' }}>
          <h1>
            ProjextXY connects you to a diverse nationwide <br />
            network of qualified lenders.
          </h1>
        </Grid>
        <Grid item xs={6} />

        <Grid item xs={6}>
          {' '}
          <Typography variant='subtitle1' style={{ textAlign: 'center' }}>
            We can help companies with positive cash flow to borrow up to $10
            Million.
          </Typography>
        </Grid>
        <Grid item xs={6} />
      </Grid>
    </div>
  );
};

export default MainHeroText;
