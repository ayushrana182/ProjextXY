import React from 'react';
import Circle1 from '../../assets/circle.png';
import Circle2 from '../../assets/circle-arrow.png';
import { Grid, Typography } from '@material-ui/core';
import CompanyPic from "../../assets/company.svg"
import LoginPic from "../../assets/login.svg"
import ReportPic from "../../assets/report.svg"
import styled from "@emotion/styled"

const RoundDiv = styled.div`
  width: 250px;
	height: 250px;
	background: whitesmoke;
	-moz-border-radius: 50px;
	-webkit-border-radius: 50px;
	border-radius: 250px;
  box-shadow: 5px 5px 5px grey;

`;



const ImageSection = () => {
  return (
    <div>
      <Grid container style={{marginBottom:"50px"}}>
        <Grid item lg={4} sm={12} style={{ textAlign: 'right' }}>
          <img src={Circle2} alt='Cicle' style={{ maxWidth: '350px' }} />
          
          <RoundDiv>
          <img src={CompanyPic} alt='Cicle'  />
          <h2 style={{color:"#ffa500"}}>COMPANY NAME</h2>
          <Typography variant='subtitle1' gutterBottom color='textSecondary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
            </RoundDiv>

        </Grid>
        <Grid item lg={4} sm={12}>
          <img src={Circle2} alt='Cicle' style={{ maxWidth: '350px' }} />
          <RoundDiv>
          <img src={LoginPic} alt='Cicle'  />
          <h2 style={{color:"#87e7eb"}}>LOGIN CREDENTIALS</h2>
          <Typography variant='subtitle1' gutterBottom color='textSecondary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
            </RoundDiv>
        </Grid>
        <Grid item lg={4} sm={12}>
          <img src={Circle1} alt='Cicle' style={{ maxWidth: '278px' }} />
          <RoundDiv>
          <img src={ReportPic} alt='Cicle'  />
          <h2 style={{color:"#90ee90"}}>PROJEXTXY REPORT</h2>
          <Typography variant='subtitle1' gutterBottom color='textSecondary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
            </RoundDiv>
        </Grid>
      </Grid>
    </div>
  );
};

export default ImageSection;
