import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {  CssBaseline, Grid } from '@material-ui/core';
import BgImg from '../../assets/banner.png';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '600px',
    backgroundImage: `linear-gradient(40deg, rgba(0, 0, 0, 0.4), rgba(0,0,0,0.7)),url(${BgImg})`,
    backgroundRepeat: 'no-repeat',
    position: 'static',
    backgroundPosition: "center",
    objectFit:"cover"
   
  },
 
}));

export default function HeroBackground() {
  const classes = useStyles();
  return (

     <Grid container >
       <Grid item xs={12} className={classes.root}>    
    
        <CssBaseline />
        </Grid>
      </Grid>
  
    
    
  );
}
