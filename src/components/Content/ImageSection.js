import React from 'react';
import Circle1 from '../../assets/circle.png';
import Circle2 from '../../assets/circle-arrow.png';
import { Grid } from '@material-ui/core';

const ImageSection = () => {
  return (
    <div>
      <Grid container >
        <Grid item xs={4}>
          <img src={Circle2} alt='Cicle' />
        </Grid>
        <Grid item xs={4}>
          <img src={Circle2} alt='Cicle' />
        </Grid>
        <Grid item xs={4}>
          <img src={Circle1} alt='Cicle' />
        </Grid>
      </Grid>
    </div>
  );
};

export default ImageSection;
