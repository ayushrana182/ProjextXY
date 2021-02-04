import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import BgImg from '../../assets/banner.png';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '80vh',
    backgroundImage: `url(${BgImg})`,
    backgroundRepeat: 'no-repeat',
    position: 'relative',
   
  },
 
}));

export default function HeroBackground() {
  const classes = useStyles();
  return (
    
      <div className={classes.root}>
        <CssBaseline />
      </div>
    
  );
}
