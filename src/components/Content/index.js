import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import Header from './Header';
import MultilineTextFields from './TextField';
import LinearWithValueLabel from './ProgressBar';
import SubmitButton from './SubmitButton';
import Rocket from '../../assets/rocket.png';
import ImageSection from './ImageSection';

const index = () => {
  return (
    <div>
      <Header />
      <ImageSection stlye={{ marginBottom: '10px' }} />
      <Paper elevation={3} style={{ background: '#DCDCDC', marginTop:"20" }} >
        <Grid container style={{ textAlign: 'center' }} spacing={5}>
          <Grid item xs={12} >
            <MultilineTextFields />
          </Grid>
          <Grid item xs={3} xl={4} />

          <Grid item xs={4} xl={3}>
            <LinearWithValueLabel />
          </Grid>
          <Grid item xs={2} xl={1} style={{ textAlign: 'center' }}>
            <SubmitButton />
          </Grid>
          <Grid item xs={3}>
            <img
              src={Rocket}
              alt='Rocket'
              style={{ width: '300px', top: '0' }}
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default index;
