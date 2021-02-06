import { Grid, Typography } from '@material-ui/core';
import React from 'react';

const Header = () => {
  return (
    <div>
      <Grid container >
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography variant='h3' gutterBottom>
            {' '}
            How ProjextXY Works?{' '}
          </Typography>
        </Grid>
        <Grid item xs={4} />
        <Grid item xs={4} style={{ textAlign: 'center' }}>
          <hr />
        </Grid>
        <Grid item xs={4} />
      </Grid>
    </div>
  );
};

export default Header;
