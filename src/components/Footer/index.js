import { Grid, List, ListItem, ListItemText, Paper } from '@material-ui/core';
import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Jext() {
  return (
    <List>
      <ListItem>
        <ListItemText primary='Projext XY' style={{ color: 'white' }}/>
      </ListItem>
      <ListItem>
        <ListItemText primary='It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' style={{ color: 'white' }}/>
      </ListItem>
      <ListItem>
        <ListItemText primary='Terms of Use | Privacy Policy' style={{ color: 'white' }}/>
      </ListItem>
    </List>
  );
}

function Links() {
  return (
    <List disablePadding>
      <ListItem>
        <ListItemText primary='Links' style={{ color: 'white', }}/>
      </ListItem>
      <ListItem>
        <ArrowForwardIosIcon  style={{ color: 'white', height:"13px"}} />
        <ListItemText primary='About Us' style={{ color: 'white' }} />
      </ListItem>
      <ListItem>
        <ArrowForwardIosIcon  style={{ color: 'white' , height:"13px" }}/>
        <ListItemText primary='Services' style={{ color: 'white' }} />
      </ListItem>
      <ListItem>
        <ArrowForwardIosIcon  style={{ color: 'white' , height:"13px" }}/>
        <ListItemText primary='Projects' style={{ color: 'white' }}/>
      </ListItem>
      <ListItem>
        <ArrowForwardIosIcon  style={{ color: 'white' , height:"13px" }} />
        <ListItemText primary='Careers'style={{ color: 'white' }} />
      </ListItem>
      <ListItem>
        <ArrowForwardIosIcon  style={{ color: 'white' , height:"13px" }}/>
        <ListItemText primary='Contact Us' style={{ color: 'white' }}/>
      </ListItem>
    </List>
  );
}

function ContactUs() {
  return (
    <List>
      <ListItem>
        <ListItemText primary='Contact Us' style={{ color: 'white' }} />
      </ListItem>

      <ListItem>
        <ListItemText primary='+123 12 1212121' style={{ color: 'white' }} />
      </ListItem>
    </List>
  );
}
function FollowUs() {
  return (
    <List>
      <ListItem>
        <ListItemText primary='Follow Us' style={{ color: 'white' }} />
      </ListItem>
      <ListItem>
        <Grid container>
          <Grid item xs={1}>
            <FacebookIcon  style={{ color: 'white' }}/>
          </Grid>
          <Grid item xs={1}>
            <InstagramIcon style={{ color: 'white' }} />
          </Grid>
          <Grid item xs={1}>
            <LinkedInIcon  style={{ color: 'white' }}/>
          </Grid>
          <Grid item xs={1}>
            <TwitterIcon  style={{ color: 'white' }} />
          </Grid>
        </Grid>
      </ListItem>
    </List>
  );
}

const index = () => {
  return (
    <div>
      <Paper elevation={3} style={{ background: '#228B22', marginTop: '20' }}>
        <Grid container>
          <Grid item xs={3} style={{ textAlign: 'center' }}>
            <Jext />
          </Grid>
          <Grid item xs={3} style={{ textAlign: 'right' }}>
            <Links />
          </Grid>
          <Grid item xs={3} style={{ textAlign: 'center' }}>
            <FollowUs />
          </Grid>
          <Grid item xs={3} style={{ textAlign: 'center' }}>
            <ContactUs />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default index;
