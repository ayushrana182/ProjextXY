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
  position:absolute;
  top:20px;
  left:75px


`;
const RoundDiv1 = styled.div`
  width: 250px;
	height: 250px;
	background: whitesmoke;
	-moz-border-radius: 50px;
	-webkit-border-radius: 50px;
	border-radius: 250px;
  box-shadow: 5px 5px 5px grey;
  position:absolute;
  top:20px;
  left:425px


`;
const RoundDiv2 = styled.div`
  width: 250px;
	height: 250px;
	background: whitesmoke;
	-moz-border-radius: 50px;
	-webkit-border-radius: 50px;
	border-radius: 250px;
  box-shadow: 5px 5px 5px grey;
  position:absolute;
  top:20px;
  left:835px


`;



const ImageSection = () => {
  return (
    <div style={{position:'relative'}}>
      <Grid container style={{marginBottom:"50px"}}>
        <Grid item lg={4} sm={12} style={{ textAlign: 'right' }}>
          <img src={Circle2} alt='Cicle' style={{ maxWidth: '350px' }} />
          
          <RoundDiv>
          <img style={{position:"absolute",top:'5px',right:'100px'}} src={CompanyPic} alt='Cicle'  />
          <h2 style={{color:"#ffa500", position:'absolute',top:"45px",left:'40px'}}>COMPANY NAME</h2>
          <Typography style={{position:'absolute',top:'88px',width:'225px'}} variant='subtitle1' gutterBottom color='textSecondary' >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </Typography>
            </RoundDiv>

        </Grid>
        <Grid item lg={4} sm={12}>
          <img src={Circle2} alt='Cicle' style={{ maxWidth: '350px' }} />
          <RoundDiv1 >
          <img   style={{position:"absolute",top:'5px',right:'100px'}} src={LoginPic} alt='Cicle'  />
          <h2 style={{color:"#87e7eb",position:'absolute',top:"40px",left:'28px'}}>LOGIN CREDENTIAL</h2>
          <Typography style={{position:'absolute',top:'88px',width:'210px' ,left:'20px'}} variant='subtitle1' gutterBottom color='textSecondary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod eiusmod  
          </Typography>
            </RoundDiv1>
        </Grid>
        <Grid item lg={4} sm={12}>
          <img  src={Circle1} alt='Cicle' style={{ maxWidth: '278px' }} />
          <RoundDiv2>
          <img  style={{position:"absolute",top:'5px',right:'100px'}} src={ReportPic} alt='Cicle'  />
          <h2 style={{color:"#90ee90",position:'absolute',top:"40px",left:'22px'}}>PROJEXT REPORT</h2>
          <Typography style={{position:'absolute',top:'88px',width:'225px',left:'20px'}} variant='subtitle1' gutterBottom color='textSecondary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          </Typography>
            </RoundDiv2>
        </Grid>
      </Grid>
    </div>
  );
};

export default ImageSection;
