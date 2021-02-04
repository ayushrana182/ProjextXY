import { AppBar, Button, Toolbar } from '@material-ui/core'
import React from 'react'
import {makeStyles} from "@material-ui/styles"


const useStyles = makeStyles((theme)=>({
    appbar:{
        background:"none",
    },
    appbarWrapper:{
        width:'80%',
        margin: "0 auto"
    },
    appbarTitle:{
        flexGrow:'1'
    }
    
}))

const CtaButton = () => {
    const classes= useStyles();
    return (
        <div>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                <h1 className={classes.appbarTitle}>ProjectXY</h1>
            <Button variant="outlined" color="primary" > Apply Now</Button>
            </Toolbar>
            </AppBar>
        </div>
    )
}

export default CtaButton
