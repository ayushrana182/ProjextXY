import { Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: 150,
    color: 'white',
   
    
  },
  textWrapper:{
    width:'80%',
    margin: "0 auto"
  }
}));

const MainHeroText = () => {
  const classes = useStyles();

  return (
      <div className = {classes.textWrapper}>
    <div className={classes.root}>
      <h1>
        ProjextXY connects you to a diverse nationwide network of qualified
        lenders.
      </h1>
      <h2>
        We can help companies with positive cash flow to borrow up to $10
        Million.
      </h2>
    </div>

    </div>
  );
};

export default MainHeroText;
